 import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/reviews';

export const getReviews = createAsyncThunk('reviews/get', async (_, { rejectWithValue }) => {
  try {
    const result = await api.getFeedback();
    return result;
  } catch (error) {
      return rejectWithValue(error.message);
  }
});

 export const addReviews = createAsyncThunk(
  'reviews/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addFeedback(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

