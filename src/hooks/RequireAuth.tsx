import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Pages, getPath } from "core/variables/constants";
import { useAuth } from "./authHooks";

interface IRequireAuthProps {
  children: ReactNode;
}

const RequireAuth: React.FC<IRequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkAuth() {
      if (!user) {
        setIsAuthenticated(false);
        return;
      }
      try {
        const response = await fetch("users/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    }

    checkAuth();
  }, [user]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <Navigate to={getPath(Pages.Auth)} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
