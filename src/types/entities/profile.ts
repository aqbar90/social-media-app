export interface Profile {
  id: number;

  name: string;
  username: string;

  bio: string | null;
  avatarUrl: string | null;

  email: string;
  phone: string;

  isFollowing: boolean;
  isMe: boolean;

  stats: {
    posts: number;
    followers: number;
    following: number;
    likes: number;
  };
}
