const actions = [
  'REQUEST',
  'SUCCESS',
  'ERROR',
]
.reduce((acc, action) => ({...acc, [action]: `SEARCH_${action}` }), {});

export default actions;
