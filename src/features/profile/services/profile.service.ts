import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type {
  CurrentUserResponse,
  ProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from '@/features/profile/types/profile';

async function getCurrentUser(): Promise<CurrentUserResponse> {
  const { data } = await apiClient.get<CurrentUserResponse>(
    API_ENDPOINTS.PROFILE.ME
  );

  return data;
}

async function getProfile(username: string): Promise<ProfileResponse> {
  const { data } = await apiClient.get<ProfileResponse>(
    API_ENDPOINTS.USERS.DETAIL(username)
  );

  return data;
}

async function updateProfile(
  payload: UpdateProfileRequest
): Promise<UpdateProfileResponse> {
  const { data } = await apiClient.patch<UpdateProfileResponse>(
    API_ENDPOINTS.PROFILE.UPDATE,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return data;
}

export const profileService = {
  getCurrentUser,
  getProfile,
  updateProfile,
};
