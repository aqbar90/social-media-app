import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { authService } from '@/features/auth/services/auth.service';

export function useLogin() {
  return useMutation({
    mutationFn: authService.login,

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message;

        if (message) {
          toast.error(message);
          return;
        }
      }

      toast.error('Unexpected server error.');
    },
  });
}
