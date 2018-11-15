const actions = [
  'LOGIN',
  'LOGOUT',
]
  .reduce((acc, action) => ({ ...acc, [action]: `SESSION_${action}` }), {});

export default actions;
