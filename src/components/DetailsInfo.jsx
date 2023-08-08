import MediaTitle from './MediaTitle';
import Rating from './Rating';
import FactsList from './FactList';
import CardActions from './CardActions';
import { Typography, Stack } from '@mui/material';
import getItemDetails from '../helpers/getItemDetails';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import theme from '../theme/theme';

const DetailsInfo = ({ details }) => {
  const { vote_average, overview, tagline } = details;
  const { primaryData, serializable } = getItemDetails(details);
  const { title, releaseYear } = primaryData;

  const { credentials } = useContext(AuthContext);
  const isLogged = credentials.authenticated;

  return (
    <>
      <MediaTitle name={title} releaseYear={releaseYear} />
      <Typography gutterBottom fontSize={18} color={theme.palette.neutral.grey[50]}>
        {tagline}
      </Typography>
      <Typography gutterBottom fontSize='16px'>
        {overview}
      </Typography>
      <Stack direction='row' spacing={1} alignItems='center'>
        <Rating rating={vote_average} />
        {isLogged && <CardActions item={details} />}
      </Stack>
      <FactsList details={serializable} />
    </>
  );
};

export default DetailsInfo;
