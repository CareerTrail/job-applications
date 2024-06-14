import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface User {
  accessToken: string;
}

export interface AuthContextType {
  user: User | null;
  login: (accessToken: string) => void;
  logout: () => void;
}

enum LocalStorageKeys {
  AccessToken = "accessToken",
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem(LocalStorageKeys.AccessToken);
    if (accessToken) {
      setUser({ accessToken });
    }
  }, []);

  const login = (accessToken: string) => {
    localStorage.setItem(LocalStorageKeys.AccessToken, accessToken);
    setUser({ accessToken });
  };

  const logout = () => {
    localStorage.removeItem(LocalStorageKeys.AccessToken);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
