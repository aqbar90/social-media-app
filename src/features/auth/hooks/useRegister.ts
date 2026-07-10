import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { authService } from '@/features/auth/services/auth.service';

export function useRegister() {
  return useMutation({
    mutationFn: authService.register,

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message ?? 'Registration failed');

        return;
      }

      toast.error('Registration failed');
    },
  });
}
