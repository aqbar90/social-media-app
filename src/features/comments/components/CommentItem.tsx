import { UserAvatar } from '@/components/common';
import { formatRelativeTime } from '@/lib/date/formatRelativeTime';

import type { Comment } from '@/types/entities/comment';
import { Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface CommentItemProps {
  comment: Comment;
  onDelete?: (commentId: number) => void;
  isDeleting?: boolean;
}

export default function CommentItem({
  comment,
  onDelete,
  isDeleting = false,
}: CommentItemProps) {
  return (
    <article className='flex items-start gap-3'>
      <UserAvatar
        src={comment.author.avatarUrl}
        alt={comment.author.username}
      />

      <div className='flex min-w-0 flex-1 flex-col'>
        <div className='flex items-center justify-between gap-3'>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-bold text-foreground'>
              {comment.author.username}
            </span>

            <span className='text-xs text-muted-foreground'>
              {formatRelativeTime(comment.createdAt)}
            </span>
          </div>

          {comment.isMine && onDelete && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  disabled={isDeleting}
                  className='transition-fast active:scale-95'
                >
                  <Trash2 className='size-4' />
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete comment?</AlertDialogTitle>

                  <AlertDialogDescription>
                    This action cannot be undone. This comment will be
                    permanently removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>

                  <AlertDialogAction onClick={() => onDelete?.(comment.id)}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        <p className='text-sm text-foreground'>{comment.text}</p>
      </div>
    </article>
  );
}
