import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { commentService } from '@/features/comments/services/comment.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { CommentsRequest } from '@/features/comments/types/comment';

interface DeleteCommentMutationVariables {
  commentId: number;
  postId: number;
  params: CommentsRequest;
}

export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ commentId }: DeleteCommentMutationVariables) =>
      commentService.deleteComment(commentId),

    onSuccess(_data, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.comments.list(variables.postId, variables.params),
      });
    },

    onError(error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to delete comment.'
      );
    },
  });
}
