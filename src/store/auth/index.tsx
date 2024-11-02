import { getTokenFromCookies } from "@/utils/auth";
import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./auth.interface";

const initialState: AuthState = {
  token: getTokenFromCookies(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = null;
      Cookies.remove("authentication_token_coaching_app");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
