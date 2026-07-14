import type { ApiResponse } from '@/types/api/api-response';
import type { Pagination, PaginationParams } from '@/types/api/pagination';
import type { Post } from '@/types/entities/post';

export interface UserPostsData {
  posts: Post[];
  pagination: Pagination;
}

export type UserPostsRequest = PaginationParams;

export type UserPostsResponse = ApiResponse<UserPostsData>;
