import actions from './actions';

const { LOGIN, LOGOUT } = actions;

export const login = ({ username, password }) => ({
  type: LOGIN,
  payload: {
    request: {
      data: { username, password },
    },
  },
});

export const logout = () => ({
  type: LOGOUT,
});
