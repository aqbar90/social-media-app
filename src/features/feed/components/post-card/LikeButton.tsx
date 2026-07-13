'use client';

import { HeartIcon } from '@/lib/icons';

import type { Post } from '@/types/entities/post';

interface LikeButtonProps {
  post: Post;
  onLike?: () => void;
  disabled?: boolean;
}

export default function LikeButton({
  post,
  onLike,
  disabled = false,
}: LikeButtonProps) {
  return (
    <button
      type='button'
      aria-label={post.likedByMe ? 'Unlike post' : 'Like post'}
      disabled={disabled}
      onClick={onLike}
      className='transition-fast flex items-center gap-1.5 active:scale-95 disabled:pointer-events-none disabled:opacity-50'
    >
      <HeartIcon
        variant={post.likedByMe ? 'Bold' : 'Linear'}
        className={post.likedByMe ? 'text-danger' : 'text-foreground'}
      />

      <span className='text-sm font-semibold text-foreground lg:text-md'>
        {post.likeCount}
      </span>
    </button>
  );
}
