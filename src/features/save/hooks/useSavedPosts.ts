import { useQuery } from '@tanstack/react-query';

import { saveService } from '@/features/save/services/save.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { SavedPostsRequest } from '@/features/save/types/save';

export function useSavedPosts(params: SavedPostsRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.save.my(params),
    queryFn: () => saveService.getSavedPosts(params),
  });
}
