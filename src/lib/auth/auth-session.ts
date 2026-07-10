import { getAccessToken } from '@/lib/auth/auth-storage';

export function isAuthenticated() {
  return Boolean(getAccessToken());
}
