import { useQuery } from '@tanstack/react-query';

import { followService } from '@/features/follow/services/follow.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { MyFollowersRequest } from '@/features/follow/types/follow';

export function useMyFollowers(params: MyFollowersRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.follow.myFollowers(params),
    queryFn: () => followService.getMyFollowers(params),
  });
}
