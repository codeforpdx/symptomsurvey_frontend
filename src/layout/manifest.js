import Home from '../pages/Home';
import Login from '../pages/Login';
import TODOS from '../pages/TODO';
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
    },
    {
      component: TODOS,
      path: 'todo',
      displayName: 'To-do',
    },
    {
      component: FourOhFour,
      path: '*',
    },
  ],
};
