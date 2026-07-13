'use client';

import { useComments } from '@/features/comments/hooks/useComments';
import CommentList from './CommentList';
import CommentSkeleton from './CommentSkeleton';
import CommentError from './CommentError';
import CommentEmpty from './CommentEmpty';

interface CommentSectionProps {
  postId: number;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const { data, isPending, isError } = useComments(postId, {
    page: 1,
    limit: 20,
  });

  if (isPending) {
    return <p>Loading comments...</p>;
  }

  if (isError) {
    return <p>Failed to load comments.</p>;
  }

  const comments = data?.data.comments ?? [];

  if (isPending) {
    return <CommentSkeleton />;
  }

  if (isError) {
    return <CommentError />;
  }

  if (!comments.length) {
    return <CommentEmpty />;
  }

  return <CommentList comments={comments} />;

  return (
    <div className='flex flex-col gap-4'>
      {comments.map((comment) => (
        <div key={comment.id}>
          <span className='font-bold'>{comment.author.username}</span>{' '}
          {comment.text}
        </div>
      ))}
      <CommentList comments={comments} />;
    </div>
  );
}
