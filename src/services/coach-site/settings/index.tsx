import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "COACH_SETTINGS";

export const coachSettings = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCoachDetails: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.PROFILE,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    updateCoachProfileAbout: builder.mutation({
      query: (body: any) => ({
        url: COACH_SITE.UPDATE_COACH,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateCoachPassword: builder.mutation({
      query: (body: any) => ({
        url: COACH_SITE.UPDATE_PASSWORD,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    // Coach Subscriptions
    getCoachSubscriptions: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.SUBSCRIPTIONS,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
  }),
});

export const {
  useGetCoachDetailsQuery,
  useUpdateCoachProfileAboutMutation,
  useUpdateCoachPasswordMutation,
  useGetCoachSubscriptionsQuery,
} = coachSettings;
