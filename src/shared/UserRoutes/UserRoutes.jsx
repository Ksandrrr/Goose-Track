import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { SideBar } from "../../pages/MainLayout/SideBar/SideBar"
import { MainLayout } from "../../pages/MainLayout/MainLayout"
import {AccountPage} from "../../pages/AccountPage/AccountPage"
export const UserRoutes = () => {

    return <BrowserRouter basename="/Goose-Track">
        <SideBar /> 
        <Routes>
          <Route path="/calendar" element={<MainLayout />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
        
        </Routes>
        {/* <Suspense fallback={<div>Loading...</div>}>
           <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast/>}></Route>
            <Route path="/movies/:movieId/reviews" element={<Reviews/>}></Route>
         </Route>
         <Route path="*" element={<HomePage />}></Route>
        </Routes>
        </Suspense> */}
      </BrowserRouter>
}