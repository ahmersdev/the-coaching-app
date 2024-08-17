import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const coachClients = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getClientDetails: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_CLIENTS,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetClientDetailsQuery } = coachClients;
