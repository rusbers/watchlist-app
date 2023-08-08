import Poster from './Poster';
import NetworkHomepageButton from './NetworkHomepageButton';
import DetailsInfo from './DetailsInfo';
import DetailsLayout from './DetailsLayout';
import getItemDetails from '../helpers/getItemDetails';
import CollectionContainer from './CollectionContainer';

const DetailsContent = ({ details }) => {
  const { poster_path, backdrop_path, name, title } = details;
  const { primaryData } = getItemDetails(details);
  const { homepage, networks } = primaryData;
  const itemTitle = name ?? title;
  const itemPosterPath = poster_path ?? backdrop_path;

  const poster = <Poster altText={itemTitle} posterPath={itemPosterPath} />;
  const info = <DetailsInfo details={details} />;
  const mediaItemHomePage = <NetworkHomepageButton homepageLink={homepage} networks={networks} />;
  const collection = <CollectionContainer details={details} />;

  return (
    <DetailsLayout
      poster={poster}
      info={info}
      mediaItemHomePage={mediaItemHomePage}
      collection={collection}
    />
  );
};

export default DetailsContent;
