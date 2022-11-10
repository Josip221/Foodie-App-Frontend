import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Layouty = styled.div`
  box-sizing: border-box;
  height: 100vh;
  padding: 10px;
  background-color: ${props => props.theme.colors.primary};
`;

function Layout() {
  return (
    <Layouty>
      <Outlet />
    </Layouty>
  );
}

export default Layout;
