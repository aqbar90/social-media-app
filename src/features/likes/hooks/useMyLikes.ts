import { useQuery } from '@tanstack/react-query';

import { likeService } from '@/features/likes/services/like.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { MyLikesRequest } from '@/features/likes/types/like';

export function useMyLikes(params: MyLikesRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.likes.my(params),
    queryFn: () => likeService.getMyLikes(params),
  });
}
