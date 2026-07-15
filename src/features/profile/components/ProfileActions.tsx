import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { ShareIcon, CheckCircleIcon } from '@/lib/icons';

import { useProfileFollow } from '@/features/follow/hooks/useProfileFollow';

import type { Profile } from '@/types/entities/profile';

interface ProfileActionsProps {
  profile: Profile;
}

export default function ProfileActions({ profile }: ProfileActionsProps) {
  const { toggleFollow, isPending } = useProfileFollow({
    username: profile.username,
    isFollowing: profile.isFollowing,
  });

  return (
    <section className='flex items-center gap-3'>
      {profile.isMe ? (
        <Button
          asChild
          type='button'
          variant='outline'
          className='flex-1 transition-fast active:scale-95'
        >
          <Link href='/profile/edit'>Edit Profile</Link>
        </Button>
      ) : (
        <Button
          type='button'
          variant={profile.isFollowing ? 'outline' : 'default'}
          className='flex-1 transition-fast active:scale-95'
          disabled={isPending}
          onClick={toggleFollow}
        >
          {profile.isFollowing && <CheckCircleIcon />}

          {profile.isFollowing ? 'Following' : 'Follow'}
        </Button>
      )}

      <Button
        type='button'
        variant='outline'
        size='icon'
        className='transition-fast active:scale-95'
      >
        <ShareIcon />
      </Button>
    </section>
  );
}
