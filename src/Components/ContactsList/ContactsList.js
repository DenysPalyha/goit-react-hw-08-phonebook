import React from 'react';
import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import contactsSelector from '../../redux/userContacts/contactsSelectors';
import './ContactsList.css';
import './Transition/contactListTransition.css';

const ContactsList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="contacts-list">
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames="contacts-list-transition"
          unmountOnExit
        >
          <ContactsListItem key={contact.id} contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelector.getvisibleContacts(state)
  };
};

export default connect(mapStateToProps)(ContactsList);
