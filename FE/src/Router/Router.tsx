import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Register } from "../Pages/Auth/Register";
import { Login } from "../Pages/Auth/Login";
import { Notification } from "../Pages/Auth/Notification";
import { Admin } from "../Pages/Dashboards/Homes/Admin";
import { Staff } from "../Pages/Dashboards/Homes/Staff";
import { Student } from "../Pages/Dashboards/Homes/Student";
import { DLayout } from "../Pages/Dashboards/DLayout";
import Verification from "../Pages/Auth/Verification";
import Holder from "../Heropage/Holder";
import { ErrorBoundary } from "react-error-boundary";
import RouteError from "../Pages/error/RouteError";
import CodeError from "../Pages/error/CodeError";
import { FPassword } from "../Pages/Auth/FPassword";
import { ChangePassword } from "../Pages/Auth/ChangePassword";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <Verification />,
  },
  {
    path: "/notify",
    element: <Notification />,
  },
  {
    path: "/hero",
    element: <Holder />,
  },
  {
    path: "/forgot-password",
    element: <FPassword />,
  },
  {
    path: "/change-password/:userID",
    element: <ChangePassword />,
  },
  {
    path: "/dashboard",
    element: (
      <ErrorBoundary FallbackComponent={CodeError}>
        <DLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        path: "admin",
        element: <Admin />,
      },
      {
        index: true,
        path: "staff",
        element: <Staff />,
      },
      {
        index: true,
        path: "student",
        element: <Student />,
      },
    ],
  },

  {
    path: "*",
    element: <RouteError />,
  },
]);
