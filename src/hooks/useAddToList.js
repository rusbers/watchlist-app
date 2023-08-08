import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../app/features/favoritesSlice';
import { watchlistSelector } from '../app/features/watchlistSlice';
import { favoritesSelector } from '../app/features/favoritesSlice';
import {
  addToWatchlist as addToWatchlistAction,
  removeFromWatchlist,
} from '../app/features/watchlistSlice';

const isItemInList = (currentList, id) => currentList.some((listItem) => listItem.id === id);

function useAddToList(item) {
  const dispatch = useDispatch();
  const watchlist = useSelector(watchlistSelector);
  const favorites = useSelector(favoritesSelector);

  const [addedToFavorite, setAddedToFavorite] = useState(isItemInList(favorites, item.id));
  const [addedToWatchlist, setAddedToWatchlist] = useState(isItemInList(watchlist, item.id));

  const addToFavorite = () => {
    dispatch(addedToFavorite ? removeFromFavorites(item.id) : addToFavorites(item));
    setAddedToFavorite((state) => !state);
  };

  const addToWatchlist = () => {
    dispatch(addedToWatchlist ? removeFromWatchlist(item.id) : addToWatchlistAction(item));
    setAddedToWatchlist((state) => !state);
  };
  return { addedToFavorite, addedToWatchlist, addToFavorite, addToWatchlist };
}

export default useAddToList;
