'use client';

import { HeartIcon } from '@/lib/icons';

import type { Post } from '@/types/entities/post';

interface LikeButtonProps {
  post: Post;
  onLike?: () => void;
  onOpenLikes?: () => void;
  disabled?: boolean;
}

export default function LikeButton({
  post,
  onLike,
  onOpenLikes,
  disabled = false,
}: LikeButtonProps) {
  return (
    <div className='flex items-center gap-1.5'>
      <button
        type='button'
        aria-label={post.likedByMe ? 'Unlike post' : 'Like post'}
        disabled={disabled}
        onClick={onLike}
        className='transition-fast hover:opacity-80 disabled:pointer-events-none disabled:opacity-50'
      >
        <HeartIcon
          variant={post.likedByMe ? 'Bold' : 'Linear'}
          className={post.likedByMe ? 'text-danger' : 'text-text-primary'}
        />
      </button>

      <button
        type='button'
        onClick={onOpenLikes}
        className='transition-fast text-sm font-semibold text-text-primary hover:opacity-80 md:text-md'
      >
        {post.likeCount}
      </button>
    </div>
  );
}
