import PostCard from './post-card/PostCard';

import type { Post } from '@/types/entities/post';

interface TimelineListProps {
  posts: Post[];
}

export default function TimelineList({ posts }: TimelineListProps) {
  return (
    <section className='flex flex-col gap-4 md:gap-6'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
