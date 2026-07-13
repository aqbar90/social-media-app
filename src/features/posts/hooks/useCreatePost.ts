import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postService } from '@/features/posts/services/post.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import { toast } from 'sonner';

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: QUERY_KEYS.mutation.posts.create,

    mutationFn: postService.createPost,

    async onSuccess() {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.feed.all,
      });

      toast.success('Post created successfully.');
    },

    onError(error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to create post.'
      );
    },
  });
}
