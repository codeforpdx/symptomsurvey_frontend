import pick from 'lodash/pick';
import omit from 'lodash/omit';

import actions from './actions';

const { LOGIN, LOGOUT } = actions;

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      return pick(action.payload.data, ['token', 'user']);
    case `${LOGIN}_FAILURE`:
      return { ...state, error: action.payload.data.error };
    case `${LOGIN}_REQUEST`:
      return omit(state, 'error');
    case LOGOUT:
      return {};
    default:
      return { ...state };
  }
};
