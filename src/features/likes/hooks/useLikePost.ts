import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { updatePostInInfiniteData } from '@/features/feed/utils/updatePostInInfiniteData';
import { likeService } from '@/features/likes/services/like.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';
import { updateLikeState } from '../utils/updateLikeState';
import { FeedResponse } from '@/features/feed/types/feed';
import { toast } from 'sonner';

export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeService.likePost,

    async onMutate(postId) {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.feed.all,
      });

      const previousQueries = queryClient.getQueriesData({
        queryKey: QUERY_KEYS.feed.all,
      });

      queryClient.setQueriesData(
        {
          queryKey: QUERY_KEYS.feed.all,
        },
        (oldData) =>
          updatePostInInfiniteData(
            oldData as InfiniteData<FeedResponse> | undefined,
            postId,
            (post) => updateLikeState(post, true)
          )
      );

      return { previousQueries };
    },

    onError(error, _postId, context) {
      context?.previousQueries.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });

      toast.error(
        error instanceof Error ? error.message : 'Failed to like post.'
      );
    },
  });
}
