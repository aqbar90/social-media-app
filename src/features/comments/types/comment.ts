import type { ApiResponse } from '@/types/api/api-response';
import type { Pagination, PaginationParams } from '@/types/api/pagination';
import type { Comment } from '@/types/entities/comment';

export interface CommentsData {
  comments: Comment[];
  pagination: Pagination;
}

export type CommentsRequest = PaginationParams;

export type CommentsResponse = ApiResponse<CommentsData>;

export interface CreateCommentRequest {
  text: string;
}

export type CreateCommentResponse = ApiResponse<Comment>;

export interface DeleteCommentData {
  deleted: boolean;
}

export type DeleteCommentResponse = ApiResponse<DeleteCommentData>;
