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

    postClientAlertsStatus: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.POST_CLIENT_ALERTS_STATUS,
        method: "POST",
        params,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetClientAlertsQuery, usePostClientAlertsStatusMutation } =
  coachClientsAlerts;
