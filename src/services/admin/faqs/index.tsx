import { ADMIN_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "ADMIN_FAQS";

export const adminFaqs = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAdminFaqs: builder.query({
      query: () => ({
        url: ADMIN_SITE.GET_ALL_FAQS,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    postAdminFaqs: builder.mutation({
      query: (params: any) => ({
        url: ADMIN_SITE.POST_FAQ,
        method: "POST",
        params,
      }),
      invalidatesTags: [TAG],
    }),
    deleteAdminFaq: builder.mutation({
      query: (params: any) => ({
        url: ADMIN_SITE.DELETE_FAQ,
        method: "DELETE",
        params,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetAdminFaqsQuery,
  usePostAdminFaqsMutation,
  useDeleteAdminFaqMutation,
} = adminFaqs;
