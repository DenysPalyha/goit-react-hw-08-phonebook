import { createAction } from '@reduxjs/toolkit';

// request, success и error

const registerUserRequest = createAction('auth/registerUserRequest');
const registerUserSuccess = createAction('auth/registerUserSuccess');
const registerUserError = createAction('auth/registerUserError');

const loginUserRequest = createAction('auth/loginUserRequest');
const loginUserSuccess = createAction('auth/loginUserSuccess');
const loginUserError = createAction('auth/loginUserError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');


export default {
   registerUserRequest,
   registerUserSuccess,
   registerUserError,
   loginUserRequest,
   loginUserSuccess,
   loginUserError,
   logoutRequest,
   logoutSuccess,
   logoutError,
   getCurrentUserRequest,
   getCurrentUserSuccess,
   getCurrentUserError
};
