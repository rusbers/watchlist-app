import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import CollectionSortButton from './CollectionSortButton';
import CollectionInfoCard from './CollectionInfoCard';
import CollectionTitle from './CollectionTitle';
import movieDbService from '../services/tmdbService';
import { MOVIE, TV_SHOW } from '../helpers/mediaTypeNamespace';

const CollectionContainer = ({ details }) => {
  const [collection, setCollection] = useState({});
  const [sorted, setSorted] = useState(false);
  const isMovie = collection.type === MOVIE;
  const isTVshow = collection.type === TV_SHOW;
  const hasCollection = collection.hasCollection;

  useEffect(() => {
    const isTVshow = !!details.first_air_date;

    const fetchCollectionItems = async () => {
      const movieCollectionData = await getMovieCollectionData(details);
      setCollection(movieCollectionData);
    };

    if (isTVshow) {
      const tvCollectionData = getTVcollectionData(details);
      setCollection(tvCollectionData);
    } else {
      fetchCollectionItems();
    }
  }, [details]);

  const sortCollection = () => {
    setCollection({ ...collection, parts: collection.parts.reverse() });
    setSorted((sorted) => !sorted);
  };

  const tvShowView =
    isTVshow && hasCollection
      ? collection.parts.map((partData, index) => (
          <CollectionInfoCard
            key={index}
            mediaType={collection.type}
            aboutCollection={partData}
            specificData={collection.specificData}
          />
        ))
      : null;

  const movieView =
    isMovie && hasCollection ? (
      <CollectionInfoCard mediaType={collection.type} specificData={collection.specificData} />
    ) : null;

  return (
    <>
      {hasCollection && (
        <Stack direction='row' alignItems='center' gap={2} marginBottom={2}>
          <CollectionTitle variant={collection.type} />

          {isTVshow && (
            <CollectionSortButton
              sortCollection={sortCollection}
              sorted={sorted}
              mediaType={collection.type}
            />
          )}
        </Stack>
      )}

      {movieView}
      {tvShowView}
    </>
  );
};

const getTVcollectionData = (details) => {
  const seasons = details.seasons.filter((item) => item.air_date).reverse();

  const tvCollectionData = {
    type: TV_SHOW,
    parts: seasons,
    hasCollection: true,
    specificData: {
      productName: details.name,
      id: details.id,
    },
  };

  return tvCollectionData;
};

const getMovieCollectionData = async (details) => {
  const belongsToCollection = Boolean(details.belongs_to_collection);
  const collectionId = details.belongs_to_collection?.id;

  if (belongsToCollection) {
    try {
      const collectionFetchedData = await movieDbService.getMovieCollectionDetails(collectionId);

      const collectionData = {
        type: MOVIE,
        hasCollection: true,
        specificData: {
          productName: details.title,
          posterPath: details.belongs_to_collection.poster_path,
          overview: collectionFetchedData.overview,
          collectionName: details.belongs_to_collection.name,
          parts: collectionFetchedData.parts,
          productId: details.id,
          collectionId,
        },
      };

      return collectionData;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    type: MOVIE,
    hasCollection: false,
  };
};

export default CollectionContainer;
