export interface PostAuthor {
  id: number;

  username: string;

  name: string;

  avatarUrl: string | null;

  isFollowedByMe?: boolean;

  isMe?: boolean;

  followsMe?: boolean;
}
