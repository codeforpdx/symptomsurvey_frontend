import React, { Component } from 'react';
import {
  Router,
} from 'react-router';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Header from './Header';

import manifest from './manifest';

const ContainerLayout = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
});

class ContainerComponent extends Component {
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
    if (!pathname.match(/^\/?login/) && !token) {
      redirect(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    if (pathname.match(/^\/?login/) && token) {
      redirect(decodeURIComponent(query.redirect || '/'));
    }
  }

  render() {
    const {
      children,
    } = this.props;
    return (
      <ContainerLayout>
        <Header {...{ manifest }} />
        {children}
      </ContainerLayout>
    );
  }
}

ContainerComponent.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
  token: PropTypes.string,
  query: PropTypes.shape({
    redirect: PropTypes.string,
  }).isRequired,
};

ContainerComponent.defaultProps = {
  token: '',
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
  component: connect(mapStateToProps, mapDispatchToProps)(ContainerComponent),
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
