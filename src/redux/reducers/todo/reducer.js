import actions from './actions';

const { ADD, COMPLETE, REMOVE } = actions;

const initialState = { todos: [] };

export default ({ todos } = initialState, action) => {
  const { type, payload } = action;
  const state = { todos: [...todos] };
  switch (type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, { key: todos.length, text: payload.text, isComplete: false }],
      };
    case COMPLETE:
      state.todos[payload.key].isComplete = payload.isComplete;
      return state;
    case REMOVE:
      state.todos = [...todos.slice(0, payload.key), ...todos.slice(payload.key + 1)];
      return state;
    default:
      return state;
  }
};
