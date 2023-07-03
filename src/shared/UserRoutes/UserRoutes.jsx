import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy,Suspense  } from "react";

import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import {Loader} from "../../components/Loader/Loader"
const AccountPage = lazy(() => import('../../pages/AccountPage/AccountPage'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'))
const Login = lazy(() => import('../../pages/LoginPage/LoginPage'))
const  RegisterPage  = lazy(() => import('../../pages/RegisterPage/RegistrPage'))
const MainLayout = lazy(() => import('../../pages/MainLayout/MainLayout'));
export const UserRoutes = () => {
  return (
    <BrowserRouter basename="/Goose-Track">
      <Suspense fallback={<Loader/>}>
      <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<MainPage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/registr" element={<RegisterPage />}/>
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/calendar" element={<MainLayout />}/>
            <Route path="/account" element={<AccountPage />}/>
            <Route path="/calendar/task" element={<MainLayout />}/>
          </Route>
        
        {/* <Route path="*" element={NotFoundPage} /> */}
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
