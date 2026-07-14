import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';

import type { FeedResponse } from '@/features/feed/types/feed';
import type { UnlikePostResponse } from '@/features/likes/types/like';

import { likeService } from '@/features/likes/services/like.service';
import { updateFeedLikeState } from '@/features/likes/utils/updateFeedLikeState';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

interface UnlikeMutationContext {
  previousFeed: Array<
    readonly [readonly unknown[], InfiniteData<FeedResponse> | undefined]
  >;
}

export function useUnlikePost() {
  const queryClient = useQueryClient();

  return useMutation<UnlikePostResponse, Error, number, UnlikeMutationContext>({
    mutationKey: QUERY_KEYS.mutation.likes.unlike,

    mutationFn: likeService.unlikePost,

    onMutate: async (postId): Promise<UnlikeMutationContext> => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.feed.all,
      });

      const previousFeed = queryClient.getQueriesData<
        InfiniteData<FeedResponse>
      >({
        queryKey: QUERY_KEYS.feed.all,
      });

      queryClient.setQueriesData<InfiniteData<FeedResponse>>(
        {
          queryKey: QUERY_KEYS.feed.all,
        },
        (old) => updateFeedLikeState(old, postId, false)
      );

      return {
        previousFeed,
      };
    },

    onError: (_error, _postId, context) => {
      if (!context) {
        return;
      }

      context.previousFeed.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });
    },

    onSuccess: () => {
      /**
       * Reserved for future server reconciliation.
       *
       * Examples:
       * - WebSocket synchronization
       * - Notification counters
       * - Ranking updates
       * - Recommendation refresh
       */
    },
  });
}
