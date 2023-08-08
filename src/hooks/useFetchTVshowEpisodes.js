import movieDbService from '../services/tmdbService';
import { useState, useEffect } from 'react';
import { TV_SHOW } from '../helpers/mediaTypeNamespace';

const useFetchTVshowEpisodes = (mediaType, params) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [episodes, setEpisodes] = useState([]);

  const { tvShowId, seasonNumber } = params;

  useEffect(() => {
    const fetchCollectionParts = async () => {
      try {
        const result = await movieDbService.getTVshowEpisodes(tvShowId, seasonNumber);
        setLoading(false);
        setEpisodes(result);
        setError('');
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    if (mediaType === TV_SHOW) {
      setLoading(true);
      fetchCollectionParts();
    } else {
      setEpisodes(null);
    }
  }, []);

  return { loading, error, episodes };
};

export default useFetchTVshowEpisodes;
