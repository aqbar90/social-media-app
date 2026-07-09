import type { ApiResponse } from '@/types/api/api-response';
import type { Pagination, PaginationParams } from '@/types/api/pagination';
import type { PostAuthor } from '@/types/entities/post-author';
import type { Post } from '@/types/entities/post';

export interface LikeStatus {
  liked: boolean;
  likeCount: number;
}

export type LikePostResponse = ApiResponse<LikeStatus>;

export type UnlikePostResponse = ApiResponse<LikeStatus>;

export interface LikesData {
  users: PostAuthor[];
  pagination: Pagination;
}

export type LikesRequest = PaginationParams;

export type LikesResponse = ApiResponse<LikesData>;

export interface MyLikesData {
  posts: Post[];
  pagination: Pagination;
}

export type MyLikesRequest = PaginationParams;

export type MyLikesResponse = ApiResponse<MyLikesData>;
