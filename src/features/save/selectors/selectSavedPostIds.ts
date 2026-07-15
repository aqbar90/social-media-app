import type { SavedPostsResponse } from '../types/save';

export function selectSavedPostIds(
  response: SavedPostsResponse | undefined
): Set<number> {
  if (!response) {
    return new Set();
  }

  return new Set(response.data.posts.map((post) => post.id));
}
