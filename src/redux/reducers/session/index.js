import omit from 'lodash/omit';
import get from 'lodash/get';

import jwt from 'jsonwebtoken';

import actions from './actions';

const { LOGIN, LOGOUT } = actions;

const initialState = {};

const validateToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.PUBLIC_KEY, { algorithms: ['RS256'] });
    return {
      valid: true,
      decodedToken,
    };
  } catch (e) {
    return {
      valid: false,
      error: e.message,
    };
  }
};

export default (state = initialState, action) => {
  const rawJWT = get(action, 'payload.data.token');
  let validationResult = { valid: false };
  if (rawJWT) {
    validationResult = validateToken(rawJWT);
  }
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      if (!validationResult.valid) {
        return { error: validationResult.error };
      }
      return { token: { ...validationResult.decodedToken, rawJWT } };
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
