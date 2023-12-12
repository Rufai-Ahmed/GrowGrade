import React from "react";
import { Sider } from "./Sider";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Sider />
      <Outlet />
    </div>
  );
};
