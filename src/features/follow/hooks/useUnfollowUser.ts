import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { followService } from '@/features/follow/services/follow.service';
import { updateProfileFollowState } from '@/features/follow/utils/updateProfileFollowState';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { Profile } from '@/types/entities/profile';

export function useUnfollowUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: QUERY_KEYS.mutation.follow.unfollow,

    mutationFn: followService.unfollowUser,

    onMutate: async (username: string) => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.profile.user(username),
      });

      const previousProfile = queryClient.getQueryData<Profile>(
        QUERY_KEYS.profile.user(username)
      );

      queryClient.setQueryData<Profile>(
        QUERY_KEYS.profile.user(username),
        (old) => updateProfileFollowState(old, false)
      );

      return {
        previousProfile,
        username,
      };
    },

    onError: (error, _username, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(
          QUERY_KEYS.profile.user(context.username),
          context.previousProfile
        );
      }

      toast.error(
        error instanceof Error ? error.message : 'Failed to unfollow user.'
      );
    },

    onSuccess: () => {
      toast.success('User unfollowed successfully.');
    },
  });
}
