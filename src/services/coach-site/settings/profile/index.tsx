import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "COACH_PROFILE";

export const coachProfile = baseAPI.injectEndpoints({
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
    updateGymDetails: builder.mutation({
      query: (body: any) => ({
        url: COACH_SITE.UPDATE_GYM_DETAILS,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateGymAddress: builder.mutation({
      query: (body: any) => ({
        url: COACH_SITE.UPDATE_GYM_ADDRESS,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetCoachDetailsQuery,
  useUpdateCoachProfileAboutMutation,
  useUpdateCoachPasswordMutation,
  useUpdateGymDetailsMutation,
  useUpdateGymAddressMutation,
} = coachProfile;
