import formatReleaseDate from './formatReleaseDate';
import getImageSizeUrl from './getImageSizeUrl';
import getItemMediaType from './getItemMediaType';

const formatCardDetails = (item) => {
  const mediaType = getItemMediaType(item);
  const posterPath = item.poster_path ?? item.backdrop_path;
  const releaseDate = new Date(item.first_air_date ?? item.release_date);
  const formattedReleaseDate = formatReleaseDate(releaseDate);
  const imageUrl = posterPath
    ? `${getImageSizeUrl('/w500')}${posterPath}`
    : '/src/assets/images/placeholder/img_not_available.png';

  return {
    name: item.name ?? item.title,
    rating: item.vote_average,
    posterPath: imageUrl,
    releaseDate: formattedReleaseDate,
    routerPath: `/watchlist-app/details/${mediaType}/${item.id}`,
  };
};

export default formatCardDetails;
