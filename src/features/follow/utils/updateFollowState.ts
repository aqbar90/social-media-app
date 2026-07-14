import type { Profile } from '@/types/entities/profile';

export function updateFollowState(
  profile: Profile,
  following: boolean
): Profile {
  return {
    ...profile,
    isFollowing: following,

    stats: {
      ...profile.stats,
      followers: profile.stats.followers + (following ? 1 : -1),
    },
  };
}
