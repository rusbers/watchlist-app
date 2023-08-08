import formatDateToISO from './formatDateToISO';
import { MOVIE } from './mediaTypeNamespace';

const getDiscoverMediaParams = (mediaType) => {
  const isMovie = mediaType === MOVIE;

  const params = {
    'vote_average.gte': 3,
    'vote_count.gte': 50,
  };

  params[isMovie ? 'release_date.lte' : 'first_air_date.lte'] = formatDateToISO();

  return params;
};

export default getDiscoverMediaParams;
