import type { Comment } from '@/types/entities/comment';

interface CommentDto {
  id: number;
  text: string;
  createdAt: string;
  author: {
    id: number;
    username: string;
    name: string;
    avatarUrl: string | null;
  };
}

export function mapComment(
  dto: CommentDto,
  currentUserId: number | null
): Comment {
  return {
    id: dto.id,
    text: dto.text,
    createdAt: dto.createdAt,
    author: dto.author,
    isMine: currentUserId !== null && dto.author.id === currentUserId,
  };
}

export function mapComments(
  comments: CommentDto[],
  currentUserId: number | null
): Comment[] {
  return comments.map((comment) => mapComment(comment, currentUserId));
}
