import { useMutation } from '@tanstack/react-query';

import { postService } from '@/features/posts/services/post.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';
import { toast } from 'sonner';

export function useDeletePost() {
  return useMutation({
    mutationKey: QUERY_KEYS.mutation.posts.delete,

    mutationFn: postService.deletePost,

    onSuccess() {
      toast.success('Post deleted successfully.');
    },

    onError(error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to delete post.'
      );
    },
  });
}
