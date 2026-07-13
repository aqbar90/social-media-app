import { useMutation } from '@tanstack/react-query';

import { commentService } from '@/features/comments/services/comment.service';

import type { CreateCommentRequest } from '@/features/comments/types/comment';

interface CreateCommentMutationVariables {
  postId: number;
  payload: CreateCommentRequest;
}

export function useCreateComment() {
  return useMutation({
    mutationFn: ({ postId, payload }: CreateCommentMutationVariables) =>
      commentService.createComment(postId, payload),
  });
}
