import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authOperations} from '../../redux/auth';
import styles from './UserRegister.module.css';

class UserRegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ ...prev, [name]: value }));
  };

  onHandleSubmite = e => {
    e.preventDefault();
    this.props.onAddRegisters({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form className={styles.formStyles} onSubmit={this.onHandleSubmite}>
        <h1 className={styles.title}>Register user</h1>
        <label  className={styles.labelForm}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            className={styles.inputForm}
            onChange={this.onHandleChange}
          />
        </label>
        <label  className={styles.labelForm}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            className={styles.inputForm}
            onChange={this.onHandleChange}
          />
        </label>
        <label  className={styles.labelForm}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            className={styles.inputForm}
            onChange={this.onHandleChange}
          />
        </label>
        <button className={styles.buttonForm} type="submit"> Sign in</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddRegisters: authOperations.registerUser,
};

export default connect(null, mapDispatchToProps)(UserRegisterForm);
