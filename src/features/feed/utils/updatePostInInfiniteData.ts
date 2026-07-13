import type { InfiniteData } from '@tanstack/react-query';

import type { Post } from '@/types/entities/post';

interface InfiniteItems<T> {
  data: T;
}

interface HasItems {
  items: Post[];
}

export function updatePostInInfiniteData<T extends HasItems>(
  data: InfiniteData<InfiniteItems<T>> | undefined,
  postId: number,
  updater: (post: Post) => Post
): InfiniteData<InfiniteItems<T>> | undefined {
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
          post.id === postId ? updater(post) : post
        ),
      },
    })),
  };
}
