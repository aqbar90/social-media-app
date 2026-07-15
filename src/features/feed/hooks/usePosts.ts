import { useInfiniteQuery } from '@tanstack/react-query';

import { postService } from '@/features/posts/services/post.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { PostsRequest } from '@/features/posts/types/post';

export function usePosts(params: PostsRequest) {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.posts.all,
    initialPageParam: params.page ?? 1,
    queryFn: ({ pageParam }) =>
      postService.getPosts({
        ...params,
        page: pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;

      return page < totalPages ? page + 1 : undefined;
    },
  });
}
