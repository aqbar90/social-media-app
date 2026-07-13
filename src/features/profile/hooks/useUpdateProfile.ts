import { useMutation } from '@tanstack/react-query';

import { profileService } from '@/features/profile/services/profile.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';
import { toast } from 'sonner';

export function useUpdateProfile() {
  return useMutation({
    mutationKey: QUERY_KEYS.mutation.profile.update,

    mutationFn: profileService.updateProfile,

    onSuccess() {
      toast.success('Profile updated successfully.');
    },

    onError(error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to update profile.'
      );
    },
  });
}
