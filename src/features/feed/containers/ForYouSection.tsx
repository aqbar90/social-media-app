'use client';

import { useMemo } from 'react';

import TimelineSection from './TimelineSection';

import { usePosts } from '../hooks/usePosts';
import { selectPosts } from '../selectors/selectPosts';

import type {
  TimelinePaginationState,
  TimelineUiState,
} from '../types/timeline-state';

export default function ForYouSection() {
  const query = usePosts({
    page: 1,
    limit: 10,
  });

  const posts = useMemo(() => selectPosts(query.data), [query.data]);

  const ui: TimelineUiState = {
    isPending: query.isPending,
    isError: query.isError,
    refetch: async () => {
      await query.refetch();
    },
  };

  const pagination: TimelinePaginationState = {
    hasNextPage: query.hasNextPage ?? false,
    isFetchingNextPage: query.isFetchingNextPage,
    fetchNextPage: async () => {
      await query.fetchNextPage();
    },
  };

  return <TimelineSection posts={posts} ui={ui} pagination={pagination} />;
}
