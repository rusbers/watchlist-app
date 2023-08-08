import { useMediaQuery } from '@mui/material';
import theme from '../theme/theme';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const defaultNavList = [
  { text: 'Movies', path: '/watchlist-app/movie' },
  { text: 'TV Shows', path: '/watchlist-app/tv' },
];

function useNavItems() {
  const [navItems, setNavItems] = useState(defaultNavList);
  const { credentials } = useContext(AuthContext);
  const isAuthenticated = credentials?.authenticated;

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    let newNavItems = defaultNavList;

    if (isAuthenticated) {
      newNavItems = [
        ...newNavItems,
        { text: 'Favorites', path: '/watchlist-app/favorites' },
        { text: 'Watchlist', path: '/watchlist-app/watchlist' },
      ];
    }

    if (isMobile) {
      newNavItems = [...newNavItems, { text: 'Search', path: '/watchlist-app/search' }];
    }

    setNavItems(newNavItems);
  }, [isAuthenticated, isMobile]);

  return navItems;
}
export default useNavItems;
