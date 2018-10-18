const actions = [
  'ADD',
  'COMPLETE',
  'REMOVE',
].reduce((acc, action) => ({ ...acc, [action]: `TODO_${action}` }), {});

export default actions;
