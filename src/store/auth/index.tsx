import { getTokenFromCookies } from "@/utils/auth";
import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.types";

const initialState: AuthState = {
  token: getTokenFromCookies(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = "";
      Cookies.remove("authentication_token");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
