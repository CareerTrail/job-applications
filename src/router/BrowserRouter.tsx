import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage.tsx";
import Dashboard from "pages/Dashboard";
import DashboardWrapper from "components/DashboardWrapper";
import Main from "pages/Main";
import Login from "pages/Login";
import Registration from "pages/Registration";
import Profile from "pages/Profile";
import Application from "pages/Application";
import Applications from "pages/Applications";
import AddApplication from "pages/Applications/components";
import RecoveryPass from "pages/RecoveryPass";
import Boards from "pages/Boards";
import { Pages, getPath } from "core/variables/constants.ts";
import RequireAuth from "hooks/RequireAuth.tsx";
import RequireGuest from "hooks/RequireGuest.tsx";
import Kanban from "pages/DND/Kanban.tsx";

export const router = createBrowserRouter([
  {
    path: getPath(Pages.Main),
    element: (
      <DashboardWrapper>
        <Main />
      </DashboardWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: getPath(Pages.Reg),
    element: (
      <RequireGuest>
        <DashboardWrapper>
          <Registration />
        </DashboardWrapper>
      </RequireGuest>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: getPath(Pages.Auth),
    element: (
      <RequireGuest>
        <DashboardWrapper>
          <Login />
        </DashboardWrapper>
      </RequireGuest>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: getPath(Pages.Profile),
    element: (
      <RequireAuth>
        <DashboardWrapper>
          <Profile />
        </DashboardWrapper>
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: getPath(Pages.RecoveryPass),
    element: (
      <RequireGuest>
        <DashboardWrapper>
          <RecoveryPass />
        </DashboardWrapper>
      </RequireGuest>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: getPath(Pages.Board),
    element: (
      <RequireAuth>
        <DashboardWrapper>
          <Boards />
        </DashboardWrapper>
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: getPath(Pages.Kanban),
    element: <Kanban />,
    errorElement: <ErrorPage />,
  },
  {
    path: getPath(Pages.Dashboard),
    element: (
      <RequireAuth>
        <DashboardWrapper>
          <Dashboard />
        </DashboardWrapper>
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: getPath(Pages.Applications),
    element: (
      <RequireAuth>
        <DashboardWrapper>
          <Applications />
        </DashboardWrapper>
      </RequireAuth>
    ),
    children: [
      {
        path: `${getPath(Pages.Applications)}/:applicationId`,
        element: <Application />,
      },
      {
        path: `${getPath(Pages.Applications)}/add`,
        element: <AddApplication />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
