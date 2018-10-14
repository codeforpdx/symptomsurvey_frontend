import Home from '../pages/Home';
import Login from '../pages/Login';
import FourOhFour from '../pages/FourOhFour';

export default {
  indexRoute: {
    component: Home,
    displayName: 'Home',
  },
  childRoutes: [
    {
      component: Login,
      path: 'login',
      displayName: 'Login',
    },
    {
      component: FourOhFour,
      path: '*',
    },
  ],
};
