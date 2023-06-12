import { createSlice } from "@reduxjs/toolkit";
import { logoutThunk, profileThunk, updateUserThunk, registerThunk, loginThunk } from "../services/auth-thunks";


const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null },
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [registerThunk.fulfilled]: (state, { payload }) => {
      console.log("register payload: ", payload);
      state.currentUser = payload;
    },
    [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});
export default authSlice.reducer;