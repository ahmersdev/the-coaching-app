import { ADMIN_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "ADMIN_COMPLAINTS";

export const adminComplaints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAdminComplaints: builder.query({
      query: (params: any) => ({
        url: ADMIN_SITE.GET_ALL_COMPLAINTS,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    updateAdminComplaintsReply: builder.mutation({
      query: (body: any) => ({
        url: ADMIN_SITE.REPLY_COMPLAINT,
        method: "PUT",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetAdminComplaintsQuery,
  useUpdateAdminComplaintsReplyMutation,
} = adminComplaints;
