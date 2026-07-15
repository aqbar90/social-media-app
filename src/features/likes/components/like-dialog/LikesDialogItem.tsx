import Link from 'next/link';

import { UserAvatar } from '@/components/common';

import { getProfileRoute } from '@/lib/navigation/profile-route';

import type { PostAuthor } from '@/types/entities/post-author';

interface LikesDialogItemProps {
  user: PostAuthor;

  currentUsername?: string;

  action?: React.ReactNode;
}

export default function LikesDialogItem({
  user,
  currentUsername,
  action,
}: LikesDialogItemProps) {
  return (
    <div className='flex items-center justify-between gap-4 py-3'>
      <Link
        href={getProfileRoute({
          targetUsername: user.username,
          currentUsername,
        })}
        className='flex min-w-0 flex-1 items-center gap-3'
      >
        <UserAvatar
          src={user.avatarUrl}
          alt={user.username}
          size={44}
          className='md:size-16'
        />

        <div className='min-w-0 flex-1'>
          <p className='truncate text-sm font-bold text-foreground md:text-md'>
            {user.name}
          </p>

          <p className='truncate text-xs text-muted-foreground md:text-sm'>
            @{user.username}
          </p>
        </div>
      </Link>

      {action}
    </div>
  );
}
