import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AuthContextType, CurrentUser } from "../../types/currentUser";

// const useAuth = () => {
//   // const user = { loggedIn: true };
//   // return user && user.loggedIn;
// };
const ProtectedRoutes = () => {
  // const { currentUser } = useAuth() as AuthContextType;
  const currentUser = true;
  const location = useLocation();
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

const RoleProtectedRoute = ({
  allowedRoles,
}: {
  allowedRoles: Array<CurrentUser["role"]>;
}) => {
  const { currentUser } = useAuth() as AuthContextType;
  const location = useLocation();
  const user = currentUser as CurrentUser;
  return allowedRoles?.includes(user.role) ? (
    <Outlet />
  ) : currentUser ? (
    <Navigate to="unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

/* <RoleProtectedRoute allowedRoles={['role_1','role_2']}>routes go here</RoleProtectedRoute> */

// const RoleProtectedRoute = ({
//   allowedRoles,
// }: {
//   allowedRoles: Array<CurrentUser["role"]>;
// }) => {
//   const { currentUser } = useAuth() as AuthContextType;
//   const location = useLocation();
//   return currentUser?.role?.find((role) => allowedRoles?.includes(role)) ? (
//     <Outlet />
//   ) : currentUser ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

export default ProtectedRoutes;
