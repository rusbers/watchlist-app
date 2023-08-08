import { TMDB_API } from './tmdbApi';
import { API_KEY } from './apiKey';
import { MOVIE } from '../helpers/mediaTypeNamespace';
import getDiscoverMediaParams from '../helpers/getDiscoverMediaParams';

const defaultMediaType = MOVIE;

const commonParams = {
  api_key: API_KEY,
  include_adult: false,
};

const movieDbService = {
  getTrendingMedia: async (mediaType = defaultMediaType) => {
    const response = await TMDB_API.get(`trending/${mediaType}/day`, {
      params: commonParams,
    });

    return response.data.results;
  },

  getTopRatedMedia: async (mediaType = defaultMediaType) => {
    const response = await TMDB_API.get(`${mediaType}/top_rated`, { params: commonParams });

    return response.data.results;
  },

  getPopularMedia: async (mediaType = defaultMediaType) => {
    const response = await TMDB_API.get(`${mediaType}/popular`, { params: commonParams });

    return response.data.results;
  },

  getUpcomingMedia: async (mediaType = defaultMediaType) => {
    const response = await TMDB_API.get(`${mediaType}/upcoming`, { params: commonParams });

    return response.data.results;
  },

  searchMedia: async (mediaType = defaultMediaType, query, id) => {
    const searchMediaParams = { ...commonParams, query, id };

    const response = await TMDB_API.get(`search/${mediaType}`, {
      params: searchMediaParams,
    });

    return response.data.results;
  },

  getMediaDetails: async (mediaType = defaultMediaType, id) => {
    const response = await TMDB_API.get(`${mediaType}/${id}`, { params: commonParams });

    return response.data;
  },

  getMediaGenres: async (mediaType = defaultMediaType) => {
    const response = await TMDB_API.get(`genre/${mediaType}/list`, {
      params: commonParams,
    });

    return response.data.genres;
  },

  getDiscoverMedia: async (mediaType = defaultMediaType, sort_by, with_genres, page) => {
    const discoverMediaParams = {
      ...commonParams,
      ...getDiscoverMediaParams(mediaType),
      sort_by,
      with_genres,
      page,
    };

    const response = await TMDB_API.get(`/discover/${mediaType}`, {
      params: discoverMediaParams,
    });

    return response.data;
  },

  getTVshowEpisodes: async (tvShowId, seasonNumber) => {
    const response = await TMDB_API.get(`tv/${tvShowId}/season/${seasonNumber}`, {
      params: commonParams,
    });

    return response.data.episodes;
  },

  getMovieCollectionDetails: async (collectionId) => {
    const response = await TMDB_API.get(`collection/${collectionId}`, {
      params: commonParams,
    });

    return response.data;
  },
};

export default movieDbService;
