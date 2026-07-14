import type { InfiniteData } from '@tanstack/react-query';

import type { FeedResponse } from '@/features/feed/types/feed';

export function updateFeedCommentState(
  data: InfiniteData<FeedResponse> | undefined,
  postId: number,
  increment: boolean
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
          post.id === postId
            ? {
                ...post,
                commentCount: increment
                  ? post.commentCount + 1
                  : Math.max(post.commentCount - 1, 0),
              }
            : post
        ),
      },
    })),
  };
}
