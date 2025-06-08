"use client";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    user: string | null;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(
    localStorage.getItem('user') || null
);

  const login = () => {
    setUser('user');
    localStorage.setItem('user', 'user');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: user !== null, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
