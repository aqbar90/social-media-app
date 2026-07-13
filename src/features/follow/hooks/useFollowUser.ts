import { useMutation } from '@tanstack/react-query';

import { followService } from '@/features/follow/services/follow.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useFollowUser() {
  return useMutation({
    mutationKey: QUERY_KEYS.mutation.follow.follow,
    mutationFn: followService.followUser,
  });
}
