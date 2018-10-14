import React from 'react';
import ReactDOM from 'react-dom';

import ReduxWrapper from './redux/ReduxWrapper';

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <ReduxWrapper />,
    root,
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./layout/Container', render);
}
