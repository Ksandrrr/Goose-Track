import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist';
// import authReducer from './auth/auth-slice'
import themeReducer from './theme-toggle/theme.slice';
import taskSlice from "./task/task.slice"
import authSlice from './auth/auth-slice';
import reviewsSlice from './reviews/reviews-slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ["token"],

};
const persistedReducer = persistReducer(persistConfig, authSlice)
const rootReducer = combineReducers({
    auth: persistedReducer,
    tasks: taskSlice,
    reviews: reviewsSlice,
    theme: themeReducer,
})

export default rootReducer;