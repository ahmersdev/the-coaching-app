import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "COACH_CLIENTS_ALERTS";

export const coachClientsAlerts = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getClientAlerts: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_CLIENT_ALERTS,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
  }),
});

export const { useGetClientAlertsQuery } = coachClientsAlerts;
