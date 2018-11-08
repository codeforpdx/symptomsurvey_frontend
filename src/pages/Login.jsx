import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import glamorous from 'glamorous';

import { loginSuccessFake, logout } from '../redux/reducers/session/actionCrators';

const LOGINdiv = glamorous.div({
  '& > .login-field': {
    margin: 10,
  },
  '& > .submit-button': {
    background: '#337ab7',
    color: '#fff',
    padding: '5px 15px',
    fontSize: 16,
    '.disabled': {
      background: '#888',
      ':hover': {
        cursor: 'none',
      },
    },
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { submit } = this.props;
    const { username, password } = this.state;
    submit({ username, password });
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <LOGINdiv>
        <div className={`login-field${
          submitted && !username ? 'has-error' : ''}`}
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
          submitted && !password ? 'has-error' : ''}`}
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
        </div>
        <button
          className={`submit-button${!(password && username) ? ' disabled' : ''}`}
          type="button"
          disabled={!password || !username}
          onClick={this.handleSubmit}
        >
                    submit
        </button>
      </LOGINdiv>
    );
  }
}

LoginPage.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  dispatch => bindActionCreators(({
    submit: ({ username, password }) => {
      if (username !== 'testUsername' || password !== 'testPassword') {
        alert(`invalid username password pair: ${username}, ${password}`);
        return logout();
      }
      return loginSuccessFake();
    },
  }), dispatch),
)(LoginPage);
