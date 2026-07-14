import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';

import { toast } from 'sonner';

import type { FeedResponse } from '@/features/feed/types/feed';
import type {
  CommentsRequest,
  CommentsResponse,
  DeleteCommentResponse,
} from '@/features/comments/types/comment';

import { commentService } from '@/features/comments/services/comment.service';
import { removeComment } from '@/features/comments/utils/updateCommentList';
import { updateFeedCommentState } from '@/features/comments/utils/updateFeedCommentState';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

interface DeleteCommentMutationVariables {
  commentId: number;
  postId: number;
  params: CommentsRequest;
}

interface DeleteCommentMutationContext {
  previousComments: CommentsResponse | undefined;

  previousFeed: Array<
    readonly [readonly unknown[], InfiniteData<FeedResponse> | undefined]
  >;
}

export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation<
    DeleteCommentResponse,
    Error,
    DeleteCommentMutationVariables,
    DeleteCommentMutationContext
  >({
    mutationKey: QUERY_KEYS.mutation.comments.delete,

    mutationFn: ({ commentId }) => commentService.deleteComment(commentId),

    onMutate: async (variables): Promise<DeleteCommentMutationContext> => {
      const { commentId, postId, params } = variables;

      await Promise.all([
        queryClient.cancelQueries({
          queryKey: QUERY_KEYS.comments.list(postId, params),
        }),
        queryClient.cancelQueries({
          queryKey: QUERY_KEYS.feed.all,
        }),
      ]);

      const previousComments = queryClient.getQueryData<CommentsResponse>(
        QUERY_KEYS.comments.list(postId, params)
      );

      const previousFeed = queryClient.getQueriesData<
        InfiniteData<FeedResponse>
      >({
        queryKey: QUERY_KEYS.feed.all,
      });

      queryClient.setQueryData<CommentsResponse>(
        QUERY_KEYS.comments.list(postId, params),
        (old) => removeComment(old, commentId)
      );

      queryClient.setQueriesData<InfiniteData<FeedResponse>>(
        {
          queryKey: QUERY_KEYS.feed.all,
        },
        (old) => updateFeedCommentState(old, postId, false)
      );

      return {
        previousComments,
        previousFeed,
      };
    },

    onError: (_error, variables, context) => {
      if (!context) {
        return;
      }

      queryClient.setQueryData(
        QUERY_KEYS.comments.list(variables.postId, variables.params),
        context.previousComments
      );

      context.previousFeed.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });

      toast.error('Failed to delete comment.');
    },

    onSuccess: () => {
      toast.success('Comment deleted successfully.');
    },
  });
}
