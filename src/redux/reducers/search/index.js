import actions from './actions.js';

const { SEARCH_TWEETS } = actions;

const initialState = {
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  const { type, payload } = actions;
  switch (type) {
    case `${SEARCH_TWEETS}_REQUEST`:
      console.log('request');
      return {...state, loading: true, error: null}
    case `${SEARCH_TWEETS}_SUCCESS`:
    console.log('success');
      return {...state, loading: false, data: payload.data}
    case `${SEARCH_TWEETS}_FAILURE`:
    console.log('failure');
      return {...state, error: action.payload.data.error};
    default:
      return {...state};
  }
}
