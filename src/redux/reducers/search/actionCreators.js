import actions from './actions.js';

const { TWEETS } = actions;

export const searchTweets = (data) => ({
  type: TWEETS,
  payload: {
    request: {
      url: '/search',
      method: 'post',
      data,
    }
  },
})
