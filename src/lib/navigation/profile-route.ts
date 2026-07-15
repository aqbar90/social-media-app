export interface ProfileRouteOptions {
  targetUsername: string;
  currentUsername: string | null | undefined;
}

export function getProfileRoute({
  targetUsername,
  currentUsername,
}: ProfileRouteOptions): string {
  if (
    currentUsername &&
    targetUsername.toLowerCase() === currentUsername.toLowerCase()
  ) {
    return '/profile';
  }

  return `/users/${targetUsername}`;
}
