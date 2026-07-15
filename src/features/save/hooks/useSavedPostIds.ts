import { useMemo } from 'react';

import { useSavedPosts } from './useSavedPosts';

import { selectSavedPostIds } from '../selectors/selectSavedPostIds';

export function useSavedPostIds() {
  const query = useSavedPosts({
    page: 1,
    limit: 50,
  });

  const savedPostIds = useMemo(
    () => selectSavedPostIds(query.data),
    [query.data]
  );

  return {
    ...query,
    savedPostIds,
  };
}
