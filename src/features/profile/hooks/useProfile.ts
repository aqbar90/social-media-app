import { useQuery } from '@tanstack/react-query';

import { mapProfile } from '@/features/profile/mappers/profile.mapper';
import { profileService } from '@/features/profile/services/profile.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useProfile(username: string) {
  return useQuery({
    queryKey: QUERY_KEYS.profile.user(username),

    queryFn: async () => {
      const response = await profileService.getProfile(username);

      return {
        ...response,
        data: mapProfile(response.data),
      };
    },
  });
}
