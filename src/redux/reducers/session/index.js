import pick from 'lodash/pick';

import actions from './actions';

const { LOGIN, LOGOUT } = actions;

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      return pick(action.payload.data, ['token', 'user']);
    case `${LOGIN}_FAILURE`:
      return {};
    case LOGOUT:
      return { ...state };
    default:
      return { ...state };
  }
};
