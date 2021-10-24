import { lazyImport } from 'utils/lazyImport';

const { LandingPage } = lazyImport(() => import('../features/misc'), 'LandingPage');
const { Login } = lazyImport(() => import('../features/auth'), 'Login');
const { Cart } = lazyImport(() => import('../features/cart'), 'Cart');

const routes = {
  home: {
    path: '/',
    component: LandingPage,
  },
  login: {
    path: '/login',
    component: Login,
  },
  cart: {
    path: '/cart',
    component: Cart,
  },
};

export default routes;
