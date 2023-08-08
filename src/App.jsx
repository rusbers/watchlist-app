import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Watchlist from './pages/Watchlist';
import Details from './pages/Details';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';
import PrivateRoutes from './components/PrivateRoutes';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MediaList from './pages/MediaList';
import CollectionParts from './pages/CollectionParts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/watchlist-app/' element={<Home />} />
          <Route
            path='/watchlist-app/movie'
            element={<MediaList key='movie' mediaType='movie' pageTitle='Movies' />}
          />
          <Route
            path='/watchlist-app/tv'
            element={<MediaList key='tv' mediaType='tv' pageTitle='TV Shows' />}
          />
          <Route path='/watchlist-app/search' element={<SearchResults />} />
          <Route path='/watchlist-app/details/:mediaType/:id' element={<Details />} />
          <Route path='/watchlist-app/details/tv/:tvShowId/:seasonNumber' element={<CollectionParts />} />
          <Route path='/watchlist-app/details/movie/:productId/:collectionId' element={<CollectionParts />} />
          <Route path='*' element={<NotFound />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/watchlist-app/favorites' element={<Favorites />} />
            <Route path='/watchlist-app/watchlist' element={<Watchlist />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
