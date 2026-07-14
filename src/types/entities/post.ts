import type { PostAuthor } from '@/types/entities/post-author';

export interface Post {
  id: number;

  imageUrl: string;

  caption: string | null;

  createdAt: string;

  author: PostAuthor;

  likeCount: number;

  commentCount: number;

  likedByMe: boolean;
}
