import { useQuery } from '@tanstack/react-query';

import { postService } from '@/features/posts/services/post.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function usePost(id: number) {
  return useQuery({
    queryKey: QUERY_KEYS.posts.detail(id),
    queryFn: () => postService.getPostById(id),
    enabled: id > 0,
  });
}
