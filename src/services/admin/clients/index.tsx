import { ADMIN_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "ADMIN_CLIENTS";

export const adminClients = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAdminClientDetails: builder.query({
      query: (params: any) => ({
        url: ADMIN_SITE.GET_ALL_CLIENTS,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
  }),
});

export const { useGetAdminClientDetailsQuery } = adminClients;
