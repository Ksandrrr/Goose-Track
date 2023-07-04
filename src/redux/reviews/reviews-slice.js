import { createSlice } from '@reduxjs/toolkit';

import { addReviews,getReviews } from './reviews-operation';
const initialState = {
  items: [],
  loading: false,
  error: null,
  message: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: builder => {
    builder
     .addCase(addReviews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addReviews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = [payload, ...state.items];
      })
      .addCase(addReviews.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getReviews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(getReviews.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});


export default reviewsSlice.reducer;