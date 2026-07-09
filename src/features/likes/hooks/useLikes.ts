import { useQuery } from '@tanstack/react-query';

import { likeService } from '@/features/likes/services/like.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { LikesRequest } from '@/features/likes/types/like';

export function useLikes(postId: number, params: LikesRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.likes.list(postId, params),
    queryFn: () => likeService.getLikes(postId, params),
  });
}
