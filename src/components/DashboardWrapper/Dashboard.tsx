import { ReactNode } from "react";
import AppBarComponent from "../AppBarComponent";
import AppBarLocal from "components/AppBarLocal";

export const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBarComponent />
      <AppBarLocal />
      {children}
    </>
  );
};
