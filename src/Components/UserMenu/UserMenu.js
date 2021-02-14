import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={styles.userMenuDiv}>
      <img src={avatar} alt="" width="42" className={styles.images} />
      <span className={styles.userText}>Welcome, {name}</span>
      <button type="button" className={styles.buttons} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: 'https://icon-library.com/images/141782.svg.svg',
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
