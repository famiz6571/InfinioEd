import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import httpService from "../services/httpService";

interface User {
  userId: string;
  email: string;
  name: string;
}

interface AuthContextType {
  isAuthenticated: boolean | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// ✅ Define response type
interface AuthResponse {
  user: User;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await httpService.get<AuthResponse>("/auth/check-session");
        setAuthenticated(true);
      } catch {
        setAuthenticated(false);
        setUser(null);
        localStorage.removeItem("user");
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await httpService.post<AuthResponse>("/auth/login", {
      email,
      password,
    });
    setAuthenticated(true);
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  };

  const logout = () => {
    httpService.post("/auth/logout"); // clear cookie server-side
    setAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
