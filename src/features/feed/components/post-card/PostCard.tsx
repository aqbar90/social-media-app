'use client';

import { useState } from 'react';

import PostActions from './PostActions';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostMedia from './PostMedia';

import LikesDialog from '@/features/likes/components/like-dialog/LikesDialog';

import type { Post } from '@/types/entities/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [likesDialogOpen, setLikesDialogOpen] = useState(false);

  return (
    <>
      <article className='flex flex-col gap-2 md:gap-3'>
        <div className='flex flex-col gap-2 md:gap-3'>
          <PostHeader author={post.author} createdAt={post.createdAt} />

          <PostMedia imageUrl={post.imageUrl} username={post.author.username} />

          <PostActions
            post={post}
            onOpenLikes={() => setLikesDialogOpen(true)}
          />
        </div>

        <PostContent username={post.author.username} caption={post.caption} />
      </article>

      <LikesDialog
        postId={post.id}
        open={likesDialogOpen}
        onOpenChange={setLikesDialogOpen}
      />
    </>
  );
}
