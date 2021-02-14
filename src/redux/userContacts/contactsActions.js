import { createAction } from '@reduxjs/toolkit';

const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction('contacts/getContactsSuccess');
const getContactsError = createAction('contacts/getContactsError');

const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
const deleteContactsError = createAction('contacts/deleteContactsError');

const searchFilter = createAction('contacts/filterContacts');

export {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  searchFilter,
};
