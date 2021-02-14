import { createReducer } from '@reduxjs/toolkit';

import {
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  searchFilter,
} from '../userContacts/contactsActions';

const initialeState = {
  contacts: [],
  filter: '',
  loading: false,
};

const addContactsReducer = (state, action) => {
  return {
    ...state,
    contacts: [...state.contacts, action.payload],
    loading: false,
  };
};

const deleteContactsReducer = (state, action) => {
  return {
    ...state,
    contacts: [
      ...state.contacts.filter(contact => contact.id !== action.payload),
    ],
    loading: false,
  };
};

const searchContactsReducer = (state, action) => ({
  ...state,
  filter: action.payload,
});

const loadingReduserTrue = state => {
  state.loading = true;
};

const getContactsReducer = (state, action) => ({
  ...state,
  contacts: action.payload,
});

const getContactsFalse = (state, action) => ({
  ...state,
  contacts: action.payload,
  loading: false,
});

export const contactsReducer = createReducer(
  { ...initialeState },
  {
    [addContactsSuccess]: addContactsReducer,
    [deleteContactsSuccess]: deleteContactsReducer,
    [searchFilter]: searchContactsReducer,

    [addContactsRequest]: loadingReduserTrue,
    [addContactsError]: addContactsReducer,

    [getContactsSuccess]: getContactsReducer,

    [getContactsRequest]: loadingReduserTrue,
    [getContactsSuccess]: getContactsFalse,
    [getContactsError]: getContactsFalse,

    [deleteContactsRequest]: loadingReduserTrue,
    [deleteContactsError]: getContactsFalse,
    [deleteContactsError]: getContactsFalse,
  },
);
