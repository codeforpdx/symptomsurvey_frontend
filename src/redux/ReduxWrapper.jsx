import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import PropTypes from 'prop-types';

import manifest from '../layout/manifest';
import ContainerLayout from '../layout/Container';

import configureStore from '.';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);


class Container extends Component {
  componentWillMount() {
    this.confirmRouting();
  }

  componentDidUpdate() {
    this.confirmRouting();
  }

  confirmRouting() {
    const {
      pathname, redirect, token, query,
    } = this.props;
    if (!pathname.match(/^\/?login/) && !token.role) {
      redirect(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    if (pathname.match(/^\/?login/) && token.role) {
      redirect(decodeURIComponent(query.redirect || '/'));
    }
  }

  render() {
    console.log(this.props)
    const {
      children,
    } = this.props;
    return (
      <ContainerLayout>
        {children}
      </ContainerLayout>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
  token: PropTypes.shape({
    profile: PropTypes.shape({
      username: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    role: PropTypes.string,
    rawJWT: PropTypes.string,
  }),
  query: PropTypes.shape({
    redirect: PropTypes.string,
  }).isRequired,
};

Container.defaultProps = {
  token: {},
};

const mapStateToProps = ({
  session: { token }, routing: {
    locationBeforeTransitions: {
      pathname,
      query,
    },
  },
}) => ({ token, pathname, query });
const mapDispatchToProps = dispatch => ({ redirect: bindActionCreators(push, dispatch) });

const routes = {
  path: '/',
  component: connect(mapStateToProps, mapDispatchToProps)(Container),
  ...manifest,
};

export default () => (
  <Provider {...{ store }}>
    <Router
      {...{ history, routes }}
    />
  </Provider>
);
