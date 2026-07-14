import PostThumbnail from '@/features/profile/components/PostThumbnail';

import type { Post } from '@/types/entities/post';

interface SavedGridProps {
  posts: Post[];
}

export default function SavedGrid({ posts }: SavedGridProps) {
  return (
    <section className='grid grid-cols-3 gap-1 lg:gap-2'>
      {posts.map((post) => (
        <PostThumbnail key={post.id} post={post} />
      ))}
    </section>
  );
}
