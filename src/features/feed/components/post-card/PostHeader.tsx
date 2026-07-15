import Link from 'next/link';

import { UserAvatar } from '@/components/common';

import { useAuth } from '@/lib/auth';
import { formatRelativeTime } from '@/lib/date/formatRelativeTime';
import { getProfileRoute } from '@/lib/navigation/profile-route';

import type { PostAuthor } from '@/types/entities/post-author';

interface PostHeaderProps {
  author: PostAuthor;
  createdAt: string;
}

export default function PostHeader({ author, createdAt }: PostHeaderProps) {
  const { currentUser } = useAuth();

  const profileHref = getProfileRoute({
    targetUsername: author.username,
    currentUsername: currentUser?.username,
  });

  return (
    <header className='flex items-center gap-2 lg:gap-3'>
      <Link
        href={profileHref}
        className='flex min-w-0 flex-1 items-center gap-2 lg:gap-3'
      >
        <UserAvatar
          src={author.avatarUrl}
          alt={author.username}
          size={44}
          className='lg:size-16'
        />

        <div className='min-w-0'>
          <h3 className='truncate text-sm font-bold text-foreground lg:text-md'>
            {author.username}
          </h3>
        </div>
      </Link>

      <time
        dateTime={createdAt}
        className='shrink-0 text-xs text-muted-foreground lg:text-sm'
      >
        {formatRelativeTime(createdAt)}
      </time>
    </header>
  );
}
