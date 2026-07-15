import { useInfiniteQuery } from '@tanstack/react-query';

import { likeService } from '@/features/likes/services/like.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { LikesRequest } from '@/features/likes/types/like';

export function usePostLikes(postId: number, params: LikesRequest) {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.likes.list(postId, params),

    initialPageParam: params.page ?? 1,

    queryFn: ({ pageParam }) =>
      likeService.getLikes(postId, {
        ...params,
        page: pageParam,
      }),

    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;

      return page < totalPages ? page + 1 : undefined;
    },
  });
}
