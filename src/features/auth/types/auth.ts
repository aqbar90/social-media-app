import type { ApiResponse } from '@/types/api/api-response';
import type { User } from '@/types/entities/user';

export interface AuthPayload {
  token: string;
  user: User;
}

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
};

export type AuthResponse = ApiResponse<AuthPayload>;
