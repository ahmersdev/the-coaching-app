import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "COACH_CLIENTS";

export const coachClients = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getClientDetails: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_CLIENTS,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    postAssignWorkout: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.ASSIGN_WORKOUT,
        method: "POST",
        params,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetClientDetailsQuery, usePostAssignWorkoutMutation } =
  coachClients;
