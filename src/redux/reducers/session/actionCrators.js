import actions from './actions';

const { LOGIN, LOGOUT } = actions;

export const loginSuccessFake = () => ({
  type: `${LOGIN}_SUCCESS`,
  payload: {
    user: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    token: ';alskdfja;lskdfja;lsdfj',
  },
});

export const login = ({ username, password }) => ({
  type: LOGIN,
  payload: {
    request: {
      body: { username, password },
    },
  },
});

export const logout = () => ({
  type: LOGOUT,
});
