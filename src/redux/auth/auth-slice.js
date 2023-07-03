import { createSlice } from "@reduxjs/toolkit";

import {register,login,logout,refresh} from './auth-operations';

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,   
} 

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
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
        .addCase(register.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(login.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        })
        .addCase(login.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(logout.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.user = {};
            state.token = "";
            state.isLogin = false;
        })
        .addCase(logout.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(refresh.pending, state => {
            state.loading = true;
        state.error = null;
        state.isLogin = false;
        })
        .addCase(refresh.fulfilled, (state, {payload}) => {
             state.loading = false;
        state.error = null;
        state.isLogin = true;
        state.token = payload.token;
        })
        .addCase(refresh.rejected, (state, {payload}) => {
            state.loading = false;
        state.error = payload;
        state.isLogin = false;
        })
    }
})

export default authSlice.reducer;