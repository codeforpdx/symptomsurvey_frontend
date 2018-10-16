import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';

export const rootReducer = combineReducers({ routing });

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
