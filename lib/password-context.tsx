'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type PasswordContextType = {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
  logout: () => void;
};

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

// The correct password for accessing the site
const CORRECT_PASSWORD = 'nacho2025'; // You can change this to any password you want

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('epk-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const authenticate = (password: string): boolean => {
    const isCorrect = password === CORRECT_PASSWORD;
    if (isCorrect) {
      setIsAuthenticated(true);
      sessionStorage.setItem('epk-auth', 'true');
    }
    return isCorrect;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('epk-auth');
  };

  return (
    <PasswordContext.Provider value={{ isAuthenticated, authenticate, logout }}>
      {children}
    </PasswordContext.Provider>
  );
}

export const usePassword = (): PasswordContextType => {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }
  return context;
}; 