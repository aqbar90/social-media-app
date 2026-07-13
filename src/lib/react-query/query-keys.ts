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
    all: ['feed'] as const,

    list: (params: PaginationParams) =>
      [...QUERY_KEYS.feed.all, params] as const,
  },

  posts: {
    all: ['posts'] as const,

    list: (params: PaginationParams) =>
      [...QUERY_KEYS.posts.all, params] as const,

    detail: (id: number) => [...QUERY_KEYS.posts.all, 'detail', id] as const,
  },

  comments: {
    list: (postId: number, params: PaginationParams) =>
      ['comments', postId, params] as const,
  },

  likes: {
    list: (postId: number, params: PaginationParams) =>
      ['likes', postId, params] as const,

    my: (params: PaginationParams) => ['likes', 'me', params] as const,
  },

  save: {
    my: (params: PaginationParams) => ['save', 'me', params] as const,
  },

  follow: {
    followers: (username: string, params: PaginationParams) =>
      ['follow', 'followers', username, params] as const,

    following: (username: string, params: PaginationParams) =>
      ['follow', 'following', username, params] as const,

    myFollowers: (params: PaginationParams) =>
      ['follow', 'me', 'followers', params] as const,

    myFollowing: (params: PaginationParams) =>
      ['follow', 'me', 'following', params] as const,
  },

  mutation: {
    likes: {
      like: ['likes', 'like'] as const,
      unlike: ['likes', 'unlike'] as const,
    },

    comments: {
      create: ['comments', 'create'] as const,
      delete: ['comments', 'delete'] as const,
    },

    follow: {
      follow: ['follow', 'follow'] as const,
      unfollow: ['follow', 'unfollow'] as const,
    },

    posts: {
      create: ['posts', 'create'] as const,
      delete: ['posts', 'delete'] as const,
    },

    save: {
      save: ['save', 'save'] as const,
      unsave: ['save', 'unsave'] as const,
    },

    profile: {
      update: ['profile', 'update'] as const,
    },

    auth: {
      login: ['auth', 'login'] as const,
      register: ['auth', 'register'] as const,
    },
  },
} as const;
