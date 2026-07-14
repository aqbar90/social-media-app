import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';

import type { FeedResponse } from '@/features/feed/types/feed';
import type { LikePostResponse } from '@/features/likes/types/like';

import { likeService } from '@/features/likes/services/like.service';
import { updateFeedLikeState } from '@/features/likes/utils/updateFeedLikeState';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

interface LikeMutationContext {
  previousFeed: Array<
    readonly [readonly unknown[], InfiniteData<FeedResponse> | undefined]
  >;
}

export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation<LikePostResponse, Error, number, LikeMutationContext>({
    mutationKey: QUERY_KEYS.mutation.likes.like,

    mutationFn: likeService.likePost,

    onMutate: async (postId): Promise<LikeMutationContext> => {
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
        (old) => updateFeedLikeState(old, postId, true)
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
