import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';
import _ from 'lodash';
import persistState from 'redux-localstorage';

import search from './reducers/searchReducer';
import todo from './reducers/todo';
import session from './reducers/session';

export const rootReducer = combineReducers({ routing, todo, session, search});

// The slicer returns a function that specifies which parts of the redux state will be persisted.
const slicer = paths => state => _.pick(state, paths);

const client = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

const middlewares = history => [
  routerMiddleware(history),
  axiosMiddleware(client),
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
