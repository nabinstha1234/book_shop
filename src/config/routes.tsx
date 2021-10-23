import { lazyImport } from 'utils/lazyImport';

const { LandingPage } = lazyImport(() => import('../features/misc'), 'LandingPage');
const { Login } = lazyImport(() => import('../features/auth'), 'Login');

const routes = {
  home: {
    path: '/',
    component: LandingPage,
  },
  login: {
    path: '/login',
    component: Login,
  },
};

export default routes;
