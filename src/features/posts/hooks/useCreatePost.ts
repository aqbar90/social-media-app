import { useMutation } from '@tanstack/react-query';

import { postService } from '@/features/posts/services/post.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';
import { toast } from 'sonner';

export function useCreatePost() {
  return useMutation({
    mutationKey: QUERY_KEYS.mutation.posts.create,

    mutationFn: postService.createPost,

    onSuccess() {
      toast.success('Post created successfully.');
    },

    onError(error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to create post.'
      );
    },
  });
}
