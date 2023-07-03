import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as api from '../../shared/api/task';


export const addTask = createAsyncThunk(
  'tasks/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addTask(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const taskMonth = createAsyncThunk(
  'tasks/get',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getTask(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const delTask = createAsyncThunk(
  'tasks/delete',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.deleteTask(id);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const edit = createAsyncThunk(
  'tasks/edit',
  async ({ id, task }, { rejectWithValue }) => {
    try {
      const result = await api.editTask(id, task);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);