import { useMutation } from '@tanstack/react-query';

import { followService } from '@/features/follow/services/follow.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useUnfollowUser() {
  return useMutation({
    mutationKey: QUERY_KEYS.mutation.follow.unfollow,
    mutationFn: followService.unfollowUser,
  });
}
