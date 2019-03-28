const actions = [
  'TWEETS',
]

.reduce((acc, action) => ({ ...acc, [action]: `SEARCH_${action}` }), {});

export default actions;