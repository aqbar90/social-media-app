import { apiClient } from '@/lib/api/api-client';

import { API_ENDPOINTS } from '@/types/api/endpoints';

import type { SearchUsersParams, SearchUsersResponse } from '../types/search';

async function searchUsers({
  q,
  page = 1,
  limit = 20,
}: SearchUsersParams): Promise<SearchUsersResponse> {
  const { data } = await apiClient.get<SearchUsersResponse>(
    API_ENDPOINTS.USERS.SEARCH,
    {
      params: {
        q,
        page,
        limit,
      },
    }
  );

  return data;
}

export const searchService = {
  searchUsers,
};
