import type { PostAuthor } from '@/types/entities/post-author';

export interface Comment {
  id: number;
  text: string;
  createdAt: string;

  author: PostAuthor;

  isMine: boolean;
}
