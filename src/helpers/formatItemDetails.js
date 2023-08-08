import { MOVIE, TV_SHOW } from '../helpers/mediaTypeNamespace';
import getFullYear from './getFullYear';
import formatRunTime from './formatRunTime';
import formatLanguageName from './formatLanguageName';
import formatSumToCurrency from './formatSumToCurrency';

const formatItemDetails = (fetchedDetails, mediaType) => {
  const { status, homepage, genres, title, release_date, original_language, ...restDetails } =
    fetchedDetails;

  const formattedGenres = genres?.map((genre) => genre.name).join(', ');

  const detailsToShow = {
    primaryData: {
      title,
      releaseYear: getFullYear(release_date),
      homepage,
    },
    serializable: {
      Type: mediaType === TV_SHOW ? 'TV show' : 'movie',
      Status: status,
      Genres: formattedGenres ?? null,
      ['Original Language']: formatLanguageName(original_language),
    },
  };

  if (mediaType === TV_SHOW) {
    detailsToShow.serializable['Number of seasons'] = restDetails.number_of_seasons;
    detailsToShow.serializable['Number of episodes'] = restDetails.number_of_episodes;
    detailsToShow.serializable['Average runtime'] = formatRunTime(restDetails.episode_run_time);

    detailsToShow.primaryData.releaseYear = getFullYear(restDetails.first_air_date);
    detailsToShow.primaryData.title = restDetails.name;
    detailsToShow.primaryData.networks = restDetails.networks;
  }

  if (mediaType === MOVIE) {
    detailsToShow.serializable['Runtime'] = formatRunTime(restDetails.runtime);
    detailsToShow.serializable['Budget'] = formatSumToCurrency(restDetails.budget);
    detailsToShow.serializable['Revenue'] = formatSumToCurrency(restDetails.revenue);
  }

  return detailsToShow;
};

export default formatItemDetails;
