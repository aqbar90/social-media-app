import ProfilePage from '@/features/profile/components/ProfilePage';

interface UserProfilePageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const { username } = await params;

  return <ProfilePage username={username} />;
}
