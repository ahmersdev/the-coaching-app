import { createSlice } from "@reduxjs/toolkit";
import { StripeState } from "./stripe.types";
import { getSecretFromCookies } from "@/utils/stripe";

const initialState: StripeState = {
  clientSecret: getSecretFromCookies(),
};

const stripeSlice = createSlice({
  name: "stripe",
  initialState,
  reducers: {
    secret: (state, action) => {
      state.clientSecret = action.payload;
    },
  },
});

export const { secret } = stripeSlice.actions;

export default stripeSlice.reducer;
