import { combineReducers } from "@reduxjs/toolkit";

import authReducer from './auth/auth-slice'
import themeReducer from './theme-toggle/theme.slice';

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
})

export default rootReducer;