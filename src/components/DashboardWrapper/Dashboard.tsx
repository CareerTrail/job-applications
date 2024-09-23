import { ReactNode } from 'react';
import AppBarLocal from 'components/AppBarLocal';
import AppBarComponent from '../AppBarComponent';

export const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBarComponent />
      <AppBarLocal />
      {children}
    </>
  );
};
