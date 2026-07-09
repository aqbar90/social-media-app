import { useQuery } from '@tanstack/react-query';

import { followService } from '@/features/follow/services/follow.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { FollowersRequest } from '@/features/follow/types/follow';

export function useFollowers(username: string, params: FollowersRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.follow.followers(username, params),
    queryFn: () => followService.getFollowers(username, params),
  });
}
