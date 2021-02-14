import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsForm from '../../Components/ContactsForm/ContactsForm';
import ContactsList from '../../Components/ContactsList/ContactsList';
import Filter from '../../Components/Filter/Filter';
import Notification from '../../Components/Notification/Notification';
import LoaderContacts from '../../Components/Loader/Loader';
import contactsOperations from '../../redux/userContacts/contactsOperations';
import contactsSelectors from '../../redux/userContacts/contactsSelectors';
import { CSSTransition } from 'react-transition-group';
import '../../Components/ContactsForm/Transition/ContactsFormTransition.css';
import './Contacts.css';
import './Transition/ContactsTransition.css';
import '../../Components/Filter/Transition/Filter-transition.css';
import '../../Components/Notification/Transition/notificationTransition.css';
import '../../Components/ContactsList/Transition/contactListTransition.css';

class Contacts extends Component {
  state = {
    isOpenModal: false,
  };

  componentDidMount() {
    this.props.onGetContacts();
  }

  hendleIsOpenModal = () => {
    this.setState({ isOpenModal: true });
    setTimeout(() => {
      this.setState({ isOpenModal: false });
    }, 3000);
  };

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title-transition"
          unmountOnExit
        >
          <h1 className="contacts-title">Phonebook</h1>
        </CSSTransition>

        <CSSTransition
          in={this.state.isOpenModal}
          timeout={500}
          classNames="notification-transition"
          unmountOnExit
        >
          <Notification />
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="contacts-form"
          unmountOnExit
        >
          <ContactsForm openModal={this.hendleIsOpenModal} />
        </CSSTransition>

        {this.props.isLoading && <LoaderContacts />}

        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames="transition-filter"
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <CSSTransition
          in={this.props.contacts.length > 0}
          timeout={250}
          classNames="contacts-list-transition"
          unmountOnExit
        >
          <ContactsList />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isLoading: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  onGetContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
