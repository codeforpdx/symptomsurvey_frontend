import actions from './actions.js';

const { SUBMIT_FORM } = actions;

const initialState = {
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  const { type, payload } = actions;
  switch (type) {
    case `${SUBMIT_FORM}_REQUEST`:
      return {...state, loading: true, error: null}
    default:
      return state;
  }
}
