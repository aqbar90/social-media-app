import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  FollowersRequest,
  FollowersResponse,
  FollowingRequest,
  FollowingResponse,
  FollowResponse,
  MyFollowersRequest,
  MyFollowersResponse,
  MyFollowingRequest,
  MyFollowingResponse,
  UnfollowResponse,
} from '@/features/follow/types/follow';

async function followUser(username: string): Promise<FollowResponse> {
  const { data } = await apiClient.post<FollowResponse>(
    API_ENDPOINTS.FOLLOW.FOLLOW(username)
  );

  return data;
}

async function unfollowUser(username: string): Promise<UnfollowResponse> {
  const { data } = await apiClient.delete<UnfollowResponse>(
    API_ENDPOINTS.FOLLOW.UNFOLLOW(username)
  );

  return data;
}

async function getFollowers(
  username: string,
  params: FollowersRequest
): Promise<FollowersResponse> {
  const { data } = await apiClient.get<FollowersResponse>(
    API_ENDPOINTS.FOLLOW.FOLLOWERS(username),
    {
      params,
    }
  );

  return data;
}

async function getFollowing(
  username: string,
  params: FollowingRequest
): Promise<FollowingResponse> {
  const { data } = await apiClient.get<FollowingResponse>(
    API_ENDPOINTS.FOLLOW.FOLLOWING(username),
    {
      params,
    }
  );

  return data;
}

async function getMyFollowers(
  params: MyFollowersRequest
): Promise<MyFollowersResponse> {
  const { data } = await apiClient.get<MyFollowersResponse>(
    API_ENDPOINTS.FOLLOW.MY_FOLLOWERS,
    {
      params,
    }
  );

  return data;
}

async function getMyFollowing(
  params: MyFollowingRequest
): Promise<MyFollowingResponse> {
  const { data } = await apiClient.get<MyFollowingResponse>(
    API_ENDPOINTS.FOLLOW.MY_FOLLOWING,
    {
      params,
    }
  );

  return data;
}

export const followService = {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
  getMyFollowers,
  getMyFollowing,
};
