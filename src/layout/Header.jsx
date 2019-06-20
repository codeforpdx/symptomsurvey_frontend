import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import styled from 'styled-components';

import county_logo from '../images/county_logo_small.png';
import { logout } from '../redux/reducers/session/actionCreators';

const HeaderWrapper = styled.div({
  display: 'flex',
  height: '63px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundImage: 'linear-gradient(#377A6A, #D8D8D8)',  
  '& Link' : {
    background: '#61ABD8',
    width: '16vw',
    height: '55px',
  },
  '& .logo' : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '53px',
  },
  '& img' : {
    width: '66px',
    height: '50px',
  },
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

    <div className="logo">
      <img src={county_logo} />
      <h6>
        Clackamas Symptom Survey
      </h6>
    </div>
    <Link type="button" className={pathName === '' ? 'active' : ''} to="/">{manifest.indexRoute.displayName}</Link>
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
