import { useQuery } from '@tanstack/react-query';

import { followService } from '@/features/follow/services/follow.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { MyFollowingRequest } from '@/features/follow/types/follow';

export function useMyFollowing(params: MyFollowingRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.follow.myFollowing(params),
    queryFn: () => followService.getMyFollowing(params),
  });
}
