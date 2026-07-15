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
    <header className='flex items-center gap-2 md:gap-3'>
      <Link
        href={profileHref}
        className='flex min-w-0 flex-1 items-center gap-2 md:gap-3'
      >
        <UserAvatar
          src={author.avatarUrl}
          alt={author.username}
          size={44}
          className='md:size-16'
        />

        <div className='flex min-w-0 flex-1 flex-col'>
          <h3 className='truncate text-sm font-bold text-text-primary md:text-md'>
            {author.username}
          </h3>

          <time
            dateTime={createdAt}
            className='text-xs text-text-tertiary md:text-sm'
          >
            {formatRelativeTime(createdAt)}
          </time>
        </div>
      </Link>
    </header>
  );
}
