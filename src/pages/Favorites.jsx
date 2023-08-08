import { useSelector } from 'react-redux';
import CategoryList from '../components/CategoryList';

function Favorites() {
  const favorites = useSelector((state) => state.favoriteList);

  return <CategoryList categoryTitle='Favorites' mediaList={favorites} />;
}

export default Favorites;
