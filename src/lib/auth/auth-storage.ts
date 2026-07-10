import type { User } from '@/types/entities/user';

import { AUTH_KEYS } from '@/lib/auth/auth-keys';

export function setAccessToken(token: string) {
  localStorage.setItem(AUTH_KEYS.ACCESS_TOKEN, token);
}

export function getAccessToken() {
  return localStorage.getItem(AUTH_KEYS.ACCESS_TOKEN);
}

export function removeAccessToken() {
  localStorage.removeItem(AUTH_KEYS.ACCESS_TOKEN);
}

export function setCurrentUser(user: User) {
  localStorage.setItem(AUTH_KEYS.CURRENT_USER, JSON.stringify(user));
}

export function getCurrentUser(): User | null {
  const user = localStorage.getItem(AUTH_KEYS.CURRENT_USER);

  return user ? (JSON.parse(user) as User) : null;
}

export function clearSession() {
  removeAccessToken();
  localStorage.removeItem(AUTH_KEYS.CURRENT_USER);
}
