import actions from './actions.js';

const { SEARCH_TWEETS } = actions;

export const searchTweets = (formValues) => ({
  type: SEARCH_TWEETS,
  payload: {
    request: {
      url: '/search',
      method: 'post',
      data: {formValues},
    }
  },
})
