import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('watchlist')) || [];

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem('watchlist', JSON.stringify(newState));
      return newState;
    },
    removeFromWatchlist: (state, action) => {
      const newState = state.filter((stateItem) => stateItem.id !== action.payload);
      localStorage.setItem('watchlist', JSON.stringify(newState));
      return newState;
    },
  },
});

export const watchlistSelector = (state) => state.watchlist;

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;