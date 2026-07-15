import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';

import type { FeedResponse } from '@/features/feed/types/feed';
import type { LikePostResponse } from '@/features/likes/types/like';
import type { PostsResponse } from '@/features/posts/types/post';

import { likeService } from '@/features/likes/services/like.service';
import { updateFeedLikeState } from '@/features/likes/utils/updateFeedLikeState';
import { updatePostsLikeState } from '@/features/likes/utils/updatePostsLikeState';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

interface LikeMutationContext {
  previousFeed: Array<
    readonly [readonly unknown[], InfiniteData<FeedResponse> | undefined]
  >;

  previousPosts: Array<
    readonly [readonly unknown[], InfiniteData<PostsResponse> | undefined]
  >;
}

export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation<LikePostResponse, Error, number, LikeMutationContext>({
    mutationKey: QUERY_KEYS.mutation.likes.like,

    mutationFn: likeService.likePost,

    onMutate: async (postId): Promise<LikeMutationContext> => {
      await Promise.all([
        queryClient.cancelQueries({
          queryKey: QUERY_KEYS.feed.all,
        }),

        queryClient.cancelQueries({
          queryKey: QUERY_KEYS.posts.all,
        }),
      ]);

      const previousFeed = queryClient.getQueriesData<
        InfiniteData<FeedResponse>
      >({
        queryKey: QUERY_KEYS.feed.all,
      });

      const previousPosts = queryClient.getQueriesData<
        InfiniteData<PostsResponse>
      >({
        queryKey: QUERY_KEYS.posts.all,
      });

      queryClient.setQueriesData<InfiniteData<FeedResponse>>(
        {
          queryKey: QUERY_KEYS.feed.all,
        },
        (old) => updateFeedLikeState(old, postId, true)
      );

      queryClient.setQueriesData<InfiniteData<PostsResponse>>(
        {
          queryKey: QUERY_KEYS.posts.all,
        },
        (old) => updatePostsLikeState(old, postId, true)
      );

      return {
        previousFeed,
        previousPosts,
      };
    },

    onError: (_error, _postId, context) => {
      if (!context) {
        return;
      }

      context.previousFeed.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });

      context.previousPosts.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });
    },

    onSuccess: () => {
      /**
       * Reserved for future server reconciliation.
       */
    },
  });
}
