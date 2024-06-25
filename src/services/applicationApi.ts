import { api } from "./api.ts";
import { PaginatedResponse } from "../common/res/paginated.response.ts";

export enum ApplicationSources {
  LINKEDIN = "LINKEDIN",
  TELEGRAM = "TELEGRAM",
}

export enum ApplicationStatus {
  NO_ANSWER = "NO_ANSWER",
  WATCHED = "Watched by recruiter",
  OFFER = "OFFER",
}

export enum AnswerAfterInterview {
  NO_ANSWER = "No Answer",
  REFUSE = "REFUSE",
}

export enum InterviewType {
  PRE_SCREEN = "Pre-screen",
  TECHNICAL = "Technical",
}

interface Recruiter {
  id: number;
  name: string;
  contact: string;
}

interface Company {
  id: number;
  name: string;
  type?: string;
  link?: string;
  notes?: string;
}

interface Interview {
  id: number;
  applicationId: number;
  type: InterviewType;
  date: string;
  notes: string;
  feedback: string;
}

export interface Application {
  id: number;
  userId: string;
  recruiter: Recruiter;
  company: Company;
  interviews: Interview[];
  applyingDate: Date;
  position: string;
  source: ApplicationSources;
  status: ApplicationStatus;
  nextInterviewDate: Date;
  currentStage: InterviewType;
  salary: string;
  link: string;
}

export interface IAddNewApplication {
  applyingDate: string;
  position: string;
  source: ApplicationSources;
  salary: string;
  link: string;
  status: ApplicationStatus;
  currentStage?: string;
  nextInterviewDate?: string;
  company: {
    name: string;
    type?: string;
    link?: string;
    notes?: string;
  };
  recruiter?: {
    name: string;
    contact: string;
  };
}

export interface IUpdateApplication extends Partial<IAddNewApplication> {}

export const applicationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getApplications: builder.query<
      PaginatedResponse<Application[]>,
      { page: number; limit: number; sort: string }
    >({
      query: ({ page, limit, sort }) => {
        return {
          url: `/applications`,
          params: { page, limit, sort },
        };
      },
      providesTags: () => [{ type: "Applications", id: "LIST" }],
    }),
    getApplication: builder.query<Application, string>({
      query: (id) => `/applications/${id}`,
      providesTags: (data) => [{ type: "Applications", id: data?.id }],
    }),
    addNewApplication: builder.mutation<Application, IAddNewApplication>({
      query(body) {
        return {
          url: "applications",
          method: "POST",
          body: {
            ...body,
            //TODO: change to real after implementation user service on BE
            userId: "4c4e84e9-178a-4157-8c19-07fae3141dd9",
          },
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    updateApplication: builder.mutation<
      Application,
      { id: string; data: IUpdateApplication }
    >({
      query({ id, data }) {
        return {
          url: `applications/${id}`,
          method: "PUT",
          body: {
            ...data,
          },
        };
      },
      invalidatesTags: (data) => [{ type: "Applications", id: data?.id }],
    }),
  }),
});

export const {
  useGetApplicationsQuery,
  useGetApplicationQuery,
  useAddNewApplicationMutation,
  useUpdateApplicationMutation,
} = applicationApi;
