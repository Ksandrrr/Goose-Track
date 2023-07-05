
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const PublicRoute = () => {

  const { isLogin } = useSelector(getAuth);
  
  if (isLogin) {
 
    return <Navigate to="/calendar" />;
  }
  return <Outlet />;
};
