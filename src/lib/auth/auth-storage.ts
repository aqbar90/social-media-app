import type { User } from '@/types/entities/user';

import { AUTH_KEYS } from '@/lib/auth/auth-keys';

function isBrowser() {
  return typeof window !== 'undefined';
}

export function setAccessToken(token: string) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(AUTH_KEYS.ACCESS_TOKEN, token);
}

export function getAccessToken() {
  if (!isBrowser()) {
    return null;
  }

  return window.localStorage.getItem(AUTH_KEYS.ACCESS_TOKEN);
}

export function removeAccessToken() {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(AUTH_KEYS.ACCESS_TOKEN);
}

export function setCurrentUser(user: User) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(AUTH_KEYS.CURRENT_USER, JSON.stringify(user));
}

export function getCurrentUser(): User | null {
  if (!isBrowser()) {
    return null;
  }

  const user = window.localStorage.getItem(AUTH_KEYS.CURRENT_USER);

  return user ? (JSON.parse(user) as User) : null;
}

export function clearSession() {
  if (!isBrowser()) {
    return;
  }

  removeAccessToken();
  window.localStorage.removeItem(AUTH_KEYS.CURRENT_USER);
}
