'use client';

import { useRouter } from 'next/navigation';

import EditProfileForm from '../components/EditProfileForm';
import ProfileError from '../components/ProfileError';
import ProfileSkeleton from '../components/ProfileSkeleton';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useUpdateProfile } from '../hooks/useUpdateProfile';
import type { UpdateProfileFormValues } from '../schemas/update-profile.schema';

import { toast } from 'sonner';

export default function EditProfileContainer() {
  const router = useRouter();

  const currentUserQuery = useCurrentUser();

  const updateProfileMutation = useUpdateProfile();

  if (currentUserQuery.isPending) {
    return <ProfileSkeleton />;
  }

  if (currentUserQuery.isError || !currentUserQuery.data) {
    return <ProfileError onRetry={() => void currentUserQuery.refetch()} />;
  }

  const profile = currentUserQuery.data.data;

  async function handleSubmit(values: UpdateProfileFormValues) {
    const hasProfileChanged =
      values.name !== profile.name ||
      values.username !== profile.username ||
      values.phone !== profile.phone ||
      values.bio !== (profile.bio ?? '');

    const hasAvatarChanged = values.avatar instanceof File;

    if (!hasProfileChanged && !hasAvatarChanged) {
      toast.info('No changes detected.');

      return;
    }

    await updateProfileMutation.mutateAsync(values);

    router.back();
  }

  return (
    <EditProfileForm
      profile={profile}
      isSubmitting={updateProfileMutation.isPending}
      onBack={() => router.back()}
      onSubmit={handleSubmit}
    />
  );
}
