import actions from './actions.js';

const { REQUEST, SUCCESS, ERROR } = actions;

/* searchQuery is the entire object passed from the form.
 * {location, radius, savedSearch, searchTerms, timeFrame} */
export const searchRequest = () => ({
  type: REQUEST,
})

/* expect hits to be an array returned by the API */
export const searchSuccess = (hits) => ({
  type: SUCCESS,
  payload:  hits
})

/* expect error object to be returned by the server */
export const searchError = (error) => ({
  type: ERROR,
  payload: error
})

export const searchFormSubmit = (searchQuery) => (dispatch, getState) => {
  dispatch(searchRequest());
  return fetch(`${API_BASE_URL}/endpoint`, {
    method: '',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(searchQuery)
  })

}
