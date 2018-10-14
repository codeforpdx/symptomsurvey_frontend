import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Container from '../layout/Container';

import configureStore from '.';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

export default () => (
  <Provider {...{ store }}>
    <Container {...{ history }} />
  </Provider>
);
