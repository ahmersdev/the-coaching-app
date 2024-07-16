import { getTokenFromCookies } from "@/utils/auth";
import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.interface";

const initialState: AuthState = {
  token: getTokenFromCookies(),
  guardCheck: true,
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
    setGuardCheck: (state, action) => {
      state.guardCheck = action.payload;
    },
  },
});

export const { logIn, logOut, setGuardCheck } = authSlice.actions;

export default authSlice.reducer;
