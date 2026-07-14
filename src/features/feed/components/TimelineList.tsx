import PostCard from './post-card/PostCard';

import type { Post } from '@/types/entities/post';

interface TimelineListProps {
  posts: Post[];
}

export default function TimelineList({ posts }: TimelineListProps) {
  return (
    <section className='flex flex-col gap-8'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
