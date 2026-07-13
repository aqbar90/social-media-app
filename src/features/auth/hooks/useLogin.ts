import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { authService } from '@/features/auth/services/auth.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useLogin() {
  return useMutation({
    mutationKey: QUERY_KEYS.mutation.auth.login,
    mutationFn: authService.login,

    onSuccess() {
      toast.success('Login successful.');
    },

    onError(error) {
      toast.error(error instanceof Error ? error.message : 'Login failed.');
    },
  });
}
