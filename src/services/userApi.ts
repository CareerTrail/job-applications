import { api } from "./api.ts";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addNewUser: builder.mutation<void, IUser>({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" } as const],
    }),
    loginUser: builder.mutation<{ access_token: string }, ILoginUser>({
      query: (loginUser) => ({
        url: "auth/login",
        method: "POST",
        body: loginUser,
      }),
    }),
  }),
});

export const { useAddNewUserMutation, useLoginUserMutation } = userApi;
