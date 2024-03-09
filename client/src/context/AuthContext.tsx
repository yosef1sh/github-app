import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AuthUser {
  // Define your AuthUser type here based on your actual data structure
}

interface AuthContextProps {
  authUser: AuthUser | null;
  setAuthUser: (user: AuthUser | null) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const res = await fetch(`/api/auth/check`, { credentials: 'include' });
        const data = await res.json();
        setAuthUser(data.user);
      } catch (error) {
        alert('Error checking user logged in');
      }
    };
    checkUserLoggedIn();
  }, []);

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
