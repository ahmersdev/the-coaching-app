import { getDetailsFromCookies, getTokenFromCookies } from "@/utils/auth";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: getTokenFromCookies(),
  details: getDetailsFromCookies(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setDetails: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
      state.details = "";
      Cookies.remove("authentication_token");
      Cookies.remove("authentication_details");
    },
  },
});

export const { setToken, setDetails, clearToken } = authSlice.actions;

export default authSlice.reducer;
