import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsSelector from '../../redux/userContacts/contactsSelectors';
import contactsOperation from '../../redux/userContacts/contactsOperations';
import './ContactsForm.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onHendleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHendleSubmite = e => {
    e.preventDefault();
    const { contacts } = this.props;

    const availableContact = contacts.some(
      contact => contact.name === this.state.name,
    );

    if (availableContact) {
      this.props.openModal();
      return this.setState({ name: '', number: '' });
    }

    this.props.onAddContacts({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="form-styles" onSubmit={this.onHendleSubmite}>
        <label className="label-form">
          Name
          <input
            className="input-form"
            type="text"
            name="name"
            value={name}
            onChange={this.onHendleChange}
          />
        </label>
        <label className="label-form">
          Number
          <input
            className="input-form"
            type="text"
            name="number"
            value={number}
            onChange={this.onHendleChange}
          />
        </label>
        <button className="button-form" type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelector.getContacts(state),
  };
};

const mapDispatchToProps = {
  onAddContacts: contactsOperation.addContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
