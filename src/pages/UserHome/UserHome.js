import React from 'react';
import styles from './UserHome.module.css';

const UserHome = () => {
  return (
    <div>
      <h1 className={styles.title}>Phonebooke</h1>
      <img
        src="https://cdn1.iconfinder.com/data/icons/pretty-office-part-13-simple-style/512/phonebook.png"
        alt="phonebook images"
        className={styles.images}
      />
    </div>
  );
};

export default UserHome;
