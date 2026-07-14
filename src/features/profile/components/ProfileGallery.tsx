'use client';

import ProfileGalleryEmpty from './ProfileGalleryEmpty';
import ProfileGalleryError from './ProfileGalleryError';
import ProfileGalleryGrid from './ProfileGalleryGrid';
import ProfileGallerySkeleton from './ProfileGallerySkeleton';

import { useUserPosts } from '@/features/profile/hooks/useUserPosts';

interface ProfileGalleryProps {
  username: string;
}

export default function ProfileGallery({ username }: ProfileGalleryProps) {
  const { data, isPending, isError, refetch } = useUserPosts(username, {
    page: 1,
    limit: 20,
  });

  if (isPending) {
    return <ProfileGallerySkeleton />;
  }

  if (isError) {
    return <ProfileGalleryError onRetry={refetch} />;
  }

  const posts = data?.data.posts ?? [];

  if (!posts.length) {
    return <ProfileGalleryEmpty />;
  }

  return <ProfileGalleryGrid posts={posts} />;
}
