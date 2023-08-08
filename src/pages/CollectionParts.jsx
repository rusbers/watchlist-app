import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetchTVshowEpisodes from '../hooks/useFetchTVshowEpisodes';
import theme from '../theme/theme';
import { MOVIE } from '../helpers/mediaTypeNamespace';
import { Typography } from '@mui/material';
import CollectionPartsInfo from '../components/CollectionPartsInfo';

const CollectionParts = () => {
  const params = useParams();
  const { state: locationState } = useLocation();
  const { mediaType, productName, collectionName, movieParts } = locationState;
  const [parts, setParts] = useState([]);

  const { loading, error, episodes } = useFetchTVshowEpisodes(mediaType, params);

  useEffect(() => {
    setParts(episodes ?? movieParts);
  }, [episodes, movieParts]);

  const pageTitleFormatted = formatPageTitle(mediaType, productName, collectionName);

  const loadingView = <div>loading ...</div>;
  const errorView = <div>{error}</div>;
  const partInfoView = parts.map((partInfo, index) => (
    <CollectionPartsInfo key={index} mediaType={mediaType} partInfo={partInfo} />
  ));

  return (
    <>
      <Typography
        component='h1'
        variant='h5'
        fontWeight={600}
        color={theme.palette.neutral.grey[100]}
        sx={{ marginBlock: 2 }}
      >
        {pageTitleFormatted}
      </Typography>

      {loading && loadingView}
      {parts && partInfoView}
      {error && errorView}
    </>
  );
};

const formatPageTitle = (mediaType, productName, collectionName) => {
  return mediaType === MOVIE ? collectionName : `${productName} - ${collectionName}`;
};

export default CollectionParts;
