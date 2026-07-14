import { useMutation, useQueryClient } from '@tanstack/react-query';

import { profileService } from '@/features/profile/services/profile.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import { toast } from 'sonner';

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: QUERY_KEYS.mutation.profile.update,

    mutationFn: profileService.updateProfile,

    async onSuccess() {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.profile.currentUser,
        }),
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.profile.all,
        }),
      ]);

      toast.success('Profile updated successfully.');
    },

    onError(error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to update profile.'
      );
    },
  });
}
