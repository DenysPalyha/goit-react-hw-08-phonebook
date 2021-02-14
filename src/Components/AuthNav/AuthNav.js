import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigations/Navigation.modules.css';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={styles.navLink}>
      <NavLink
        to="/register"
        exact
        className="link"
        activeClassName="active"
        className={styles.navigation}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        className="link"
        activeClassName="active"
        className={styles.navigation}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
