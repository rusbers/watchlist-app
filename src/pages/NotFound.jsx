import { Stack, Typography, Container, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import useAppBarHeight from '../hooks/useAppBarHeight';
import LostWaySvg from '../assets/images/404/404.svg';

function NotFound() {
  const { totalHeight } = useAppBarHeight();
  const navigate = useNavigate();

  function handleGoBack() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  return (
    <Container
      maxWidth='lg'
      sx={{
        height: `calc(100vh - ${totalHeight})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={6} aria-hidden='true'>
          <LostWaySvg />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
        >
          <Typography gutterBottom textAlign='center' component='h2' variant='h3'>
            Whoops!
          </Typography>
          <Typography gutterBottom textAlign='center' component='p' variant='h5'>
            404 Page Not Found
          </Typography>
          <Typography gutterBottom textAlign='center'>
            Oh no! We couldn't find the page you're looking for. Don't worry, let's explore some
            options together!
          </Typography>
          <Stack
            sx={{ paddingBlock: 2 }}
            direction='row'
            flexWrap='wrap'
            justifyContent='center'
            alignItems='center'
            spacing={1}
            useFlexGap
          >
            <Button component={Link} to='/watchlist-app/'>
              Go home
            </Button>
            <Button onClick={handleGoBack}>Go back</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;
