import { ADMIN_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "ADMIN_SETTINGS";

export const adminSettings = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAdminDetails: builder.query({
      query: (params: any) => ({
        url: ADMIN_SITE.PROFILE,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    updateAdminPassword: builder.mutation({
      query: (body: any) => ({
        url: ADMIN_SITE.UPDATE_PASSWORD,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetAdminDetailsQuery, useUpdateAdminPasswordMutation } =
  adminSettings;
