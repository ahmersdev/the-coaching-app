import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "COACH_CLIENTS";

export const coachClients = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // List Page
    getClientDetails: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_CLIENTS,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    // Assign Workout
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
    // Assign Macro
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
    // Assign Diet
    postAssignDiet: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.ASSIGN_DIET,
        method: "PUT",
        params,
      }),
      invalidatesTags: [TAG],
    }),

    getAssignDiet: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_DIET,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),

    deleteDietDay: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.DELETE_DIET_DAY,
        method: "DELETE",
        params,
      }),
      invalidatesTags: [TAG],
    }),

    deleteDietMeal: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.DELETE_DIET_MEAL,
        method: "DELETE",
        params,
      }),
      invalidatesTags: [TAG],
    }),

    // Overview
    getCoachClientsById: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_CLIENT_DETAILS_BY_ID,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
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
  usePostAssignDietMutation,
  useGetAssignDietQuery,
  useDeleteDietDayMutation,
  useDeleteDietMealMutation,
  useGetCoachClientsByIdQuery,
} = coachClients;
