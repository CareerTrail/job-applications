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

interface IResetPassword {
  email: string;
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<void, IUser>({
      query: (registerUser) => ({
        url: "users",
        method: "POST",
        body: registerUser,
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
    sendResetPasswordEmail: builder.mutation<void, IResetPassword>({
      query: (data) => ({
        url: "auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendResetPasswordEmailMutation,
} = userApi;
