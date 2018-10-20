import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';

const LOGINdiv = glamorous.div({
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
    }

    render() {
        const { username, password, submitted } = this.props;
        return (
            <LOGINdiv>
                <div className={'login-field' + 
                (submitted && !username ? 'has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username"
                        value={username} 
                        onInput={/* setState */}
                        />
                </div>
                <div className={'login-field' + 
                (submitted && !password ? 'has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" 
                        name="password"
                        value={password} 
                        onInput={/* setState */}
                        />
                </div>
                <button
                    className={`submit-button${!(password && username) ? ' disabled' : ''}`}
                    type="button"
                    disabled={!password || !username}
                    onClick={() => {
                        //Trigger submit event for reducer
                    }}
                    >
                    submit
                </button>
            </LOGINdiv>
        );
    }
}

export {LoginPage}