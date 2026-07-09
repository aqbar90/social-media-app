import { useQuery } from '@tanstack/react-query';

import { followService } from '@/features/follow/services/follow.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { FollowingRequest } from '@/features/follow/types/follow';

export function useFollowing(username: string, params: FollowingRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.follow.following(username, params),
    queryFn: () => followService.getFollowing(username, params),
  });
}
