import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFatSecretAccessToken, getOAuthParams } from "./fat-secret-auth";
import {
  FAT_SECRET_BASE_URL,
  FAT_SECRET_CLIENT_ID,
  FAT_SECRET_CLIENT_SECRET,
} from "@/config";
import { IFoodSearchResponse } from "./fat-secret.interface";

export const fatSecretApi = createApi({
  reducerPath: "fatSecretApi",
  baseQuery: fetchBaseQuery({
    baseUrl: FAT_SECRET_BASE_URL,
    prepareHeaders: async (headers) => {
      const accessToken = await getFatSecretAccessToken();
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getFoodAutocomplete: builder.query<IFoodSearchResponse, string>({
      query: ({ params }: any) => {
        const oauthParams = getOAuthParams(
          FAT_SECRET_BASE_URL,
          "GET",
          {
            method: "foods.search",
            format: "json",
            ...params,
          },
          FAT_SECRET_CLIENT_ID!,
          FAT_SECRET_CLIENT_SECRET!
        );

        if (!oauthParams.oauth_signature) {
          throw new Error("OAuth signature is undefined");
        }

        const paramsAuth: Record<string, string> = {
          method: "foods.search",
          format: "json",
          oauth_consumer_key: oauthParams.oauth_consumer_key,
          oauth_nonce: oauthParams.oauth_nonce,
          oauth_timestamp: oauthParams.oauth_timestamp,
          oauth_signature: oauthParams.oauth_signature,
          oauth_signature_method: oauthParams.oauth_signature_method,
          ...params,
        };

        const queryString = new URLSearchParams(paramsAuth).toString();

        return {
          url: `?${queryString}`,
          method: "GET",
        };
      },
      transformResponse: (response: any) => response.foods.food,
    }),
  }),
});

export const { useLazyGetFoodAutocompleteQuery } = fatSecretApi;
