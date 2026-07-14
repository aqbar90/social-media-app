import type { InfiniteData } from '@tanstack/react-query';

import type { PostsResponse } from '@/features/posts/types/post';

export function selectPosts(data?: InfiniteData<PostsResponse>) {
  return data?.pages.flatMap((page) => page.data.posts) ?? [];
}
