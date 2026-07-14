'use client';

import SavedEmpty from './SavedEmpty';
import SavedError from './SavedError';
import SavedGrid from './SavedGrid';
import SavedSkeleton from './SavedSkeleton';

import { useSavedPosts } from '@/features/save/hooks/useSavedPosts';

export default function SavedSection() {
  const { data, isPending, isError, refetch } = useSavedPosts({
    page: 1,
    limit: 20,
  });

  if (isPending) {
    return <SavedSkeleton />;
  }

  if (isError) {
    return <SavedError onRetry={refetch} />;
  }

  const posts = data?.data.posts ?? [];

  if (!posts.length) {
    return <SavedEmpty />;
  }

  return <SavedGrid posts={posts} />;
}
