import type { InfiniteData } from '@tanstack/react-query';

import type { FeedResponse } from '@/features/feed/types/feed';

export function selectFeedPosts(data?: InfiniteData<FeedResponse>) {
  return data?.pages.flatMap((page) => page.data.items) ?? [];
}
