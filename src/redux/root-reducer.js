import { combineReducers } from "@reduxjs/toolkit";

import authReducer from './auth/auth-slice'
import themeReducer from './theme-toggle/theme.slice';
import taskSlice from "./task/task.slice"


const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    tasks: taskSlice,
})

export default rootReducer;