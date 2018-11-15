import React from 'react';
import glamorous from 'glamorous';

import Header from './Header';

import manifest from './manifest';

const ContainerLayout = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
});

export default ({ children }) => (
  <ContainerLayout>
    <Header {...{ manifest }} />
    {children}
  </ContainerLayout>
);
