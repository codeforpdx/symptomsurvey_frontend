import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { login } from '../redux/reducers/session/actionCreators';

const LOGINdiv = styled.div({
  background: '#377A6A',
  display: 'flex',
  minHeight: '70vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',

  '& .has-error input': {
    boxShadow: '0px 0px 2px 1px rgba(255, 0, 0, 0.7)',
    border: 'none',
  },
  '& .error': {
    color: '#f00',
  },
  '& > .login-field': {
    margin: 10,
  },
  '& > .submit-button': {
    background: '#337ab7',
    color: '#fff',
    margin: '1.2rem',
    padding: '1.2rem',
    textDecoration: 'none',
    borderRadius: '1rem',
    fontSize: 24,
    '.disabled': {
      background: '#888',
      ':hover': {
        cursor: 'none',
      },
    },
  },
  '> div': {
    background: '#D8D8D8',
  },
  '& .form-label': {
    fontSize: 20,
  },
'& button': {
    fontSize: 20,
    padding: 4,
  },
});


class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { submit } = this.props;
    const { username, password } = this.state;
    submit({ username, password });
  }

  render() {
    const { error } = this.props;
    const { username, password } = this.state;
    return (
      <LOGINdiv>
        <div className={`login-field${
          error ? ' has-error' : ''}`}
        >
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onInput={e => this.setState({ username: e.target.value })}
            />
          </label>
        </div>
        <div className={`login-field${
          error ? ' has-error' : ''}`}
        >
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onInput={e => this.setState({ password: e.target.value })}
            />
          </label>
          {!!error && <p className="error">{error}</p>}
        </div>
        <button
          className={`submit-button${!(password && username) ? ' disabled' : ''}`}
          type="button"
          disabled={!password || !username}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </LOGINdiv>
    );
  }
}

LoginPage.propTypes = {
  error: PropTypes.string,
  submit: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  error: '',
};

export default connect(
  ({ session: { error } }) => ({ error }),
  dispatch => ({
    submit: bindActionCreators(login, dispatch),
  }),
)(LoginPage);
