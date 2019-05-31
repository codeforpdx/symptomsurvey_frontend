import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { addTodo, completeTodo, removeTodo } from '../redux/reducers/todo/actionCreators';

const TODO = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: 5,
  '& > *': {
    display: 'flex',
  },
  '& > p': {
    marginLeft: 10,
  },
  '& > button': {
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  '.complete': {
    '& > p': {
      textDecoration: 'line-through',
    },
    '& > button': {
      background: '#eee',
      color: '#333',
    },
  },
});

const TODOSDiv = styled.div({
  padding: 15,
  '& button:hover': {
    cursor: 'pointer',
  },
  '& .add-section': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > textarea': {
      alignSelf: 'stretch',
      marginBottom: 10,
    },
    '& > .add-button': {
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
  },
});

class TODOS extends Component {
  constructor(props) {
    super(props);

    this.state = { inputText: '' };
  }

  render() {
    const {
      todos, add, complete, remove,
    } = this.props;
    const { inputText } = this.state;
    return (
      <TODOSDiv>
        {todos.map(({ text, isComplete, key }, index) => (
          <TODO key={key} className={isComplete ? 'complete' : ''}>
            <input
              type="checkbox"
              checked={isComplete}
              onChange={(e) => {
                // Clicking the checkbox triggers the COMPLETE action in the todo reducer.
                complete({ key: index, isComplete: e.target.checked });
              }}
            />
            <p>{text}</p>
            <button
              onClick={() => {
                // Clicking the remove button triggers the REMOVE action in the todo reducer.
                remove({ key: index });
              }}
              type="button"
            >
              Remove
            </button>
          </TODO>
        ))}
        <div className="add-section">
          <textarea
            type="text"
            rows="4"
            value={inputText}
            onInput={e => this.setState({ inputText: e.target.value })}
          />
          <button
            className={`add-button${!inputText ? ' disabled' : ''}`}
            type="button"
            disabled={!inputText}
            onClick={() => {
              // Triggers an ADD event in the todo reducer.
              add({ text: inputText });
              this.setState({ inputText: '' });
            }}
          >
            Add
          </button>
        </div>
      </TODOSDiv>
    );
  }
}

TODOS.propTypes = {
  add: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    text: PropTypes.string,
    isComplete: PropTypes.bool,
  })),
};

TODOS.defaultProps = {
  todos: [],
};

export default connect(
  // Map the todos array from inside of the todo reducer to the todos prop.
  ({ todo: { todos } }) => ({ todos }),
  // Bind the action creators from the todo reducer to method props in the TODOS component.
  dispatch => ({
    add: bindActionCreators(addTodo, dispatch),
    complete: bindActionCreators(completeTodo, dispatch),
    remove: bindActionCreators(removeTodo, dispatch),
  }),
)(TODOS);
