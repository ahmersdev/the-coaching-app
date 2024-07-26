import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "COACH_PROFILE";

export const paymentMethodsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentMethods: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.PROFILE,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
  }),
});

export const { useGetPaymentMethodsQuery } = paymentMethodsApi;
