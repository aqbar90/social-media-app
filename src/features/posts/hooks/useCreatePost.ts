import { useMutation } from '@tanstack/react-query';

import { postService } from '@/features/posts/services/post.service';

export function useCreatePost() {
  return useMutation({
    mutationFn: postService.createPost,
  });
}
