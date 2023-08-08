import { useSelector } from 'react-redux';
import CategoryList from '../components/CategoryList';

function Watchlist() {
  const watchlist = useSelector((state) => state.watchlist);

  return <CategoryList categoryTitle='Watchlist' mediaList={watchlist} />;
}
export default Watchlist;
