import actions from './actions';

const { ADD, COMPLETE, REMOVE } = actions;

export const addTodo = ({ text }) => ({
  type: ADD,
  payload: { text },
});

export const completeTodo = ({ key, isComplete }) => ({
  type: COMPLETE,
  payload: { key, isComplete },
});

export const removeTodo = ({ key }) => ({
  type: REMOVE,
  payload: { key },
});
