import type { IncomingQueryType } from "../../../types/index.types";
import type { TJob } from "../../../types/jobs.types";
import { jobApiSlice } from "../../api/httpSlice";

const jobApi = jobApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (body) => ({
        url: "/tuition-jobs/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["NewJobs"],
    }),
    updateJob: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tuition-jobs/update/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["NewJobs"],
    }),
    getNewJobs: builder.query<IncomingQueryType<TJob>, any>({
      query: (params) => ({
        url: "/tuition-jobs/admin",
        method: "GET",
        params,
      }),
      providesTags: ["NewJobs"],
    }),
    getRunningJobs: builder.query<IncomingQueryType<TJob>, any>({
      query: (params) => ({
        url: "/tuition-jobs/admin",
        method: "GET",
        params,
      }),
      providesTags: ["RunningJobs"],
    }),
  }),
});

export const {
  useGetNewJobsQuery,
  useGetRunningJobsQuery,
  useCreateJobMutation,
  useUpdateJobMutation,
} = jobApi;
