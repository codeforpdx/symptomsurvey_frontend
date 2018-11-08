import pick from 'lodash/pick';

import actions from './actions';

const { LOGIN, LOGOUT } = actions;

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      return pick(action.payload, ['token', 'user']);
    case LOGOUT:
      return {};
    default:
      return { ...state };
  }
};
