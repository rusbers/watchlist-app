import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieDbService from '../../services/tmdbService';
import { MOVIE, TV_SHOW } from '../../helpers/mediaTypeNamespace';

const initialState = {
  loading: false,
  mediaTypeSearch: MOVIE,
  searchResults: { movies: [], tvShows: [] },
  error: '',
};

const fetchSearchResults = createAsyncThunk('search/fetch', async ({ mediaTypeSearch, query }) => {
  return await movieDbService.searchMedia(mediaTypeSearch, query);
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setMediaTypeSearch: (state, action) => {
      state.mediaTypeSearch = action.payload;
    },
    clearSearchResult: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSearchResults.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      if (state.mediaTypeSearch === MOVIE) state.searchResults.movies = action.payload;
      if (state.mediaTypeSearch === TV_SHOW) state.searchResults.tvShows = action.payload;
    });
    builder.addCase(fetchSearchResults.rejected, (state, action) => {
      state.loading = false;
      state.searchResults = { movies: [], tvShows: [] };
      state.error = action.error.message;
    });
  },
});

export const selectMediaTypeSearch = (state) => state.search.mediaTypeSearch;
export const selectIsLoading = (state) => state.search.loading;
export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchError = (state) => state.search.error;

export const { setMediaTypeSearch, clearSearchResult } = searchSlice.actions;
export { fetchSearchResults };
export default searchSlice.reducer;
