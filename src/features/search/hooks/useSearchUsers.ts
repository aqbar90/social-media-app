import { useInfiniteQuery } from '@tanstack/react-query';

import { searchService } from '../services/search.service';

import { QUERY_KEYS } from '@/lib/react-query/query-keys';

interface UseSearchUsersOptions {
  q: string;
  limit?: number;
}

export function useSearchUsers({ q, limit = 20 }: UseSearchUsersOptions) {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.users.search(q),

    enabled: q.trim().length > 0,

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      searchService.searchUsers({
        q,
        page: pageParam,
        limit,
      }),

    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;

      return page < totalPages ? page + 1 : undefined;
    },
  });
}
