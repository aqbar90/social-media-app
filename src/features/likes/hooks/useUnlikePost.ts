import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { updatePostInInfiniteData } from '@/features/feed/utils/updatePostInInfiniteData';
import { likeService } from '@/features/likes/services/like.service';
import { updateLikeState } from '@/features/likes/utils/updateLikeState';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';
import { FeedResponse } from '@/features/feed/types/feed';
import { toast } from 'sonner';

export function useUnlikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeService.unlikePost,

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
            (post) => updateLikeState(post, false)
          )
      );

      return { previousQueries };
    },

    onError(_error, _postId, context) {
      context?.previousQueries.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });

      toast.error(
        _error instanceof Error ? _error.message : 'Failed to unlike post.'
      );
    },
  });
}
