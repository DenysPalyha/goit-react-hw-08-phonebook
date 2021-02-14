import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth/index';
import Loader from '../Loader/Loader';
import './Navigation.modules.css';
import styles from './NavigationsLink.module.css'

const NavigationsLink = ({ isAuthenticated }) => {
  return (
    <nav className={styles.navLink}>
      <Suspense fallback={<Loader />}>
        <NavLink to="/" exact className="link" activeClassName="active" className={styles.navigation}>
          Home
        </NavLink>

        {isAuthenticated && (
          <NavLink
            to="/contacts"
            exact
            className="link"
            activeClassName="active"
            className={styles.navigation}
          >
            Contacts
          </NavLink>
        )}
      </Suspense>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(NavigationsLink);

// {userRouter.map(router => (
//   <li key={router.path}>
//     <NavLink
//       key={router.path}
//       to={router.path}
//       exact={true}
//       className="link"
//       activeClassName="active"
//     >
//       {router.name}
//     </NavLink>
//   </li>
// ))}
