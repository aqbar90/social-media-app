export interface ProfileDto {
  id: number;

  name: string;
  username: string;

  bio: string | null;
  avatarUrl: string | null;

  email: string;
  phone: string;

  counts: {
    post: number;
    followers: number;
    following: number;
    likes: number;
  };

  isFollowing: boolean;
  isMe: boolean;
}
