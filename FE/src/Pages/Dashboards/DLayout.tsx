import React from "react";
import { Sider } from "./Sider";
import { Outlet } from "react-router-dom";

export const DLayout = () => {
  return (
    <div>
      <div className="flex  ">
        <Sider />
        <Outlet />
      </div>
    </div>
  );
};
