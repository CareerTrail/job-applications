import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage.tsx";
import Dashboard from "pages/Applications";
import DashboardWrapper from "components/DashboardWrapper";
import Main from "pages/Main";
import Login from "pages/Login";
import Registration from "pages/Registration";
import Application from "pages/Application";
import Add from "pages/Applications/components";
import { Pages } from "core/variables/constants.ts";

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
    path: Pages.applications,
    element: (
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>
    ),
    children: [
      {
        path: `${Pages.applications}/:applicationId`,
        element: <Application />,
      },
      {
        path: `${Pages.applications}/:add`,
        element: <Add />,
      },
    ]
  },

]);
