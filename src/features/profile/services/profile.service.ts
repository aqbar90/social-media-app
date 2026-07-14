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
  const formData = new FormData();

  if (payload.name !== undefined) {
    formData.append('name', payload.name);
  }

  if (payload.username !== undefined) {
    formData.append('username', payload.username);
  }

  if (payload.phone !== undefined) {
    formData.append('phone', payload.phone);
  }

  if (payload.bio !== undefined) {
    formData.append('bio', payload.bio);
  }

  if (payload.avatar !== undefined) {
    formData.append('avatar', payload.avatar);
  }

  if (payload.avatarUrl !== undefined) {
    formData.append('avatarUrl', payload.avatarUrl);
  }

  const { data } = await apiClient.patch<UpdateProfileResponse>(
    API_ENDPOINTS.PROFILE.UPDATE,
    formData,
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
