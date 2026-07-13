import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  CreatePostRequest,
  CreatePostResponse,
  DeletePostResponse,
  PostResponse,
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

async function getPostById(id: number): Promise<PostResponse> {
  const { data } = await apiClient.get<PostResponse>(
    API_ENDPOINTS.POSTS.DETAIL(id)
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
  getPostById,
  createPost,
  deletePost,
};
