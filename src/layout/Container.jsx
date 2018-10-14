import React from 'react';
import {
  Router, Route, IndexRoute, Link, browserHistory,
} from 'react-router';
import PropTypes from 'prop-types';

import Home from '../pages/Home';
import Login from '../pages/Login';

const FourOhFourPage = () => (
  <div>
    <h3>
      404 Page Not Found
    </h3>
  </div>
);

const Container = ({ children }) => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="*" component={FourOhFourPage} />
    </Route>
  </Router>
);
