import CommentItem from './CommentItem';

import type { Comment } from '@/types/entities/comment';

interface CommentListProps {
  comments: Comment[];
  onDelete?: (commentId: number) => void;
  isDeleting?: boolean;
}

export default function CommentList({
  comments,
  onDelete,
  isDeleting = false,
}: CommentListProps) {
  return (
    <div className='flex flex-col gap-4'>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onDelete={onDelete}
          isDeleting={isDeleting}
        />
      ))}
    </div>
  );
}
