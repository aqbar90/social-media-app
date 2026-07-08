import { useMutation } from '@tanstack/react-query';

import { postService } from '@/features/posts/services/post.service';

export function useDeletePost() {
  return useMutation({
    mutationFn: postService.deletePost,
  });
}
