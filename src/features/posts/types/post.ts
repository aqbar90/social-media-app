import type { ApiResponse } from '@/types/api/api-response';
import type { Pagination, PaginationParams } from '@/types/api/pagination';
import type { Post } from '@/types/entities/post';

export type PostsRequest = PaginationParams;

export interface PostsData {
  posts: Post[];
  pagination: Pagination;
}

export type PostsResponse = ApiResponse<PostsData>;

export type CreatePostRequest = FormData;

export type CreatePostResponse = ApiResponse<Post>;

export interface DeletePostData {
  deleted: boolean;
}

export type DeletePostResponse = ApiResponse<DeletePostData>;
