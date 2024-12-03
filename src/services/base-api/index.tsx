import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/config";
import { RootState } from "@/store/store";

// Tags
export const TAGS = [
  "COACH_SETTINGS",
  "COACH_CLIENTS",
  "COACH_CLIENTS_IMAGES",
  "COACH_CLIENTS_ALERTS",
  "ADMIN_COMPLAINTS",
  "ADMIN_FAQS",
];

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
