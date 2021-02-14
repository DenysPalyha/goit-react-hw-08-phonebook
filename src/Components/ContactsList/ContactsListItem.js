import React from 'react';
import './ContactsList.css';
import contactsOperation from '../../redux/userContacts/contactsOperations';
import { connect } from 'react-redux';

const ContactsListItem = ({ contact, onDelete }) => {
  return (
    <li className="contacts-list-item" key={contact.id}>
      <div className="contacts-list-info">
        <p className="contacts-list-name">
          {contact.name}
          <span className="contacts-list-number">{contact.number}</span>
        </p>
        <button
          className="contacts-list-button"
          id={contact.id}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () =>
    dispatch(contactsOperation.deleteContacts(ownProps.contact.id)),
});

export default connect(null, mapDispatchToProps)(ContactsListItem);
