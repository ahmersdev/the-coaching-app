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
        method: "PUT",
        params,
      }),
      invalidatesTags: [TAG],
    }),
    getAssignWorkout: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_WORKOUT,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteWorkoutDay: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.DELETE_WORKOUT_DAY,
        method: "DELETE",
        params,
      }),
      invalidatesTags: [TAG],
    }),
    deleteWorkoutExercise: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.DELETE_WORKOUT_EXERCISE,
        method: "DELETE",
        params,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetClientDetailsQuery,
  usePostAssignWorkoutMutation,
  useGetAssignWorkoutQuery,
  useDeleteWorkoutDayMutation,
  useDeleteWorkoutExerciseMutation,
} = coachClients;
