import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { authService } from '@/features/auth/services/auth.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useRegister() {
  return useMutation({
    mutationKey: QUERY_KEYS.mutation.auth.register,
    mutationFn: authService.register,

    onSuccess() {
      toast.success('Account created successfully.');
    },

    onError(error) {
      toast.error(
        error instanceof Error ? error.message : 'Registration failed.'
      );
    },
  });
}
