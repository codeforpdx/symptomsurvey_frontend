import actions from './actions.js';

const { REQUEST, SUCCESS, ERROR } = actions;

const initialState = {
  loading: false,
  error: null,
  /* hits is the list of items returned by the API after searching*/
  hits: []
}

export default (state = initialState, action) => {
  const { type, payload } = actions;
  switch (type) {
    case REQUEST:
      return {...state,
        loading: true,
        error: null,
      }
    case SUCCESS:
      return {...state,
        loading: false,
      }
    case ERROR:
      return {...state,

      }
    default:
      return state;
  }
}
