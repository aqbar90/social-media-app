import { PaginationParams } from '@/types/api/pagination';

export const QUERY_KEYS = {
  auth: {
    currentUser: ['auth', 'current-user'] as const,
  },

  profile: {
    currentUser: ['profile', 'current-user'] as const,
    user: (username: string) => ['profile', username] as const,
  },

  users: {
    search: (keyword: string) => ['users', 'search', keyword] as const,
    posts: (username: string) => ['users', username, 'posts'] as const,
    likes: (username: string) => ['users', username, 'likes'] as const,
    followers: (username: string) => ['users', username, 'followers'] as const,
    following: (username: string) => ['users', username, 'following'] as const,
  },

  feed: {
    list: (params: PaginationParams) => ['feed', params] as const,
  },

  posts: {
    list: (params: PaginationParams) => ['posts', params] as const,

    detail: (postId: number) => ['posts', postId] as const,
  },

  comments: {
    list: (postId: number, params: PaginationParams) =>
      ['comments', postId, params] as const,
  },

  likes: {
    list: (postId: number | string) => ['posts', postId, 'likes'] as const,
    myLikes: ['likes', 'me'] as const,
  },

  saves: {
    mySaved: ['saved', 'me'] as const,
  },

  follows: {
    myFollowers: ['follow', 'me', 'followers'] as const,
    myFollowing: ['follow', 'me', 'following'] as const,
  },
} as const;
