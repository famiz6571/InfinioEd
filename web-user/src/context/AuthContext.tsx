import { createContext, useContext, useEffect, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// Dummy credentials
const DUMMY_USER = {
  email: "john@example.com",
  password: "123456",
  firstName: "John",
  lastName: "Doe",
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("fake_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email: string, password: string) => {
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      const loggedUser = {
        firstName: DUMMY_USER.firstName,
        lastName: DUMMY_USER.lastName,
        email: DUMMY_USER.email,
      };
      setUser(loggedUser);
      localStorage.setItem("fake_user", JSON.stringify(loggedUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fake_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
