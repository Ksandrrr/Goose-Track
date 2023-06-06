import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme-toggle/theme.slice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;