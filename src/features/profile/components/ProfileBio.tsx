import type { Profile } from '@/types/entities/profile';

interface ProfileBioProps {
  profile: Profile;
}

export default function ProfileBio({ profile }: ProfileBioProps) {
  if (!profile.bio) {
    return null;
  }

  return (
    <section>
      <p className='whitespace-pre-line text-body-md text-foreground'>
        {profile.bio}
      </p>
    </section>
  );
}
