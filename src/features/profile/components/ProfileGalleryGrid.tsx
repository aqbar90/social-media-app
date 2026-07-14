import PostThumbnail from './PostThumbnail';

import type { Post } from '@/types/entities/post';

interface ProfileGalleryGridProps {
  posts: Post[];
}

export default function ProfileGalleryGrid({ posts }: ProfileGalleryGridProps) {
  return (
    <section className='grid grid-cols-3 gap-1 lg:gap-2'>
      {posts.map((post) => (
        <PostThumbnail key={post.id} post={post} />
      ))}
    </section>
  );
}
