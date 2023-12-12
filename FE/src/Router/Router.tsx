import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Register } from "../Pages/Auth/Register";
import { Login } from "../Pages/Auth/Login";
import { Verification } from "../Pages/Auth/Verification";
import { Notification } from "../Pages/Auth/Notification";
import { AdminLayout } from "../Pages/Dashboards/Admin/Layouts/AdminLayout";
import { AdminDashboard } from "../Pages/Dashboards/Admin/DashboardHome/AdminDashboard";
import { StaffLayout } from "../Pages/Dashboards/Staff/Layout/StaffLayout";
import { StaffDashboard } from "../Pages/Dashboards/Staff/DashboardHome/StaffDashboard";
import { StudentLayout } from "../Pages/Dashboards/Student/Layout/StudentLayout";
import { StudentDashboard } from "../Pages/Dashboards/Student/DashboardHome/StudentDashboard";

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
    path: "/admin/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/staff/dashboard",
    element: <StaffLayout />,
    children: [
      {
        index: true,
        element: <StaffDashboard />,
      },
    ],
  },
  {
    path: "/student/dashboard",
    element: <StudentLayout />,
    children: [
      {
        index: true,
        element: <StudentDashboard />,
      },
    ],
  },
]);
