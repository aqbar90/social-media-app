import { useQuery } from '@tanstack/react-query';

import { profileService } from '@/features/profile/services/profile.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useCurrentUser() {
  return useQuery({
    queryKey: QUERY_KEYS.profile.currentUser,
    queryFn: profileService.getCurrentUser,
  });
}
