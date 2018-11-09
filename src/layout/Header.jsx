import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import glamorous from 'glamorous';

import { logout } from '../redux/reducers/session/actionCrators';

const HeaderWrapper = glamorous.div(
  {
    display: 'flex',
    flexDirection: 'row',
    '& a': {
      padding: '5px 10px',
      textDecoration: 'none',
      marginRight: 10,
      color: '#000',
      background: '#eee',
      borderRadius: 5,
      '.active': {
        background: '#ddd',
      },
      ':hover': {
        color: '#fff',
        background: '#888',
      },
    },
  },
);

const Header = ({ manifest, pathName, doLogout }) => (
  <HeaderWrapper className="header">
    <Link className={pathName === '' ? 'active' : ''} to="/">{manifest.indexRoute.displayName}</Link>
    {manifest.childRoutes
      .filter(config => config.displayName)
      .map(config => <Link className={pathName === config.path ? 'active' : ''} key={config.path} to={config.path}>{config.displayName}</Link>)
        }
    <button type="button" onClick={doLogout}>Logout</button>
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
