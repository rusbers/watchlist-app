import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieDbService from '../services/tmdbService';
import DetailsContent from '../components/DetailsContent';
import DetailsSkeleton from '../components/DetailsSkeleton';

function Details() {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [error, setError] = useState('');

  const { mediaType, id } = useParams();

  const detailsLoaded = Object.keys(details).length > 0;

  useEffect(() => {
    const fetchItemDetails = async (itemID) => {
      try {
        const result = await movieDbService.getMediaDetails(mediaType, itemID);
        setDetails(result);
        setIsLoading(false);
        setError('');
      } catch (error) {
        setIsLoading(false);
        setError(`Error getting ${mediaType} details for ID ${id}: ${error}`);
      }
    };
    setIsLoading(true);
    fetchItemDetails(id);
  }, [id]);

  return (
    <>
      {isLoading && <DetailsSkeleton />}
      {detailsLoaded && <DetailsContent details={details} />}
      {error && <div>Ups, something went wrong. Please try again!</div>}
    </>
  );
}

export default Details;
