import useAddToList from '../hooks/useAddToList';
import ActionWrapper from './ActionWrapper';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Action = ({ variant, item, ...rest }) => {
  const { addToFavorite, addToWatchlist, addedToFavorite, addedToWatchlist } = useAddToList(item);

  const variantConfig = {
    favorite: {
      success: addedToFavorite,
      icon: <FavoriteBorderIcon color='primary' />,
      successIcon: <FavoriteIcon color='success' />,
      onClickHandler: addToFavorite,
    },
    watchlist: {
      success: addedToWatchlist,
      icon: <BookmarkAddIcon color='primary' />,
      successIcon: <BookmarkAddedIcon color='success' />,
      onClickHandler: addToWatchlist,
    },
  };

  return <ActionWrapper {...variantConfig[variant]} {...rest} />;
};

export default Action;
