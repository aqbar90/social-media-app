import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  CreatePostRequest,
  CreatePostResponse,
  DeletePostResponse,
  PostsRequest,
  PostsResponse,
} from '@/features/posts/types/post';

async function getPosts(params: PostsRequest): Promise<PostsResponse> {
  const { data } = await apiClient.get<PostsResponse>(
    API_ENDPOINTS.POSTS.LIST,
    {
      params,
    }
  );

  return data;
}

async function createPost(
  payload: CreatePostRequest
): Promise<CreatePostResponse> {
  const { data } = await apiClient.post<CreatePostResponse>(
    API_ENDPOINTS.POSTS.CREATE,
    payload
  );

  return data;
}

async function deletePost(id: number): Promise<DeletePostResponse> {
  const { data } = await apiClient.delete<DeletePostResponse>(
    API_ENDPOINTS.POSTS.DELETE(id)
  );

  return data;
}

export const postService = {
  getPosts,
  createPost,
  deletePost,
};
