import { useMutation } from '@tanstack/react-query';

import { profileService } from '@/features/profile/services/profile.service';

export function useUpdateProfile() {
  return useMutation({
    mutationFn: profileService.updateProfile,
  });
}
