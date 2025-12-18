import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { getAllPaths } from "../../utils/getAllPaths";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  if (!user?.role?.menus) {
    return <Navigate to="/not-authorized" replace />;
  }

  // menus from DB → ['/users', '/roles']
  const allowedParents: string[] = getAllPaths(user.role.menus);

  const currentPath = location.pathname;

  const isAllowed = allowedParents.some(
    (basePath) =>
      currentPath === basePath || currentPath.startsWith(basePath + "/")
  );

  if (!isAllowed) {
    return <Navigate to="/not-authorized" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
