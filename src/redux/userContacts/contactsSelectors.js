import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contact.loading;

const getContacts = state => state.contact.contacts;

const getFilter = state => state.contact.filter;

const getvisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(item => item.name.toLowerCase().includes(filter));
  },
);

export default { getLoading, getContacts, getFilter, getvisibleContacts };
