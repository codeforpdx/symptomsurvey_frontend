import actions from './actions.js';

const { REQUEST, SUCCESS, ERROR } = actions;

export const searchFormSubmit = (data) => ({
  type: SUBMIT_FORM,
  payload: {
    request: {
      url: '/search',
      method: 'get',
      data: data,
    }
  },
})
