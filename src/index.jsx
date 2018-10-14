import React from 'react';
import ReactDOM from 'react-dom';

import Container from './layout/Container';

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Container />,
    root,
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./layout/Container', render);
}
