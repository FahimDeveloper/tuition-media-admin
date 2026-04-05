import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithRefreshToken } from "./baseQuery";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const leadApiSlice = createApi({
  reducerPath: "leadApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["NewLeads", "AssignedLeads", "AssignedOwnLeads"],
  endpoints: () => ({}),
});
