import { useQuery } from '@tanstack/react-query';

import { profilePostsService } from '@/features/profile/services/profile-posts.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { UserPostsRequest } from '@/features/profile/types/profile-posts';

export function useUserPosts(username: string, params: UserPostsRequest) {
  return useQuery({
    queryKey: QUERY_KEYS.users.posts(username),

    queryFn: () => profilePostsService.getUserPosts(username, params),
  });
}
