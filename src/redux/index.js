import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';

import todo from './reducers/todo/reducer';

export const rootReducer = combineReducers({ routing, todo });

const middlewares = history => [
  routerMiddleware(history),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default (history, initialState) => createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares(history)),
  ),
);
