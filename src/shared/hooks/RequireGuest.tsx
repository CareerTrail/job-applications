import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authHooks';
import { Pages, getPath } from 'core/variables/constants';

interface RequireGuestProps {
  children: ReactNode;
}

const RequireGuest: React.FC<RequireGuestProps> = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={getPath(Pages.Main)} replace />;
  }

  return <>{children}</>;
};

export default RequireGuest;
