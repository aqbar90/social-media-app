import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  CommentsRequest,
  CommentsResponse,
  CreateCommentRequest,
  CreateCommentResponse,
  DeleteCommentResponse,
} from '@/features/comments/types/comment';

async function getComments(
  postId: number,
  params: CommentsRequest
): Promise<CommentsResponse> {
  const { data } = await apiClient.get<CommentsResponse>(
    API_ENDPOINTS.COMMENTS.LIST(postId),
    {
      params,
    }
  );

  return data;
}

async function createComment(
  postId: number,
  payload: CreateCommentRequest
): Promise<CreateCommentResponse> {
  const { data } = await apiClient.post<CreateCommentResponse>(
    API_ENDPOINTS.COMMENTS.CREATE(postId),
    payload
  );

  return data;
}

async function deleteComment(
  commentId: number
): Promise<DeleteCommentResponse> {
  const { data } = await apiClient.delete<DeleteCommentResponse>(
    API_ENDPOINTS.COMMENTS.DELETE(commentId)
  );

  return data;
}

export const commentService = {
  getComments,
  createComment,
  deleteComment,
};
