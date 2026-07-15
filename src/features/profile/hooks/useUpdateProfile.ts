import { useMutation, useQueryClient } from '@tanstack/react-query';

import { profileService } from '@/features/profile/services/profile.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

import { toast } from 'sonner';
import axios from 'axios';

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
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message;

        if (status === 500 && message === 'Something went wrong') {
          toast.error(
            'The profile could not be updated. The username or phone number may already be in use.'
          );

          return;
        }

        if (typeof message === 'string' && message.length > 0) {
          toast.error(message);

          return;
        }
      }

      toast.error('Failed to update profile.');
    },
  });
}
