import { useMutation } from '@tanstack/react-query';

import { commentService } from '@/features/comments/services/comment.service';

export function useDeleteComment() {
  return useMutation({
    mutationFn: commentService.deleteComment,
  });
}
