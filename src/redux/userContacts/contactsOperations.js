import axios from 'axios';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from '../userContacts/contactsActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addContacts = contacts => dispatch => {
  dispatch(addContactsRequest());

  axios
    .post('/contacts', contacts)
    .then(response => {
      dispatch(addContactsSuccess(response.data));
    })
    .catch(error => dispatch(addContactsError()));
};

const getContacts = () => dispatch => {
  dispatch(getContactsRequest());

  axios
    .get('/contacts')
    .then(response => {
      dispatch(getContactsSuccess(response.data));
    })
    .catch(error => dispatch(getContactsError()));
};

const deleteContacts = id => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactsSuccess(id));
    })
    .catch(error => dispatch(deleteContactsError()));
};

export default { addContacts, getContacts, deleteContacts };
