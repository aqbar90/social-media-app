import { useMutation } from '@tanstack/react-query';

import { saveService } from '@/features/save/services/save.service';

export function useUnsavePost() {
  return useMutation({
    mutationFn: saveService.unsavePost,
  });
}
