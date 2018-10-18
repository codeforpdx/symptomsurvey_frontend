const actions = [
  'ADD',
  'COMPLETE',
  'REMOVE',
].reduce((acc, action) => ({ ...acc, [action]: action }), {});

export default actions;
