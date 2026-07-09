import { useMutation } from '@tanstack/react-query';

import { followService } from '@/features/follow/services/follow.service';

export function useFollowUser() {
  return useMutation({
    mutationFn: followService.followUser,
  });
}
