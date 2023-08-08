import { IconButton, Avatar, Menu, MenuItem, Typography, Box } from '@mui/material';
import LogginIcon from '../assets/icons/login.svg';
import { useState, useContext } from 'react';
import { AuthDialogContext } from '../context/AuthDialogContext';
import { AuthContext } from '../context/AuthContext';

function AuthButton({ signedIn = true, ...props }) {
  const { handleOpenSignInDialog, handleOpenSignUpDialog } = useContext(AuthDialogContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { signOut, credentials } = useContext(AuthContext);

  const signedOutSettings = [
    { label: 'Sign in', handler: handleOpenSignInDialog },
    { label: 'Sign up', handler: handleOpenSignUpDialog },
  ];

  const signedInSettings = [{ label: 'Sign out', path: undefined, handler: signOut }];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box {...props}>
      <IconButton onClick={handleOpenUserMenu} disableRipple sx={{ p: 0 }}>
        {signedIn ? <Avatar alt={credentials.username} /> : <LogginIcon width='24' height='24' />}
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        disableScrollLock
      >
        {(signedIn ? signedInSettings : signedOutSettings).map((setting) => (
          <MenuItem
            key={setting.label}
            onClick={() => {
              handleCloseUserMenu(), setting.handler();
            }}
          >
            <Typography textAlign='center'>{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default AuthButton;
