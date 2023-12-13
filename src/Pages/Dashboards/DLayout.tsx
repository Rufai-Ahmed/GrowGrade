import React from "react";
import { Sider } from "./Sider";
import { Outlet } from "react-router-dom";

export const DLayout = () => {
  return (
    <div>
      <div className="flex transition-all duration-300 ">
        <Sider />
        <div className="flex justify-end w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
