'use client';

import ProfileError from './ProfileError';
import ProfileLayout from './ProfileLayout';
import ProfileSkeleton from './ProfileSkeleton';

import { useProfile } from '@/features/profile/hooks/useProfile';

interface ProfilePageProps {
  username: string;
}

export default function ProfilePage({ username }: ProfilePageProps) {
  const { data, isPending, isError, refetch } = useProfile(username);

  if (isPending) {
    return <ProfileSkeleton />;
  }

  if (isError) {
    return <ProfileError onRetry={refetch} />;
  }

  return <ProfileLayout profile={data.data} username={username} />;
}
