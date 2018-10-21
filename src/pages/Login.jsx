import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';

const LOGINdiv = glamorous.div({
    '& > .login-field': {
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
            submitted: false
        };

    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        alert(`You have submitted username '${this.state.username}'' and password '${this.state.password}'`);
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <LOGINdiv>
                <div className={'login-field' + 
                (submitted && !username ? 'has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username"
                        value={username} 
                        onInput={e => this.setState({ username: e.target.value }) }
                        />
                </div>
                <div className={'login-field' + 
                (submitted && !password ? 'has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        value={password} 
                        onInput={e => this.setState({ password: e.target.value }) }
                        />
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

export default LoginPage;