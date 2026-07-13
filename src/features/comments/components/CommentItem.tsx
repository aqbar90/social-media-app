import { UserAvatar } from '@/components/common';
import { formatRelativeTime } from '@/lib/date/formatRelativeTime';

import type { Comment } from '@/types/entities/comment';

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <article className='flex items-start gap-3'>
      <UserAvatar
        src={comment.author.avatarUrl}
        alt={comment.author.username}
      />

      <div className='flex min-w-0 flex-1 flex-col'>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-bold text-foreground'>
            {comment.author.username}
          </span>

          <span className='text-xs text-muted-foreground'>
            {formatRelativeTime(comment.createdAt)}
          </span>
        </div>

        <p className='text-sm text-foreground'>{comment.text}</p>
      </div>
    </article>
  );
}
