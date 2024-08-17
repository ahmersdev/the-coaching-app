import { COACH_SITE } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const coachClientsImages = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getClientImages: builder.query({
      query: (params: any) => ({
        url: COACH_SITE.GET_PROGRESS_PICTURES,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetClientImagesQuery } = coachClientsImages;
