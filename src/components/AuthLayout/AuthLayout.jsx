import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refresh } from 'redux/auth/auth-operations';
import { getReviews } from 'redux/reviews/reviews-operation';
const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
    dispatch(getReviews());
  }, [dispatch]);

  return children;
};

export default AuthLayout;