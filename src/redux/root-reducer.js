import { combineReducers } from "@reduxjs/toolkit";

// import authReducer from './auth/auth-slice'
import themeReducer from './theme-toggle/theme.slice';
import taskSlice from "./task/task.slice"
import authSlice from './auth/auth-slice';

const rootReducer = combineReducers({
    auth: authSlice,
    theme: themeReducer,
    tasks: taskSlice,
})

export default rootReducer;