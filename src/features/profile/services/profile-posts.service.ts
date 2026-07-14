import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  UserPostsRequest,
  UserPostsResponse,
} from '@/features/profile/types/profile-posts';

async function getUserPosts(
  username: string,
  params: UserPostsRequest
): Promise<UserPostsResponse> {
  const { data } = await apiClient.get<UserPostsResponse>(
    API_ENDPOINTS.USERS.POSTS(username),
    {
      params,
    }
  );

  return data;
}

export const profilePostsService = {
  getUserPosts,
};
