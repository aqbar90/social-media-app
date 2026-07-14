import { UserAvatar } from '@/components/common';

import type { Profile } from '@/types/entities/profile';

interface ProfileIdentityProps {
  profile: Profile;
}

export default function ProfileIdentity({ profile }: ProfileIdentityProps) {
  return (
    <section className='flex items-center gap-4'>
      <UserAvatar
        src={profile.avatarUrl}
        alt={profile.username}
        className='size-24 shrink-0 lg:size-16'
      />

      <div className='min-w-0 flex-1'>
        <h1 className='truncate text-display-sm font-bold'>{profile.name}</h1>

        <p className='text-body-lg text-muted-foreground'>
          @{profile.username}
        </p>
      </div>
    </section>
  );
}
