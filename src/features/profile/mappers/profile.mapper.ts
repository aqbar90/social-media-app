import type { CurrentUser } from '@/features/profile/types/profile';
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

export function mapCurrentUser(currentUser: CurrentUser): Profile {
  return {
    id: currentUser.profile.id,

    name: currentUser.profile.name,
    username: currentUser.profile.username,

    bio: currentUser.profile.bio,
    avatarUrl: currentUser.profile.avatarUrl,

    email: currentUser.profile.email,
    phone: currentUser.profile.phone,

    isFollowing: false,
    isMe: true,

    stats: {
      posts: currentUser.stats.posts,
      followers: currentUser.stats.followers,
      following: currentUser.stats.following,
      likes: currentUser.stats.likes,
    },
  };
}
