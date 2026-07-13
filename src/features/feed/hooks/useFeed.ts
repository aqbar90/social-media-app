import { useInfiniteQuery } from '@tanstack/react-query';

import { feedService } from '@/features/feed/services/feed.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { FeedRequest } from '@/features/feed/types/feed';

export function useFeed(params: FeedRequest) {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.feed.list(params),
    initialPageParam: params.page ?? 1,
    queryFn: ({ pageParam }) =>
      feedService.getFeed({
        ...params,
        page: pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;

      return page < totalPages ? page + 1 : undefined;
    },
  });
}
