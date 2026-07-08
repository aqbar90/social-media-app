import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type { FeedRequest, FeedResponse } from '@/features/feed/types/feed';

async function getFeed(params: FeedRequest): Promise<FeedResponse> {
  const { data } = await apiClient.get<FeedResponse>(API_ENDPOINTS.FEED.LIST, {
    params,
  });

  return data;
}

export const feedService = {
  getFeed,
};
