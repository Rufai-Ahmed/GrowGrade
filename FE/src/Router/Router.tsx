import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Register } from "../Pages/Auth/Register";
import { Login } from "../Pages/Auth/Login";
import { Verification } from "../Pages/Auth/Verification";

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
]);
