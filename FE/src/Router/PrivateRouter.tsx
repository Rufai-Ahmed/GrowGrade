import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

export const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);

  return <div>{user ? <div>{children}</div> : <Navigate to="/login" />}</div>;
};
