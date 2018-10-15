import React from 'react';
import {
  Router,
} from 'react-router';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Header from './Header';

import manifest from './manifest';

const ContainerLayout = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
});

const ContainerComponent = ({ children }) => (
  <ContainerLayout>
    <Header {...{ manifest }} />
    {children}
  </ContainerLayout>
);

ContainerComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const routes = {
  path: '/',
  component: ContainerComponent,
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
