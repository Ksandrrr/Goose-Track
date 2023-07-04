
import { createSlice } from '@reduxjs/toolkit';

import { addTask,taskMonth,delTask,edit } from './task-operation';
const initialState = {
  items: [],
  loading: false,
  error: null,
  message: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
     .addCase(taskMonth.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(taskMonth.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(taskMonth.rejected, (state, { payload }) => {
        state.loading = false;
        state.items = [];
        state.error = payload;
      })
      .addCase(addTask.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(delTask.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(delTask.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload
        state.items = state.items.filter(({_id}) => _id !== payload.message);
      })
      .addCase(delTask.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(edit.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(edit.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload
        const index = state.items.findIndex(item => item._id === payload._id);
        state.items[index] = payload;
      })
      .addCase(edit.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});


export default taskSlice.reducer;