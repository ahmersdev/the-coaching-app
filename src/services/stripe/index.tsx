import { STRIPE } from "@/constants/endpoints";
import { baseAPI } from "../base-api";

export const stripeApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getClientSecret: builder.query({
      query: (params: any) => ({
        url: STRIPE.GET_SECRET,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetClientSecretQuery } = stripeApi;
