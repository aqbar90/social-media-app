import { useQuery } from '@tanstack/react-query';

import { mapComments } from '@/features/comments/mappers/comment.mapper';
import { commentService } from '@/features/comments/services/comment.service';
import { useAuth } from '@/lib/auth';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { CommentsRequest } from '@/features/comments/types/comment';

export function useComments(postId: number, params: CommentsRequest) {
  const { currentUser } = useAuth();

  return useQuery({
    queryKey: QUERY_KEYS.comments.list(postId, params),

    queryFn: async () => {
      const response = await commentService.getComments(postId, params);

      return {
        ...response,
        data: {
          ...response.data,
          comments: mapComments(
            response.data.comments,
            currentUser?.id ?? null
          ),
        },
      };
    },
  });
}
