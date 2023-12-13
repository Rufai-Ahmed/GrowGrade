import React from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

export const PrivateRouter = () => {
  const eUsers = useSelector((state: any) => state.user);

  const decrypt: any = jwtDecode(eUsers);
  return <div>{decrypt.status === ""}</div>;
};
