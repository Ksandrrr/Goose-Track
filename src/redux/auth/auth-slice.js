import { createSlice } from "@reduxjs/toolkit";

import { register } from "./auth-operations";

const initialState = {
    user: {},
    token: '',
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducer: builder => {
        builder.addCase(register.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        })
        .addCase(register.rejected, (state, {payload})=> {
            state.loading = false;
            state.error = payload;
        })
    }


})

export default authSlice.reducer;