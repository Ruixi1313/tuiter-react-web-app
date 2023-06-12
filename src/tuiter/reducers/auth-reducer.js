import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk } from "../services/auth-thunks";


const authSlice = createSlice({
 name: "users",
 initialState: { 
  error:null,
  loading:false,
  currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, { payload }) => {
     state.currentUser = payload;
     state.loading = false;
     state.error = null;
   },
   [logoutThunk.fulfilled]: (state) => {
    state.currentUser = null;
    state.loading = false;
    state.error = null;
  },
  [profileThunk.fulfilled]: (state, { payload }) => {
    state.currentUser = payload;
    state.loading = false;
    state.error = null;
  },
  [updateUserThunk.fulfilled]: (state, { payload }) => {
    state.currentUser = payload;
  },
   [registerThunk.fulfilled]: (state, { payload }) => {
       state.currentUser = payload;
       state.loading = false;
       state.error = null;
  },
 },
});
export default authSlice.reducer;