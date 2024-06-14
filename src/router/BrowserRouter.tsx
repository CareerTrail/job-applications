import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage.tsx";
import Dashboard from "pages/Applications";
import DashboardWrapper from "components/DashboardWrapper";
import Main from "pages/Main";
import Login from "pages/Login";
import Registration from "pages/Registration";
import Application from "pages/Application";
import Add from "pages/Applications/components";
import RecoveryPass from "pages/RecoveryPass";
import { Pages } from "core/variables/constants.ts";
import RequireAuth from "hooks/RequireAuth.tsx";

export const router = createBrowserRouter([
  {
    path: Pages.main,
    element: (
      <DashboardWrapper>
        <Main />
      </DashboardWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.reg,
    element: (
      <DashboardWrapper>
        <Registration />
      </DashboardWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.auth,
    element: (
      <DashboardWrapper>
        <Login />
      </DashboardWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.recoveryPass,
    element: (
      <DashboardWrapper>
        <RecoveryPass />
      </DashboardWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Pages.applications,
    element: (
      <RequireAuth>
        <DashboardWrapper>
          <Dashboard />
        </DashboardWrapper>
      </RequireAuth>
    ),
    children: [
      {
        path: `${Pages.applications}/:applicationId`,
        element: <Application />,
      },
      {
        path: `${Pages.applications}/add`,
        element: <Add />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
