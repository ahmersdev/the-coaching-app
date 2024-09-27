import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./auth";
import stripeReducer from "./stripe";
import { baseAPI } from "@/services/base-api";
import { fatSecretApi } from "@/services/coach-site/clients/fat-secret";

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    [fatSecretApi.reducerPath]: fatSecretApi.reducer,
    auth: authReducer,
    stripe: stripeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(baseAPI.middleware)
      .concat(fatSecretApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;
