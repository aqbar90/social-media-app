import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  LikePostResponse,
  LikesRequest,
  LikesResponse,
  MyLikesRequest,
  MyLikesResponse,
  UnlikePostResponse,
} from '@/features/likes/types/like';

async function likePost(postId: number): Promise<LikePostResponse> {
  const { data } = await apiClient.post<LikePostResponse>(
    API_ENDPOINTS.LIKES.LIKE(postId)
  );

  return data;
}

async function unlikePost(postId: number): Promise<UnlikePostResponse> {
  const { data } = await apiClient.delete<UnlikePostResponse>(
    API_ENDPOINTS.LIKES.UNLIKE(postId)
  );

  return data;
}

async function getLikes(
  postId: number,
  params: LikesRequest
): Promise<LikesResponse> {
  const { data } = await apiClient.get<LikesResponse>(
    API_ENDPOINTS.LIKES.LIST(postId),
    {
      params,
    }
  );

  return data;
}

async function getMyLikes(params: MyLikesRequest): Promise<MyLikesResponse> {
  const { data } = await apiClient.get<MyLikesResponse>(
    API_ENDPOINTS.LIKES.MY_LIKES,
    {
      params,
    }
  );

  return data;
}

export const likeService = {
  likePost,
  unlikePost,
  getLikes,
  getMyLikes,
};
