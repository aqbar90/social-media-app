'use client';

import { useEffect, useMemo, useRef } from 'react';

import FeedEmpty from '../components/FeedEmpty';
import FeedError from '../components/FeedError';
import FeedList from '../components/FeedList';
import FeedSkeleton from '../components/FeedSkeleton';

import { useFeed } from '../hooks/useFeed';
import { selectFeedPosts } from '../selectors/selectFeedPosts';

export default function FeedSection() {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const {
    data,
    isPending,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFeed({
    page: 1,
    limit: 10,
  });

  const posts = useMemo(() => selectFeedPosts(data), [data]);

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isPending) {
    return <FeedSkeleton />;
  }

  if (isError) {
    return <FeedError onRetry={refetch} />;
  }

  if (posts.length === 0) {
    return <FeedEmpty />;
  }

  return (
    <>
      <FeedList posts={posts} />

      <div ref={loadMoreRef} />

      {isFetchingNextPage && <FeedSkeleton count={1} />}
    </>
  );
}
