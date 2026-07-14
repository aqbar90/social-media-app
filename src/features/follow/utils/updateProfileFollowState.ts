import { updateFollowState } from './updateFollowState';

import type { ApiResponse } from '@/types/api/api-response';
import type { Profile } from '@/types/entities/profile';

export function updateProfileFollowState(
  profile: ApiResponse<Profile> | undefined,
  following: boolean
): ApiResponse<Profile> | undefined {
  if (!profile) {
    return profile;
  }

  return {
    ...profile,
    data: updateFollowState(profile.data, following),
  };
}
