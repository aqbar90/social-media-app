import type { InfiniteData } from '@tanstack/react-query';

import { updateLikeState } from './updateLikeState';

import type { PostsResponse } from '@/features/posts/types/post';

export function updatePostsLikeState(
  data: InfiniteData<PostsResponse> | undefined,
  postId: number,
  liked: boolean
): InfiniteData<PostsResponse> | undefined {
  if (!data) {
    return data;
  }

  return {
    ...data,
    pages: data.pages.map((page) => ({
      ...page,
      data: {
        ...page.data,
        posts: page.data.posts.map((post) =>
          post.id === postId ? updateLikeState(post, liked) : post
        ),
      },
    })),
  };
}
