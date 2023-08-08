import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Box, Container } from '@mui/material';


function MainLayout() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flex: '1 0 auto' }}>
          <Container maxWidth='xl'>
            <Outlet />
          </Container>
        </Box>
        <Footer sx={{ flexShrink: 0 }} />
      </Box>
    </>
  );
}

export default MainLayout;
