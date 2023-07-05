import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin,getAuth } from '../../redux/auth/auth-selectors';
// import Loader from 'components/Loader/Loader';
import {Loader} from "../Loader/Loader"
export const PrivateRoute = () => {
  const isLogin = useSelector(isUserLogin);
  const {loading, token} = useSelector(getAuth);
  if (loading) {
    return <Loader/>;
  }

   if(!isLogin && !token) {
    return <Navigate to="/" />;

  }
  return <Outlet />;
};