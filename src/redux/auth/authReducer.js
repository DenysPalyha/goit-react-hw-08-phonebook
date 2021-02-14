import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';

const initialeState = {
  name: null,
  email: null,
};

const user = createReducer(initialeState, {
  [authActions.registerUserSuccess]: (_, { payload }) => payload.user,
  [authActions.loginUserSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialeState,
});

const token = createReducer(null, {
  [authActions.registerUserSuccess]: (_, { payload }) => payload.token,
  [authActions.loginUserSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerUserError]: (_, { payload }) => payload,
  [authActions.loginUserError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,

  [authActions.registerUserSuccess]: () => null,
  [authActions.loginUserSuccess]: () => null,
  [authActions.getCurrentUserSuccess]: () => null,
  [authActions.logoutSuccess]: () => null,
});

const loading = createReducer(false, {
  [authActions.registerUserRequest]: () => true,
  [authActions.registerUserSuccess]: () => false,
  [authActions.registerUserError]: () => false,

  [authActions.loginUserRequest]: () => true,
  [authActions.loginUserSuccess]: () => false,
  [authActions.loginUserError]: () => false,

  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,

  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  loading,
});
