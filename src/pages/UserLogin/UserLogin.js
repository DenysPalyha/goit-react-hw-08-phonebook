import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './UserLogin.module.css';

class UserLogin extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ ...prev, [name]: value }));
  };

  onHandleSubmite = e => {
    e.preventDefault();
    this.props.onUserLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.formStyles} onSubmit={this.onHandleSubmite}>
        <h1 className={styles.title}>Login user</h1>
        <label className={styles.labelForm}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            className={styles.inputForm}
            onChange={this.onHandleChange}
          />
        </label>
        <label className={styles.labelForm}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            className={styles.inputForm}
            onChange={this.onHandleChange}
          />
        </label>
        <button className={styles.buttonForm} type="submit">Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onUserLogin: authOperations.loginUser,
};
export default connect(null, mapDispatchToProps)(UserLogin);
