import { configureStore } from '@reduxjs/toolkit';
import homeContentSlice from './features/homeContentSlice';
import favoritesSlice from './features/favoritesSlice';
import watchlistSlice from './features/watchlistSlice';
import searchSlice from './features/searchSlice';

export const store = configureStore({
  reducer: {
    homeContent: homeContentSlice,
    favoriteList: favoritesSlice,
    watchlist: watchlistSlice,
    search: searchSlice,
  },
});
