import type { ApiResponse } from '@/types/api/api-response';

export interface SearchUser {
  id: number;
  username: string;
  name: string;
  avatarUrl: string | null;
  isFollowedByMe: boolean;
}

export interface SearchPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface SearchUsersData {
  users: SearchUser[];
  pagination: SearchPagination;
}

export type SearchUsersResponse = ApiResponse<SearchUsersData>;

export interface SearchUsersParams {
  q: string;
  page?: number;
  limit?: number;
}
