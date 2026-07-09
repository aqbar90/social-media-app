import { useQuery } from '@tanstack/react-query';

import { commentService } from '@/features/comments/services/comment.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { CommentsRequest } from '@/features/comments/types/comment';

export function useComments(postId: number, params: CommentsRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.comments.list(postId, params),
    queryFn: () => commentService.getComments(postId, params),
  });
}
