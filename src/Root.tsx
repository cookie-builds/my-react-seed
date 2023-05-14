import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './_common/footer';

const RootBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Root = (): JSX.Element => {
  return (
    <RootBody>
      Root
      <Outlet/>
      <Footer/>
    </RootBody>
  );
};

export default Root;
