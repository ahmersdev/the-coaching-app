import { ADMIN_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const adminCoaches = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAdminCoaches: builder.query({
      query: (params: any) => ({
        url: ADMIN_SITE.GET_ALL_COACHES,
        method: "GET",
        params,
      }),
    }),
    getAdminCoachById: builder.query({
      query: (params: any) => ({
        url: ADMIN_SITE.GET_COACH_DETAILS_BY_ID,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetAdminCoachesQuery, useGetAdminCoachByIdQuery } =
  adminCoaches;
