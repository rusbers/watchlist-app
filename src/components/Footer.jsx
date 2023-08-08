import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <AppBar component='footer' position='static' elevation={0} color='transparent'>
      <Container>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography>Watchlist Database</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
