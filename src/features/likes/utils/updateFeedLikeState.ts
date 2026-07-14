import type { InfiniteData } from '@tanstack/react-query';

import { updateLikeState } from './updateLikeState';

import type { FeedResponse } from '@/features/feed/types/feed';

export function updateFeedLikeState(
  data: InfiniteData<FeedResponse> | undefined,
  postId: number,
  liked: boolean
): InfiniteData<FeedResponse> | undefined {
  if (!data) {
    return data;
  }

  return {
    ...data,
    pages: data.pages.map((page) => ({
      ...page,
      data: {
        ...page.data,
        items: page.data.items.map((post) =>
          post.id === postId ? updateLikeState(post, liked) : post
        ),
      },
    })),
  };
}
