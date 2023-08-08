import { Container, Grid } from '@mui/material';

const DetailsLayout = ({ poster, info, mediaItemHomePage, collection }) => {
  return (
    <Container sx={{ mt: '1rem' }} maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3} paddingRight={2}>
          {poster}
          {mediaItemHomePage}
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          {info}
        </Grid>
        <Grid item xs={12}>
          {collection}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsLayout;
