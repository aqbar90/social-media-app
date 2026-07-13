import PostCard from './post-card/PostCard';

import type { Post } from '@/types/entities/post';

interface FeedListProps {
  posts: Post[];
}

export default function FeedList({ posts }: FeedListProps) {
  return (
    <section className='flex flex-col gap-8'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
