import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/authHooks';
import { getPath, Pages } from 'core/variables/constants';

const AuthRedirect: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(getPath(Pages.Dashboard));
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default AuthRedirect;
