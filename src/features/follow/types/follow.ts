import type { ApiResponse } from '@/types/api/api-response';
import type { Pagination, PaginationParams } from '@/types/api/pagination';
import type { PostAuthor } from '@/types/entities/post-author';

export interface FollowStatus {
  following: boolean;
}

export type FollowResponse = ApiResponse<FollowStatus>;

export type UnfollowResponse = ApiResponse<FollowStatus>;

export interface FollowUsersData {
  users: PostAuthor[];
  pagination: Pagination;
}

export type FollowersRequest = PaginationParams;

export type FollowingRequest = PaginationParams;

export type MyFollowersRequest = PaginationParams;

export type MyFollowingRequest = PaginationParams;

export type FollowersResponse = ApiResponse<FollowUsersData>;

export type FollowingResponse = ApiResponse<FollowUsersData>;

export type MyFollowersResponse = ApiResponse<FollowUsersData>;

export type MyFollowingResponse = ApiResponse<FollowUsersData>;
