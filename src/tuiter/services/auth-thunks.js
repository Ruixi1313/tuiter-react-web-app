import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
  "user/login", async (credentials) => {
    const user = await authService.login(credentials);
    return user;
  }
);
export const registerThunk = createAsyncThunk(
  "user/register",
  async (credentials) => {
    console.log("register thunk called");
    const user = await authService.register(credentials);
    console.log("register data: ", user);
    return user;
  }
);
export const profileThunk = createAsyncThunk(
  "auth/profile", async () => {
    console.log("profile thunk called");
    console.log("profile data: ", await authService.profile());
    return await authService.profile();
  });
export const logoutThunk = createAsyncThunk(
  "auth/logout", async () => {
    return await authService.logout();
  });
export const updateUserThunk = createAsyncThunk(
  "user/updateUser", async (user) => {
    console.log("update thunk called");
    await authService.updateUser(user);
    console.log("await authService updateuser: ", authService.updateUser(user));
    return user;
  });