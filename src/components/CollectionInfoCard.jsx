import { Link as RouterLink } from 'react-router-dom';
import { Typography, Grid, Stack, Paper } from '@mui/material';
import format from 'date-fns/format';
import Poster from './Poster';
import { MOVIE } from '../helpers/mediaTypeNamespace';

const CollectionInfoCard = ({ mediaType, aboutCollection, specificData }) => {
  const { productName, id } = specificData;

  const collectionData =
    mediaType === MOVIE
      ? formatMovieCollectionData(specificData)
      : formatTVCollectionData(aboutCollection, id);

  const {
    collectionName,
    posterPath,
    routePath,
    overview,
    formattedName,
    formattedItemsCount,
    routeState,
  } = collectionData;

  return (
    <Paper sx={{ padding: 2, marginBottom: 2 }}>
      <Grid container>
        <Grid item sm={2} paddingRight={2}>
          <Poster altText={collectionName} posterPath={posterPath} />
        </Grid>
        <Grid item sm={10} display='flex' flexDirection='column'>
          <Stack sx={{ marginBottom: 2 }} direction='row' spacing={1} alignItems='center'>
            <Typography
              component={RouterLink}
              to={routePath}
              state={{ ...routeState, mediaType, productName: productName, collectionName }}
              variant='h6'
              fontWeight='600'
            >
              {formattedName}
            </Typography>
          </Stack>
          <Typography gutterBottom>{overview}</Typography>
          <Typography fontWeight={600} sx={{ marginTop: 'auto' }}>
            {formattedItemsCount}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const formatMovieCollectionData = (collectionInfo) => {
  const formattedData = {
    ...collectionInfo,
    formattedName: collectionInfo.collectionName,
    formattedItemsCount: `${collectionInfo.parts.length} movies`,
    routePath: `/watchlist-app/details/movie/${collectionInfo.productId}/${collectionInfo.collectionId}`,
    routeState: { movieParts: collectionInfo.parts },
  };

  return formattedData;
};

const formatTVCollectionData = (collectionInfo, id) => {
  const { season_number, air_date, overview, episode_count, poster_path, name } = collectionInfo;

  const formattedData = {
    collectionName: name,
    posterPath: poster_path,
    routePath: `/watchlist-app/details/tv/${id}/${season_number}`,
    routeState: {},
    overview,
    formattedName: `${name} ${format(new Date(air_date), '(yyyy)')}`,
    formattedItemsCount: `Number of episodes: ${episode_count}`,
  };

  return formattedData;
};

export default CollectionInfoCard;
