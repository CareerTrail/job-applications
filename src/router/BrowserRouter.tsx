import { createBrowserRouter } from 'react-router-dom';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import RecoveryPass from 'pages/RecoveryPass';
import { Pages } from 'core/variables/constants.ts';
import RequireAuth from 'shared/hooks/RequireAuth.tsx';
import RequireGuest from 'shared/hooks/RequireGuest.tsx';
import Board from 'pages/Board';
import CheckEmail from 'pages/RecoveryPass/CheckEmail';
import NewPass from 'pages/RecoveryPass/NewPass';
import PassChanged from 'pages/RecoveryPass/PassChanged';
import AuthRedirect from 'shared/hooks/authRedirect.tsx';
import { ErrorPage } from './ErrorPage.tsx';

export const router = createBrowserRouter([
  {
    path: Pages.Reg,
    element: (
      <RequireGuest>
        <Registration />
      </RequireGuest>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.Main,
    element: (
      <AuthRedirect>
        <Login />
      </AuthRedirect>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.Login,
    element: (
      <RequireGuest>
        <Login />
      </RequireGuest>
    ),

    errorElement: <ErrorPage />,
  },

  {
    path: Pages.RecoveryPass,
    element: (
      <RequireGuest>
        <RecoveryPass />
      </RequireGuest>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.CheckEmail,
    element: (
      <RequireGuest>
        <CheckEmail />
      </RequireGuest>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.NewPassword,
    element: (
      <RequireGuest>
        <NewPass />
      </RequireGuest>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.PasswordChanged,
    element: (
      <RequireGuest>
        <PassChanged />
      </RequireGuest>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: Pages.Board,
    element: (
      <RequireAuth>
        <Board />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
