import axios from 'axios';
import authActions from '../auth/authActions';
import { store } from 'react-notifications-component';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = credentials => dispatch => {
  dispatch(authActions.registerUserRequest());

  axios
    .post('/users/signup', credentials)
    .then(response => {
      console.log(response);
      token.set(response.data.token);
      dispatch(authActions.registerUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(authActions.registerUserError(error));
      store.addNotification({
        title: 'Error!',
        message: 'User with the same email already exists!',
        type: 'danger',
        insert: 'bottom',
        container: 'top-center',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: false,
          showIcon: true,
        },
      });
    });
};

const loginUser = credentials => dispatch => {
  dispatch(authActions.loginUserRequest());

  axios
    .post('/users/login', credentials)
    .then(response => {
      console.log(response.data);
      token.set(response.data.token);
      dispatch(authActions.loginUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(authActions.loginUserError(error));
      store.addNotification({
        title: 'Error!',
        message: 'Invalid email or password!',
        type: 'danger',
        insert: 'bottom',
        container: 'top-center',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: false,
          showIcon: true,
        },
      });
    });
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error)));
};

const getUserCurrent = () => (dispatch, getState) => {
  const {
    auth: { token: persistToken },
  } = getState();

  if (!persistToken) {
    return;
  }

  token.set(persistToken);

  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(authActions.getCurrentUserError(error)));
};

export default {
  registerUser,
  loginUser,
  logOut,
  getUserCurrent,
};
