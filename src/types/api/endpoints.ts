export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },

  PROFILE: {
    ME: '/me',
    UPDATE: '/me',
  },

  USERS: {
    SEARCH: '/users/search',
    DETAIL: (username: string) => `/users/${username}`,
    POSTS: (username: string) => `/users/${username}/posts`,
    LIKES: (username: string) => `/users/${username}/likes`,
  },

  FEED: {
    LIST: '/feed',
  },

  POSTS: {
    LIST: '/posts',

    CREATE: '/posts',

    DETAIL: (postId: number | string) => `/posts/${postId}`,

    DELETE: (postId: number | string) => `/posts/${postId}`,
  },

  COMMENTS: {
    LIST: (postId: number | string) => `/posts/${postId}/comments`,
    CREATE: (postId: number | string) => `/posts/${postId}/comments`,
    DELETE: (commentId: number | string) => `/comments/${commentId}`,
  },

  LIKES: {
    LIKE: (postId: number | string) => `/posts/${postId}/like`,
    UNLIKE: (postId: number | string) => `/posts/${postId}/like`,
    LIST: (postId: number | string) => `/posts/${postId}/likes`,
    MY_LIKES: '/me/likes',
  },

  SAVES: {
    SAVE: (postId: number | string) => `/posts/${postId}/save`,
    UNSAVE: (postId: number | string) => `/posts/${postId}/save`,
    MY_SAVED: '/me/saved',
  },

  FOLLOWS: {
    FOLLOW: (username: string) => `/follow/${username}`,
    UNFOLLOW: (username: string) => `/follow/${username}`,
    FOLLOWERS: (username: string) => `/users/${username}/followers`,
    FOLLOWING: (username: string) => `/users/${username}/following`,
    MY_FOLLOWERS: '/me/followers',
    MY_FOLLOWING: '/me/following',
  },
} as const;
