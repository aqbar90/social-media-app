'use client';

import { useFollowUser } from '@/features/follow/hooks/useFollowUser';
import { useUnfollowUser } from '@/features/follow/hooks/useUnfollowUser';

import type { PostAuthor } from '@/types/entities/post-author';

interface FollowButtonProps {
  user: PostAuthor;
}

export default function FollowButton({ user }: FollowButtonProps) {
  const followMutation = useFollowUser();
  const unfollowMutation = useUnfollowUser();

  if (user.isMe) {
    return null;
  }

  const isPending = followMutation.isPending || unfollowMutation.isPending;

  function handleClick() {
    if (isPending) {
      return;
    }

    if (user.isFollowedByMe) {
      unfollowMutation.mutate(user.username);
      return;
    }

    followMutation.mutate(user.username);
  }

  return (
    <button
      type='button'
      disabled={isPending}
      onClick={handleClick}
      className='transition-fast min-w-20 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground active:scale-95 disabled:pointer-events-none disabled:opacity-50'
    >
      {user.isFollowedByMe ? 'Following' : 'Follow'}
    </button>
  );
}
