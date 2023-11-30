import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage.tsx";
import Dashboard from "../pages/Applications";
import DashboardWrapper from "../components/DashboardWrapper";
import Main from "../pages/Main";
import Application from "../pages/Application";
import Add from "../pages/Applications/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardWrapper>
        <Main />
      </DashboardWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/applications",
    element: (
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>
    ),
    children: [
      {
        path: "/applications/:applicationId",
        element: <Application />,
      },
      {
        path: "/applications/add",
        element: <Add />,
      },
    ]
  },

]);
