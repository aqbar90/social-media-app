import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { followService } from '@/features/follow/services/follow.service';
import { updateProfileFollowState } from '@/features/follow/utils/updateProfileFollowState';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import type { ApiResponse } from '@/types/api/api-response';
import type { Profile } from '@/types/entities/profile';

export function useFollowUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: QUERY_KEYS.mutation.follow.follow,

    mutationFn: followService.followUser,

    onMutate: async (username: string) => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.profile.user(username),
      });

      const previousProfile = queryClient.getQueryData<ApiResponse<Profile>>(
        QUERY_KEYS.profile.user(username)
      );

      queryClient.setQueryData<ApiResponse<Profile>>(
        QUERY_KEYS.profile.user(username),
        (old) => updateProfileFollowState(old, true)
      );

      return {
        previousProfile,
        username,
      };
    },

    onError: (error, _username, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData<ApiResponse<Profile>>(
          QUERY_KEYS.profile.user(context.username),
          context.previousProfile
        );
      }

      toast.error(
        error instanceof Error ? error.message : 'Failed to follow user.'
      );
    },

    onSuccess: () => {
      toast.success('User followed successfully.');
    },
    onSettled: async (_data, _error, username) => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.profile.user(username),
      });
    },
  });
}
