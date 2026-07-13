'use client';

import { CommentIcon } from '@/lib/icons';

import type { Post } from '@/types/entities/post';

interface CommentButtonProps {
  post: Post;
  onComment?: () => void;
  disabled?: boolean;
}

export default function CommentButton({
  post,
  onComment,
  disabled = false,
}: CommentButtonProps) {
  return (
    <button
      type='button'
      aria-label='View comments'
      disabled={disabled}
      onClick={onComment}
      className='transition-fast flex items-center gap-1.5 active:scale-95 disabled:pointer-events-none disabled:opacity-50'
    >
      <CommentIcon />

      <span className='text-sm font-semibold text-foreground lg:text-md'>
        {post.commentCount}
      </span>
    </button>
  );
}
