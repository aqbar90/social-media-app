import { useMutation, useQueryClient } from '@tanstack/react-query';

import { saveService } from '@/features/save/services/save.service';
import { QUERY_KEYS } from '@/lib/react-query/query-keys';

export function useUnsavePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveService.unsavePost,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.save.all,
      });
    },
  });
}
