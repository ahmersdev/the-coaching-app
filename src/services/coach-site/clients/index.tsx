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
    postAssignMacro: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.ASSIGN_MACRO,
        method: "PUT",
        params,
      }),
      invalidatesTags: [TAG],
    }),
    getAssignMacro: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_MACRO,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteMacro: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.DELETE_MACRO,
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
  usePostAssignMacroMutation,
  useGetAssignMacroQuery,
  useDeleteMacroMutation,
} = coachClients;
