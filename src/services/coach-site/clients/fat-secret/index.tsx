import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFatSecretAccessToken } from "./fat-secret-auth";

interface IFoodItem {
  food_id: string;
  food_name: string;
}

interface IFoodSearchResponse {
  foods: {
    food: IFoodItem[];
  };
}

export const fatSecretApi = createApi({
  reducerPath: "fatSecretApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://platform.fatsecret.com/rest/server.api",
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
      query: (searchTerm) => ({
        url: "",
        method: "GET",
        params: {
          method: "foods.search",
          search_expression: searchTerm,
          format: "json",
        },
      }),
    }),
  }),
});

export const { useGetFoodAutocompleteQuery } = fatSecretApi;
