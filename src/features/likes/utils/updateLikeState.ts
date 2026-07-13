import type { Post } from '@/types/entities/post';

export function updateLikeState(post: Post, liked: boolean): Post {
  return {
    ...post,
    likedByMe: liked,
    likeCount: liked ? post.likeCount + 1 : Math.max(post.likeCount - 1, 0),
  };
}
