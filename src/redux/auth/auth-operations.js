import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as api from '../../shared/api/auth';

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
    //   Notify.failure(response.data.message);
      return rejectWithValue(response.data.message);
    }
  }
);

export const register = createAsyncThunk(
    "auth/register",
    async (data, { rejectWithValue }) => {
      try {
          // const dispatch = useDispatch();
          const result = await api.register(data);

            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }  
)
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const result = await api.logout();
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)
export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getCurrent();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
// export const getUserInfo = createAsyncThunk(
//   'user/getUserInfo',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await api.getUserInfo();
//       return data;
//     } catch ({ response }) {
//     //   Notify.failure(response.data.message);
//       return rejectWithValue(response.data.message);
//     }
//   }
// );

// export const updateUserInfo = createAsyncThunk(
//   'user/updateUserInfo',
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await api.updateUserInfo(data);
//       return res;
//     } catch ({ response }) {
//     //   Notify.failure(response.data.message);
//       return rejectWithValue(response.data.message);
//     }
//   }
// );
