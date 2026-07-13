'use client';

import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import ShareButton from './ShareButton';
import SaveButton from './SaveButton';

import type { Post } from '@/types/entities/post';
import { useLikePost } from '@/features/likes/hooks/useLikePost';
import { useUnlikePost } from '@/features/likes/hooks/useUnlikePost';
import { useRouter } from 'next/router';

interface PostActionsProps {
  post: Post;
}

const noop = () => {};

export default function PostActions({ post }: PostActionsProps) {
  const router = useRouter();

  const likeMutation = useLikePost();
  const unlikeMutation = useUnlikePost();

  const isLikePending = likeMutation.isPending || unlikeMutation.isPending;

  function handleLike() {
    if (isLikePending) {
      return;
    }

    if (post.likedByMe) {
      unlikeMutation.mutate(post.id);
      return;
    }

    likeMutation.mutate(post.id);
  }

  function handleComment() {
    router.push(`/posts/${post.id}`);
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3 lg:gap-4'>
        <LikeButton post={post} onLike={handleLike} disabled={isLikePending} />

        <CommentButton post={post} onComment={handleComment} />

        <ShareButton onShare={noop} />
      </div>

      <SaveButton onSave={noop} />
    </div>
  );
}
