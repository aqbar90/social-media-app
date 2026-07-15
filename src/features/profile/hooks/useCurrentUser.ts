import { useQuery } from '@tanstack/react-query';

import { mapCurrentUser } from '@/features/profile/mappers/profile.mapper';
import { profileService } from '@/features/profile/services/profile.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useCurrentUser() {
  return useQuery({
    queryKey: QUERY_KEYS.profile.currentUser,
    queryFn: async () => {
      const response = await profileService.getCurrentUser();

      return {
        ...response,
        data: mapCurrentUser(response.data),
      };
    },
  });
}
