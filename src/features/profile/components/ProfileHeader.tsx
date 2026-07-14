import ProfileActions from './ProfileActions';
import ProfileBio from './ProfileBio';
import ProfileIdentity from './ProfileIdentity';

import type { Profile } from '@/types/entities/profile';

interface ProfileHeaderProps {
  profile: Profile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className='flex flex-col gap-6'>
      <ProfileIdentity profile={profile} />

      <ProfileActions profile={profile} />

      <ProfileBio profile={profile} />
    </header>
  );
}
