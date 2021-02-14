import { lazy } from 'react';

const usresRouter = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: lazy(() =>
      import('../pages/UserHome/UserHome.js' /*webpackChunkName: "Home"*/),
    ),
    private: false,
    restricted: false,
  },
  {
    path: '/register',
    exact: true,
    name: 'Register',
    component: lazy(() =>
      import(
        '../pages/UserRegister/UserRegister.js' /*webpackChunkName: "Home"*/
      ),
    ),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: lazy(() =>
      import('../pages/UserLogin/UserLogin.js' /*webpackChunkName: "Home"*/),
    ),
    private: false,
    restricted: true,
  },

  {
    path: '/contacts',
    exact: true,
    name: 'Contacts',
    component: lazy(() =>
      import('../pages/Contacts/Contacts.js' /*webpackChunkName: "Home"*/),
    ),
    private: true,
    restricted: false,
  },
];

export default usresRouter;
