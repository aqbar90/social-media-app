import { useMutation } from '@tanstack/react-query';

import { likeService } from '@/features/likes/services/like.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useLikePost() {
  return useMutation({
    mutationKey: QUERY_KEYS.mutation.likes.like,
    mutationFn: likeService.likePost,
  });
}
