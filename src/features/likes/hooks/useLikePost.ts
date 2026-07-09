import { useMutation } from '@tanstack/react-query';

import { likeService } from '@/features/likes/services/like.service';

export function useLikePost() {
  return useMutation({
    mutationFn: likeService.likePost,
  });
}
