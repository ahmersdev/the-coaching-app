import { ADMIN_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const adminClients = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAdminClientDetails: builder.query({
      query: (params: any) => ({
        url: ADMIN_SITE.GET_ALL_CLIENTS,
        method: "GET",
        params,
      }),
    }),
    getAdminCoachClientsById: builder.query({
      query: (params: any) => ({
        url: ADMIN_SITE.GET_CLIENT_DETAILS_BY_ID,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useGetAdminClientDetailsQuery,
  useGetAdminCoachClientsByIdQuery,
} = adminClients;
