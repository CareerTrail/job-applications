import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Pages } from 'core/variables/constants';
import { useAuth } from './authHooks';

interface RequireGuestProps {
  children: ReactNode;
}

const RequireGuest: React.FC<RequireGuestProps> = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={Pages.Main} replace />;
  }

  return <>{children}</>;
};

export default RequireGuest;
