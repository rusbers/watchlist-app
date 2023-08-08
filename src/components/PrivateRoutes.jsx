import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function PrivateRoutes() {
  const { credentials } = useContext(AuthContext);
  const isLogged = credentials.authenticated;

  if (!isLogged) return null;

  return isLogged ? <Outlet /> : <Navigate to='/watchlist-app/' />;
}
export default PrivateRoutes;
