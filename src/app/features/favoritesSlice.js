import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    },
    removeFromFavorites: (state, action) => {
      const newState = state.filter((stateItem) => stateItem.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    },
  },
});

export const favoritesSelector = (state) => state.favoriteList;
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
