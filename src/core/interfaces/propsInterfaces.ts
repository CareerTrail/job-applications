import { ReactNode } from "react";

export interface IRequireAuthProps {
  children: ReactNode;
}

export interface IRegistrationProps {
  onSuccess?: () => void; //
  onError?: (error: unknown) => void;
}
