import React from 'react';
import styled from 'styled-components';

import Header from './Header';

import manifest from './manifest';

const ContainerLayout = styled.div({
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
