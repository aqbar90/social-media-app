import { updateFollowState } from './updateFollowState';

import type { Profile } from '@/types/entities/profile';

export function updateProfileFollowState(
  profile: Profile | undefined,
  following: boolean
): Profile | undefined {
  if (!profile) {
    return profile;
  }

  return updateFollowState(profile, following);
}
