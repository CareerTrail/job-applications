import { api } from './api.ts';

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
interface IResetPasswordData {
  code: string;
  password: string;
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<void, IUser>({
      query: (registerUser) => ({
        url: 'users',
        method: 'POST',
        body: registerUser,
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' } as const],
    }),
    loginUser: builder.mutation<{ access_token: string }, ILoginUser>({
      query: (loginUser) => ({
        url: 'auth/login',
        method: 'POST',
        body: loginUser,
      }),
    }),
    sendResetPasswordEmail: builder.mutation<void, IResetPassword>({
      query: (data) => ({
        url: 'users/reset-password-request',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation<void, IResetPasswordData>({
      query: (data) => ({
        url: 'users/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: 'users/me',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendResetPasswordEmailMutation,
  useResetPasswordMutation,
  useLazyGetUserQuery,
} = userApi;
