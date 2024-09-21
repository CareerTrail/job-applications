import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Pages, getPath } from 'core/variables/constants';
import { useLazyGetUserQuery } from 'services/userApi';
import { useAuth } from './authHooks';

interface IRequireAuthProps {
  children: ReactNode;
}

const RequireAuth: React.FC<IRequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [getUser, { isLoading, isError }] = useLazyGetUserQuery();

  useEffect(() => {
    async function checkAuth() {
      if (!user) {
        setIsAuthenticated(false);
        return;
      }
      try {
        await getUser().unwrap();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    }

    checkAuth();
  }, [user, getUser]);

  if (isLoading || isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || isError) {
    return (
      <Navigate to={getPath(Pages.Auth)} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
