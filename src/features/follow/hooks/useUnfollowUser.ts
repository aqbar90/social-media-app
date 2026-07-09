import { useMutation } from '@tanstack/react-query';

import { followService } from '@/features/follow/services/follow.service';

export function useUnfollowUser() {
  return useMutation({
    mutationFn: followService.unfollowUser,
  });
}
