import { Navigate } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';
import { useAuthContext } from '../../context/AuthContext.jsx';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { user, isLoading } = useAuthContext();
  if (isLoading) {
    return <Loader />;
  }

  return user ? Component : <Navigate to={redirectTo} />;
};
