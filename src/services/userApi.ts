import { api } from "./api.ts";

interface IUser {
  firstName: string;
  lastName: string;
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
  }),
});

export const { useAddNewUserMutation } = userApi;
