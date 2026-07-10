import axios from 'axios';

import { clearSession, getAccessToken } from '@/lib/auth/auth-storage';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL) {
  throw new Error(
    'NEXT_PUBLIC_API_BASE_URL is missing. Please configure .env.local.'
  );
}

export const apiClient = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url ?? '';

    const isAuthRequest =
      url.includes('/auth/login') || url.includes('/auth/register');

    if (status === 401 && !isAuthRequest) {
      clearSession();

      if (typeof window !== 'undefined') {
        window.location.replace('/login');
      }
    }

    return Promise.reject(error);
  }
);
