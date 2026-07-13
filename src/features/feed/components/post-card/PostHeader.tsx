import { UserAvatar } from '@/components/common';

import { formatRelativeTime } from '@/lib/date/formatRelativeTime';

import type { PostAuthor } from '@/types/entities/post-author';

interface PostHeaderProps {
  author: PostAuthor;
  createdAt: string;
}

export default function PostHeader({ author, createdAt }: PostHeaderProps) {
  return (
    <header className='flex items-center gap-2 lg:gap-3'>
      <UserAvatar
        src={author.avatarUrl}
        alt={author.username}
        size={44}
        className='lg:size-16'
      />

      <div className='flex min-w-0 flex-1 flex-col'>
        <h3 className='text-sm font-bold text-foreground lg:text-md'>
          {author.username}
        </h3>

        <time
          dateTime={createdAt}
          className='text-xs text-muted-foreground lg:text-sm'
        >
          {formatRelativeTime(createdAt)}
        </time>
      </div>
    </header>
  );
}
