import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  SavedPostsRequest,
  SavedPostsResponse,
  SavePostResponse,
  UnsavePostResponse,
} from '@/features/save/types/save';

async function savePost(postId: number): Promise<SavePostResponse> {
  const { data } = await apiClient.post<SavePostResponse>(
    API_ENDPOINTS.SAVE.SAVE(postId)
  );

  return data;
}

async function unsavePost(postId: number): Promise<UnsavePostResponse> {
  const { data } = await apiClient.delete<UnsavePostResponse>(
    API_ENDPOINTS.SAVE.UNSAVE(postId)
  );

  return data;
}

async function getSavedPosts(
  params: SavedPostsRequest
): Promise<SavedPostsResponse> {
  const { data } = await apiClient.get<SavedPostsResponse>(
    API_ENDPOINTS.SAVE.MY_SAVED,
    {
      params,
    }
  );

  return data;
}

export const saveService = {
  savePost,
  unsavePost,
  getSavedPosts,
};
