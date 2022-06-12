import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../../pages/auth/Login";
const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
