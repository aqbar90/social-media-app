import type { ApiResponse } from '@/types/api/api-response';
import type { Pagination, PaginationParams } from '@/types/api/pagination';
import type { Post } from '@/types/entities/post';

export interface SaveStatus {
  saved: boolean;
}

export type SavePostResponse = ApiResponse<SaveStatus>;

export type UnsavePostResponse = ApiResponse<SaveStatus>;

export interface SavedPostsData {
  posts: Post[];
  pagination: Pagination;
}

export type SavedPostsRequest = PaginationParams;

export type SavedPostsResponse = ApiResponse<SavedPostsData>;
