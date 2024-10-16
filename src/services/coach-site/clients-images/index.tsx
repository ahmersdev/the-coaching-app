import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "COACH_CLIENTS_IMAGES";

export const coachClientsImages = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getClientImages: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_PROGRESS_PICTURES,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    postClientImageFeedback: builder.mutation({
      query: (params: any) => ({
        url: COACH_SITE.CLIENT_PROGRESS_FEEDBACK,
        method: "POST",
        params,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetClientImagesQuery, usePostClientImageFeedbackMutation } =
  coachClientsImages;
