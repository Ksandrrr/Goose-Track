import { combineReducers } from "@reduxjs/toolkit";

// import authReducer from './auth/auth-slice'
import themeReducer from './theme-toggle/theme.slice';
import taskSlice from "./task/task.slice"
import authSlice from './auth/auth-slice';
import reviewsSlice from './reviews/reviews-slice';

const rootReducer = combineReducers({
    auth: authSlice,
    tasks: taskSlice,
    reviews: reviewsSlice,
    theme: themeReducer,
})

export default rootReducer;