'use client';

import { useEffect, useRef } from 'react';

import TimelineEmpty from '../components/TimelineEmpty';
import TimelineError from '../components/TimelineError';
import TimelineList from '../components/TimelineList';
import TimelineSkeleton from '../components/TimelineSkeleton';

import type {
  TimelinePaginationState,
  TimelineUiState,
} from '../types/timeline-state';

import type { Post } from '@/types/entities/post';

interface TimelineSectionProps {
  posts: Post[];
  ui: TimelineUiState;
  pagination?: TimelinePaginationState;
}

export default function TimelineSection({
  posts,
  ui,
  pagination,
}: TimelineSectionProps) {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pagination) {
      return;
    }

    if (!loadMoreRef.current || !pagination.hasNextPage) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (
        entry.isIntersecting &&
        pagination.hasNextPage &&
        !pagination.isFetchingNextPage
      ) {
        void pagination.fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [pagination]);

  if (ui.isPending) {
    return <TimelineSkeleton />;
  }

  if (ui.isError) {
    return <TimelineError onRetry={() => void ui.refetch()} />;
  }

  if (posts.length === 0) {
    return <TimelineEmpty />;
  }

  return (
    <>
      <TimelineList posts={posts} />

      {pagination && <div ref={loadMoreRef} />}

      {pagination?.isFetchingNextPage && <TimelineSkeleton count={1} />}
    </>
  );
}
