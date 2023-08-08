import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/brand/logo.svg';
import LogoText from '../assets/brand/logo-text.svg';

function WatchlistLogo({ text, ...props }) {
  const LogoComponent = text ? LogoText : Logo;
  const logoSize = {
    width: text ? '200px' : '40px',
    height: '40px',
  };
  return (
    <MuiLink component={RouterLink} to='/watchlist-app/' href='#' sx={{padding: '0 8px'}} {...props}>
      <LogoComponent role='img' aria-label='Watchlist logo' {...logoSize} {...props} />
    </MuiLink>
  );
}

export default WatchlistLogo;
