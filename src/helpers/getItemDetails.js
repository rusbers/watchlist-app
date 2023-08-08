import formatItemDetails from './formatItemDetails';
import { MOVIE, TV_SHOW } from '../helpers/mediaTypeNamespace';

const getItemDetails = (details) => {
  const isTVshow = details.first_air_date;
  const mediaType = isTVshow ? TV_SHOW : MOVIE;
  return formatItemDetails(details, mediaType);
};

export default getItemDetails;
