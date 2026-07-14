import type { CommentsResponse } from '@/features/comments/types/comment';
import type { Comment } from '@/types/entities/comment';

export function appendComment(
  data: CommentsResponse | undefined,
  comment: Comment
): CommentsResponse | undefined {
  if (!data) {
    return data;
  }

  return {
    ...data,
    data: {
      ...data.data,
      comments: [...data.data.comments, comment],
      pagination: {
        ...data.data.pagination,
        total: data.data.pagination.total + 1,
      },
    },
  };
}

export function removeComment(
  data: CommentsResponse | undefined,
  commentId: number
): CommentsResponse | undefined {
  if (!data) {
    return data;
  }

  return {
    ...data,
    data: {
      ...data.data,
      comments: data.data.comments.filter(
        (comment) => comment.id !== commentId
      ),
      pagination: {
        ...data.data.pagination,
        total: Math.max(data.data.pagination.total - 1, 0),
      },
    },
  };
}
