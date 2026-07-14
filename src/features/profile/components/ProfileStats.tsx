import ProfileStatItem from './ProfileStatItem';

import type { Profile } from '@/types/entities/profile';

interface ProfileStatsProps {
  profile: Profile;
}

export default function ProfileStats({ profile }: ProfileStatsProps) {
  return (
    <section className='grid grid-cols-4 divide-x'>
      <ProfileStatItem value={profile.stats.posts} label='Posts' />

      <ProfileStatItem value={profile.stats.followers} label='Followers' />

      <ProfileStatItem value={profile.stats.following} label='Following' />

      <ProfileStatItem value={profile.stats.likes} label='Likes' />
    </section>
  );
}
