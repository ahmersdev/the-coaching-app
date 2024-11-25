import { ADMIN_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const adminSettings = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAdminDetails: builder.query({
      query: (params: any) => ({
        url: ADMIN_SITE.PROFILE,
        method: "GET",
        params,
      }),
    }),
    updateAdminPassword: builder.mutation({
      query: (params: any) => ({
        url: ADMIN_SITE.UPDATE_PASSWORD,
        method: "POST",
        params,
      }),
    }),
  }),
});

export const { useGetAdminDetailsQuery, useUpdateAdminPasswordMutation } =
  adminSettings;
