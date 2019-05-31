import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import styled from 'styled-components';

import { logout } from '../redux/reducers/session/actionCreators';

const HeaderWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundImage: 'linear-gradient(white, papayawhip)',
  '& *': {
    padding: '5px 10px',
    textDecoration: 'none',
    borderRadius: 5,
    fontSize: 16,
    color: '#000',
    background: '#ccc',
    '.active': {
      background: '#ddd',
    },
    ':hover': {
      color: '#fff',
      background: '#888',
    },
  },
});

const Header = ({ manifest, pathName, doLogout }) => (
  <HeaderWrapper className="header">
    <Link className={pathName === '' ? 'active' : ''} to="/">{manifest.indexRoute.displayName}</Link>
    {manifest.childRoutes
      .filter(config => config.displayName)
      .map(config => <Link className={pathName === config.path ? 'active' : ''} key={config.path} to={config.path}>{config.displayName}</Link>)
        }
    <Link type="button" onClick={doLogout}>Logout</Link>
  </HeaderWrapper>
);

Header.propTypes = {
  pathName: PropTypes.string.isRequired,
  manifest: PropTypes.shape({
    indexRoute: PropTypes.shape({
      component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
      ]).isRequired,
      displayName: PropTypes.string.isRequired,
    }),
    childRoutes: PropTypes.arrayOf(PropTypes.shape({
      component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
      ]).isRequired,
      path: PropTypes.string.isRequired,
      displayName: PropTypes.string,
    })),
  }).isRequired,
  doLogout: PropTypes.func.isRequired,
};

export default connect(
  ({ routing: { locationBeforeTransitions = {} } }, ownProps) => {
    const { pathname = '/' } = locationBeforeTransitions;
    return { pathName: pathname.replace(/^\//, ''), ...ownProps };
  },
  dispatch => ({ doLogout: bindActionCreators(logout, dispatch) }),
)(Header);
