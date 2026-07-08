import { apiClient } from '@/lib/api/api-client';
import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from '@/features/auth/types/auth';

async function login(payload: LoginRequest): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>(
    API_ENDPOINTS.AUTH.LOGIN,
    payload
  );

  return data;
}

async function register(payload: RegisterRequest): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>(
    API_ENDPOINTS.AUTH.REGISTER,
    payload
  );

  return data;
}

export const authService = {
  login,
  register,
};
