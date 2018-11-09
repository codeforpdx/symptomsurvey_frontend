import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';
import _ from 'lodash';
import persistState from 'redux-localstorage';

import todo from './reducers/todo';
import session from './reducers/session';

export const rootReducer = combineReducers({ routing, todo, session });

// The slicer returns a function that specifies which parts of the redux state will be persisted.
const slicer = paths => state => _.pick(state, paths);

const mockAxiosMiddleware = ({ dispatch }) => next => (action) => {
  if (_.has(action, 'payload.request')) {
    const { payload: { request: { data: { username, password } } }, type } = action;
    setTimeout(() => {
      if (username !== 'testUsername' || password !== 'testPassword') {
        dispatch({
          type: `${type}_FAILURE`,
          payload: {
            status: 400,
            statusText: 'Bad Request',
            data: {
              error: 'Invalid username or password. Must match username: "testUsername" password: "testPassword".',
            },
          },
          previousAction: {
            request: action,
          },
        });
        return;
      }
      dispatch({
        type: `${type}_SUCCESS`,
        payload: {
          data: {
            user: {
              firstName: 'Jane',
              lastName: 'Doe',
            },
            token: 'alkjsdhf',
          },
          status: 200,
          statusText: 'OK',
        },
        previousAction: {
          request: action,
        },
      });
    }, 1000);
    return next({
      type: `${action.type}_REQUEST`,
      payload: action.payload.request,
    });
  }

  return next(action);
};

const middlewares = history => [
  routerMiddleware(history),
  mockAxiosMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default (history, initialState) => createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares(history)),
    persistState(['todo.todos', 'session.token', 'session.user'], { slicer }),
  ),
);
