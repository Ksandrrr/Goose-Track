
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { taskMonth } from "../../redux/task/task-operation"
import { useEffect } from 'react';
export const PublicRoute = () => {
   const dispatch = useDispatch();
  const { isLogin, token } = useSelector(getAuth);
  
const currentDate = new Date();
const currentMonth = (currentDate.getMonth() + 1).toString(); 
const currentYear = currentDate.getFullYear().toString();

    useEffect(()=> {
      if (token !== '') {
            dispatch(taskMonth({month: currentMonth,year: currentYear}))
        }
    }, [dispatch, token, currentMonth, currentYear])
  
  if (isLogin) {
 
    return <Navigate to="/calendar" />;
  }
  return <Outlet />;
};
