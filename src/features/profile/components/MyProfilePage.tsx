'use client';

import ProfileError from './ProfileError';
import ProfileLayout from './ProfileLayout';
import ProfileSkeleton from './ProfileSkeleton';

import { useCurrentUser } from '@/features/profile/hooks/useCurrentUser';

export default function MyProfilePage() {
  const { data, isPending, isError, refetch } = useCurrentUser();

  if (isPending) {
    return <ProfileSkeleton />;
  }

  if (isError || !data) {
    return <ProfileError onRetry={refetch} />;
  }

  return <ProfileLayout profile={data.data} username={data.data.username} />;
}
