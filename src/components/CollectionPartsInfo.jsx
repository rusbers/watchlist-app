import { Link as RouterLink } from 'react-router-dom';
import format from 'date-fns/format';
import formatRunTime from '../helpers/formatRunTime';
import formatReleaseDate from '../helpers/formatReleaseDate';
import { MOVIE } from '../helpers/mediaTypeNamespace';
import { Typography, Grid, Paper } from '@mui/material';
import Poster from '../components/Poster';

const CollectionPartsInfo = ({ mediaType, partInfo }) => {
  const partData =
    mediaType === MOVIE ? formatMoviePartInfo(partInfo) : formatEpisodeInfo(partInfo);

  const { partName, posterPath, posterAltText, overview, runtime, routerPath } = partData;

  const partTitleView =
    mediaType === MOVIE ? (
      <Typography component={RouterLink} to={routerPath} variant='h6' fontWeight='600'>
        {partName}
      </Typography>
    ) : (
      <Typography variant='h6' fontWeight='600'>
        {partName}
      </Typography>
    );

  const runtimeView = runtime ? (
    <Typography fontWeight={600} sx={{ marginTop: 'auto' }}>
      {runtime}
    </Typography>
  ) : null;

  return (
    <Paper sx={{ padding: 2, marginBottom: 2 }}>
      <Grid container>
        <Grid item sm={3} paddingRight={2}>
          <Poster
            altText={posterAltText}
            posterPath={posterPath}
            height={posterPath ? 'auto' : '135'}
          />
        </Grid>
        <Grid item sm={9} display='flex' flexDirection='column'>
          {partTitleView}
          <Typography gutterBottom>{overview}</Typography>
          {runtimeView}
        </Grid>
      </Grid>
    </Paper>
  );
};

const formatEpisodeInfo = (rawInfo) => {
  const { episode_number, name, air_date, overview, runtime: episodeRuntime, still_path } = rawInfo;
  const formattedData = {
    partName: `${episode_number}. ${name} ${format(new Date(air_date), '(dd MMM yyyy)')}`,
    posterPath: still_path,
    posterAltText: name,
    overview,
    runtime: episodeRuntime ? `Runtime ${formatRunTime(episodeRuntime)}` : null,
    id: null,
    routerPath: null,
  };

  return formattedData;
};

const formatMoviePartInfo = (rawInfo) => {
  const { title, release_date, overview, poster_path, backdrop_path, id } = rawInfo;
  const formattedData = {
    partName: `${title} (${formatReleaseDate(new Date(release_date))})`,
    posterPath: poster_path ?? backdrop_path,
    posterAltText: title,
    overview: overview,
    runtime: null,
    routerPath: `/watchlist-app/details/movie/${id}`,
  };

  return formattedData;
};

export default CollectionPartsInfo;
