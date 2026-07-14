import { Button } from '@/components/ui/button';

import type { Profile } from '@/types/entities/profile';

interface ProfileActionsProps {
  profile: Profile;
}

export default function ProfileActions({ profile }: ProfileActionsProps) {
  return (
    <section className='flex items-center gap-3'>
      <Button
        className='flex-1 transition-fast active:scale-95'
        variant='outline'
      >
        {profile.isMe ? 'Edit Profile' : 'Follow'}
      </Button>

      <Button
        type='button'
        variant='outline'
        size='icon'
        className='transition-fast active:scale-95'
      >
        Share
      </Button>
    </section>
  );
}
