import { useMutation } from '@tanstack/react-query';

import { likeService } from '@/features/likes/services/like.service';

export function useUnlikePost() {
  return useMutation({
    mutationFn: likeService.unlikePost,
  });
}
