import { useState, useContext } from 'react';
import { AppBar, Box, Drawer, Toolbar, Container, useMediaQuery } from '@mui/material';
import AuthButton from './AuthButton';
import NavList from './NavList';
import MenuButton from './MenuButton';
import WatchlistLogo from './WatchlistLogo';
import SearchInput from './SearchInput';

import MenuIcon from '../assets/icons/menu.svg';
import CloseIcon from '../assets/icons/close-square.svg';

import theme from '../theme/theme';
import useNavItems from '../hooks/useNavItems';
import SignInDialog from './SignInDialog';
import SignUpDialog from './SignUpDialog';
import { AuthDialogProvider } from '../context/AuthDialogContext';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobileVersion = useMediaQuery(theme.breakpoints.down('md'));
  const navItems = useNavItems();

  const { credentials } = useContext(AuthContext);
  const isAuthenticated = credentials?.authenticated;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AuthDialogProvider>
        <Box component='header' sx={{ display: 'flex' }}>
          <AppBar
            component='nav'
            elevation={0}
            sx={{
              background: theme.palette.neutral.grey[900.8],
              backdropFilter: 'blur(20px)',
            }}
          >
            <Container maxWidth='xl'>
              <Toolbar disableGutters>
                <SignInDialog />
                <SignUpDialog />
                <WatchlistLogo
                  sx={{ order: { xs: 2, md: 'initial' }, margin: { xs: '0 auto', md: 'initial' } }}
                  text={isMobileVersion}
                />

                <SearchInput sx={{ order: { md: 2 }, display: { xs: 'none', md: 'block' } }} />

                <MenuButton
                  className='Burger-Menu'
                  aria-label='open drawer'
                  onClick={handleDrawerToggle}
                  sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                  <MenuIcon width='24' height='24' />
                </MenuButton>

                <NavList
                  className='Desktop-Menu'
                  navItems={navItems}
                  variant='horizontal'
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    textAlign: 'center',
                    marginRight: 'auto',
                  }}
                />
                <AuthButton signedIn={isAuthenticated} sx={{ order: { xs: 3 } }} />
              </Toolbar>
            </Container>
          </AppBar>

          <Box className='Mobile-Menu-Popup' component='nav'>
            <Drawer
              variant='temporary'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              anchor='left'
              ModalProps={{ keepMounted: true }}
              PaperProps={{
                sx: {
                  backgroundColor: theme.palette.neutral.grey[800],
                },
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 240,
                },
              }}
            >
              <Toolbar sx={{ justifyContent: 'flex-start' }}>
                <MenuButton aria-label='close drawer' onClick={handleDrawerToggle}>
                  <CloseIcon width='24' height='24' />
                </MenuButton>
              </Toolbar>
              <NavList
                navItems={navItems}
                sx={{ textAlign: 'center' }}
                handleDrawerToggle={handleDrawerToggle}
              />
            </Drawer>
          </Box>
        </Box>
      </AuthDialogProvider>
      <Toolbar />
    </>
  );
}

export default Header;
