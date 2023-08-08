import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../theme/theme';

function NavList({ navItems, variant = 'vertical', handleDrawerToggle, ...rest }) {
  const horizontalStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const textColor = {
    color: theme.palette.neutral.grey[200],
  };

  const listStyle = variant === 'horizontal' ? { ...textColor, ...horizontalStyle } : textColor;

  return (
    <Box {...rest}>
      <List sx={{ ...listStyle, padding: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ width: 'auto' }}>
            <ListItemButton
              onClick={handleDrawerToggle}
              component={RouterLink}
              to={item.path}
              sx={{ textAlign: 'center', padding: 1 }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default NavList;
