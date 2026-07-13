import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { commentService } from '@/features/comments/services/comment.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type {
  CommentsRequest,
  CreateCommentRequest,
} from '@/features/comments/types/comment';

interface CreateCommentMutationVariables {
  postId: number;
  payload: CreateCommentRequest;
  params: CommentsRequest;
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, payload }: CreateCommentMutationVariables) =>
      commentService.createComment(postId, payload),

    onSuccess(_data, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.comments.list(variables.postId, variables.params),
      });
    },

    onError(error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to create comment.'
      );
    },
  });
}
