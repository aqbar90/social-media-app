import { useQuery } from '@tanstack/react-query';

import { feedService } from '@/features/feed/services/feed.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { FeedRequest } from '@/features/feed/types/feed';

export function useFeed(params: FeedRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.feed.list(params),
    queryFn: () => feedService.getFeed(params),
  });
}
