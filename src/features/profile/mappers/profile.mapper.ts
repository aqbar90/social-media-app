import type { ProfileDto } from '@/features/profile/types/profile.dto';
import type { Profile } from '@/types/entities/profile';

export function mapProfile(dto: ProfileDto): Profile {
  return {
    id: dto.id,

    name: dto.name,
    username: dto.username,

    bio: dto.bio,
    avatarUrl: dto.avatarUrl,

    email: dto.email,
    phone: dto.phone,

    isFollowing: dto.isFollowing,
    isMe: dto.isMe,

    stats: {
      posts: dto.counts.post,
      followers: dto.counts.followers,
      following: dto.counts.following,
      likes: dto.counts.likes,
    },
  };
}
