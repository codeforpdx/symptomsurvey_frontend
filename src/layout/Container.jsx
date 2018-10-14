import React from 'react';
import {
  Router, Link,
} from 'react-router';
import PropTypes from 'prop-types';

import manifest from './manifest';

const ContainerLayout = ({ children }) => (
  <div>
    <div>
      <Link to="/">{manifest.indexRoute.displayName}</Link>
      {manifest.childRoutes
        .filter(config => config.displayName)
        .map(config => <Link key={config.path} to={config.path}>{config.displayName}</Link>)
        }
    </div>
    {children}
  </div>
);

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const routes = {
  path: '/',
  component: ContainerLayout,
  ...manifest,
};

const Container = ({ history }) => (
  <Router
    {...{ history, routes }}
  />
);

Container.propTypes = {
  history: Router.propTypes.history.isRequired,
};

export default Container;
