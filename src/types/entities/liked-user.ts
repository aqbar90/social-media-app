export interface LikedUser {
  id: number;

  username: string;

  name: string;

  avatarUrl: string | null;

  isFollowedByMe: boolean;

  isMe: boolean;

  followsMe: boolean;
}
