import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';

import { toast } from 'sonner';

import type { FeedResponse } from '@/features/feed/types/feed';
import type { CommentsResponse } from '@/features/comments/types/comment';
import type {
  CommentsRequest,
  CreateCommentRequest,
  CreateCommentResponse,
} from '@/features/comments/types/comment';

import { commentService } from '@/features/comments/services/comment.service';
import { appendComment } from '@/features/comments/utils/updateCommentList';
import { updateFeedCommentState } from '@/features/comments/utils/updateFeedCommentState';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

interface CreateCommentMutationVariables {
  postId: number;
  payload: CreateCommentRequest;
  params: CommentsRequest;
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation<
    CreateCommentResponse,
    Error,
    CreateCommentMutationVariables
  >({
    mutationKey: QUERY_KEYS.mutation.comments.create,

    mutationFn: ({ postId, payload }) =>
      commentService.createComment(postId, payload),

    onSuccess: (response, variables) => {
      queryClient.setQueryData<CommentsResponse>(
        QUERY_KEYS.comments.list(variables.postId, variables.params),
        (old) => appendComment(old, response.data)
      );

      queryClient.setQueriesData<InfiniteData<FeedResponse>>(
        {
          queryKey: QUERY_KEYS.feed.all,
        },
        (old) => updateFeedCommentState(old, variables.postId, true)
      );

      toast.success('Comment created successfully.');
    },

    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : 'Failed to create comment.'
      );
    },
  });
}
