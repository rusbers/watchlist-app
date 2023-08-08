import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieDbService from '../../services/tmdbService';
import { MOVIE, TV_SHOW } from '../../helpers/mediaTypeNamespace';

const initialState = {
  loading: false,
  contentData: [],
  lastFetched: null,
  error: '',
};

const contentRequests = [
  {
    label: 'Trending Movies',
    request: () => movieDbService.getTrendingMedia(MOVIE),
  },
  {
    label: 'Trending TV Shows',
    request: () => movieDbService.getTrendingMedia(TV_SHOW),
  },
  {
    label: 'Top Rated Movies',
    request: () => movieDbService.getTopRatedMedia(MOVIE),
  },
  {
    label: 'Top Rated TV Shows',
    request: () => movieDbService.getTopRatedMedia(TV_SHOW),
  },
  {
    label: 'Popular Movies',
    request: () => movieDbService.getPopularMedia(MOVIE),
  },
  {
    label: 'Popular TV Shows',
    request: () => movieDbService.getPopularMedia(TV_SHOW),
  },
  {
    label: 'Coming Soon',
    request: () => movieDbService.getUpcomingMedia(MOVIE),
  },
];

const fetchContent = async (contentRequest) => {
  const requestResult = await contentRequest.request();

  return { CategoryTitle: contentRequest.label, data: requestResult };
};

const fetchHomeContent = createAsyncThunk('homeContent/fetch', async () => {
  return await Promise.all(contentRequests.map((itemRequest) => fetchContent(itemRequest)));
});

export const homeContentSlice = createSlice({
  name: 'homeContent',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchHomeContent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomeContent.fulfilled, (state, action) => {
      state.loading = false;
      state.contentData = action.payload;
      state.lastFetched = Date.now();
      state.error = '';
    });
    builder.addCase(fetchHomeContent.rejected, (state, action) => {
      state.loading = false;
      state.contentData = [];
      state.error = action.error.message;
    });
  },
});

export const selectContentData = (state) => state.homeContent.contentData;
export const selectLastFetched = (state) => state.homeContent.lastFetched;
export const selectIsLoading = (state) => state.homeContent.loading;
export const selectError = (state) => state.homeContent.error;

export { fetchHomeContent };
export default homeContentSlice.reducer;
