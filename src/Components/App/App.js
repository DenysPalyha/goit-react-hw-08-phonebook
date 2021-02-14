import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Layout from '../Layout/Layout';
import NavigationsLink from '../Navigations/NavigationsLink';
import NavigationsRouters from '../Navigations/NavigationsRouters';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import ReactNotification from 'react-notifications-component';
import { authSelectors, authOperations } from '../../redux/auth';
import 'react-notifications-component/dist/theme.css';
import styles from './App.module.css';
import '../Navigations/trasition/navigationTransition.css';
import '../UserMenu/transition/userMenuTransition.css';
import '../AuthNav/transition/authNavTransition.css';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Layout>
        <ReactNotification />
        <div className={styles.app}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="link-transition"
            unmountOnExit
          >
            <NavigationsLink />
          </CSSTransition>

          {this.props.onAuthenticated ? (
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames="user-menu-transition"
              unmountOnExit
            >
              <UserMenu />
            </CSSTransition>
          ) : (
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames="Aath-nav-transition"
              unmountOnExit
            >
              <AuthNav />
            </CSSTransition>
          )}
        </div>
        <NavigationsRouters />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  onAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getUserCurrent,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
