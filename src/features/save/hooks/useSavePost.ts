import { useMutation } from '@tanstack/react-query';

import { saveService } from '@/features/save/services/save.service';

export function useSavePost() {
  return useMutation({
    mutationFn: saveService.savePost,
  });
}
