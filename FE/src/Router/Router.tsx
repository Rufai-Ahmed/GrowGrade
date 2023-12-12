import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Register } from "../Pages/Auth/Register";
import { Login } from "../Pages/Auth/Login";
import { Verification } from "../Pages/Auth/Verification";
import { Notification } from "../Pages/Auth/Notification";
import { Admin } from "../Pages/Dashboards/Homes/Admin";
import { Staff } from "../Pages/Dashboards/Homes/Staff";
import { Student } from "../Pages/Dashboards/Homes/Student";

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
    path: "/verify/:schoolID",
    element: <Verification />,
  },
  {
    path: "/notify",
    element: <Notification />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
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
]);
