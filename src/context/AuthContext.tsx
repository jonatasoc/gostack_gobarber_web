import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Jonatas', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
