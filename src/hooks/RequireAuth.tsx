import { useEffect, useState, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Pages } from "core/variables/constants";
import { useAuth } from "./authHooks";

function RequireAuth({ children }: { children: ReactNode }) {
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
    return <Navigate to={Pages.auth} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
