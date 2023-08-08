import { TV_SHOW, MOVIE } from './mediaTypeNamespace';

const getItemMediaType = (item) => {
  const { release_date, first_air_date } = item;
  const isMovieType = release_date;
  const isTVshowType = first_air_date;

  if (isMovieType) return MOVIE;
  if (isTVshowType) return TV_SHOW;
};

export default getItemMediaType;
