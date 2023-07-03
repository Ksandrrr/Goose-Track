import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin,getAuth } from '../../redux/auth/auth-selectors';
// import Loader from 'components/Loader/Loader';
import {Loader} from "../Loader/Loader"
export const PrivateRoute = () => {
  const isLogin = useSelector(isUserLogin);
  const {loading} = useSelector(getAuth);
  if (loading) {
    return <Loader/>;
  }

  if (!isLogin) {
    return <Navigate to="/login" />;

  }
  return <Outlet />;
};