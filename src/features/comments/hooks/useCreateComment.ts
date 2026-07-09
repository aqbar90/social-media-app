import { useMutation } from '@tanstack/react-query';

import { commentService } from '@/features/comments/services/comment.service';

export function useCreateComment() {
  return useMutation({
    mutationFn: ({
      postId,
      payload,
    }: {
      postId: number;
      payload: { text: string };
    }) => commentService.createComment(postId, payload),
  });
}
