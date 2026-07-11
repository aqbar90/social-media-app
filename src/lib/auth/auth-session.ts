import type { User } from '@/types/entities/user';

import {
  clearSession as clearStorageSession,
  getAccessToken,
  getCurrentUser,
  setAccessToken,
  setCurrentUser,
} from './auth-storage';

export function isAuthenticated() {
  return Boolean(getAccessToken());
}

export function getSessionUser(): User | null {
  return getCurrentUser();
}

export function createSession(token: string, user: User) {
  setAccessToken(token);
  setCurrentUser(user);
}

export function destroySession() {
  clearStorageSession();
}
