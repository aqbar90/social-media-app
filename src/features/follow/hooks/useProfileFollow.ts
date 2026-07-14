import { useCallback } from 'react';

import { useFollowUser } from './useFollowUser';
import { useUnfollowUser } from './useUnfollowUser';

interface UseProfileFollowProps {
  username: string;
  isFollowing: boolean;
}

export function useProfileFollow({
  username,
  isFollowing,
}: UseProfileFollowProps) {
  const followMutation = useFollowUser();
  const unfollowMutation = useUnfollowUser();

  const toggleFollow = useCallback(() => {
    if (isFollowing) {
      unfollowMutation.mutate(username);
      return;
    }

    followMutation.mutate(username);
  }, [followMutation, unfollowMutation, username, isFollowing]);

  return {
    toggleFollow,

    isPending: followMutation.isPending || unfollowMutation.isPending,
  };
}
