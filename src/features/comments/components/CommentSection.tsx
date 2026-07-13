'use client';

import { useComments } from '@/features/comments/hooks/useComments';
import CommentList from './CommentList';
import CommentSkeleton from './CommentSkeleton';
import CommentError from './CommentError';
import CommentEmpty from './CommentEmpty';

import { useDeleteComment } from '../hooks/useDeleteComment';

interface CommentSectionProps {
  postId: number;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const commentParams = {
    page: 1,
    limit: 20,
  };

  const { data, isPending, isError } = useComments(postId, commentParams);

  const deleteCommentMutation = useDeleteComment();

  const comments = data?.data.comments ?? [];

  function handleDeleteComment(commentId: number) {
    deleteCommentMutation.mutate({
      commentId,
      postId,
      params: commentParams,
    });
  }

  if (isPending) {
    return <CommentSkeleton />;
  }

  if (isError) {
    return <CommentError />;
  }

  if (!comments.length) {
    return <CommentEmpty />;
  }

  return (
    <CommentList
      comments={comments}
      onDelete={handleDeleteComment}
      isDeleting={deleteCommentMutation.isPending}
    />
  );
}
