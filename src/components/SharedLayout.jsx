import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';
import { Suspense } from 'react';
//import { GlobalStyle } from './Globalstyle';
import { Navigation } from './Navigation/Navigation';
import { AppBarPB } from './AppBarPB/AppBarPB';

export const SharedLayout = () => {
  return (
    <Container>
      {/* <GlobalStyle /> */}
      <AppBarPB />
      {/* <Header>
        <Navigation />
      </Header> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
