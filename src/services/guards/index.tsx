import { GUARDS } from "@/constants/endpoints";
import { baseAPI } from "../base-api";

export const guardsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptionStatus: builder.query({
      query: (params: any) => ({
        url: GUARDS.SUBSCRIPTION_STATUS,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useLazyGetSubscriptionStatusQuery } = guardsApi;
