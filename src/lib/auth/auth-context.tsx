'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import type { User } from '@/types/entities/user';

import {
  createSession,
  destroySession,
  getSessionUser,
  isAuthenticated,
} from './auth-session';
import { AuthPayload } from '@/features/auth/types/auth';

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  currentUser: User | null;
}

interface AuthContextValue extends AuthState {
  login: (payload: AuthPayload) => void;
  logout: () => void;
  refresh: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function getInitialAuthState(): AuthState {
  if (typeof window === 'undefined') {
    return {
      isInitialized: false,
      isAuthenticated: false,
      currentUser: null,
    };
  }

  const authenticated = isAuthenticated();

  return {
    isInitialized: true,
    isAuthenticated: authenticated,
    currentUser: authenticated ? getSessionUser() : null,
  };
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useState<AuthState>(getInitialAuthState);

  const login = useCallback((payload: AuthPayload) => {
    createSession(payload.token, payload.user);

    setAuthState({
      isInitialized: true,
      isAuthenticated: true,
      currentUser: payload.user,
    });
  }, []);

  const logout = useCallback(() => {
    destroySession();

    setAuthState({
      isInitialized: true,
      isAuthenticated: false,
      currentUser: null,
    });
  }, []);

  const refresh = useCallback(() => {
    const authenticated = isAuthenticated();

    setAuthState({
      isInitialized: true,
      isAuthenticated: authenticated,
      currentUser: authenticated ? getSessionUser() : null,
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      ...authState,
      login,
      logout,
      refresh,
    }),
    [authState, login, logout, refresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
