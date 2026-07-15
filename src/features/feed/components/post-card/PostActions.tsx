'use client';

import { useRouter } from 'next/navigation';

import CommentButton from './CommentButton';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
import ShareButton from './ShareButton';

import { useLikePost } from '@/features/likes/hooks/useLikePost';
import { useUnlikePost } from '@/features/likes/hooks/useUnlikePost';
import { useSavePost } from '@/features/save/hooks/useSavePost';
import { useSavedPostIds } from '@/features/save/hooks/useSavedPostIds';
import { useUnsavePost } from '@/features/save/hooks/useUnsavePost';

import type { Post } from '@/types/entities/post';

interface PostActionsProps {
  post: Post;
  onOpenLikes: () => void;
}

const noop = () => {};

export default function PostActions({ post, onOpenLikes }: PostActionsProps) {
  const router = useRouter();

  const likeMutation = useLikePost();
  const unlikeMutation = useUnlikePost();

  const saveMutation = useSavePost();
  const unsaveMutation = useUnsavePost();

  const { savedPostIds } = useSavedPostIds();

  const isLikePending = likeMutation.isPending || unlikeMutation.isPending;
  const isSavePending = saveMutation.isPending || unsaveMutation.isPending;

  const isSaved = savedPostIds.has(post.id);

  function handleLike() {
    if (isLikePending) return;

    if (post.likedByMe) {
      unlikeMutation.mutate(post.id);
      return;
    }

    likeMutation.mutate(post.id);
  }

  function handleComment() {
    router.push(`/posts/${post.id}`);
  }

  function handleSave() {
    if (isSavePending) return;

    if (isSaved) {
      unsaveMutation.mutate(post.id);
      return;
    }

    saveMutation.mutate(post.id);
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3 md:gap-4'>
        <LikeButton
          post={post}
          onLike={handleLike}
          onOpenLikes={onOpenLikes}
          disabled={isLikePending}
        />

        <CommentButton post={post} onComment={handleComment} />

        <ShareButton onShare={noop} />
      </div>

      <SaveButton
        isSaved={isSaved}
        onSave={handleSave}
        disabled={isSavePending}
      />
    </div>
  );
}
