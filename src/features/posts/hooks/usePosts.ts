import { useQuery } from '@tanstack/react-query';

import { postService } from '@/features/posts/services/post.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { PostsRequest } from '@/features/posts/types/post';

export function usePosts(params: PostsRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.posts.list(params),
    queryFn: () => postService.getPosts(params),
  });
}
