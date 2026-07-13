import PostActions from './PostActions';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostMedia from './PostMedia';

import type { Post } from '@/types/entities/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className='flex flex-col gap-2 lg:gap-3'>
      <PostHeader author={post.author} createdAt={post.createdAt} />

      <PostMedia imageUrl={post.imageUrl} username={post.author.username} />

      <PostActions post={post} />

      <PostContent username={post.author.username} caption={post.caption} />
    </article>
  );
}
