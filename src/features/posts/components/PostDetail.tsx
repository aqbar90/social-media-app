'use client';

import CommentComposer from '@/features/comments/components/CommentComposer';
import CommentSection from '@/features/comments/components/CommentSection';
import { useCreateComment } from '@/features/comments/hooks/useCreateComment';
import { CreateCommentFormValues } from '@/features/comments/schemas/create-comment.schema';
import PostActions from '@/features/feed/components/post-card/PostActions';
import PostContent from '@/features/feed/components/post-card/PostContent';
import PostHeader from '@/features/feed/components/post-card/PostHeader';
import PostMedia from '@/features/feed/components/post-card/PostMedia';
import LikesDialog from '@/features/likes/components/like-dialog/LikesDialog';

import type { Post } from '@/types/entities/post';
import { useState } from 'react';

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const createCommentMutation = useCreateComment();

  const commentParams = {
    page: 1,
    limit: 20,
  };

  function handleCreateComment(values: CreateCommentFormValues) {
    createCommentMutation.mutate({
      postId: post.id,
      payload: {
        text: values.text,
      },
      params: commentParams,
    });
  }

  const [isLikesDialogOpen, setIsLikesDialogOpen] = useState(false);

  return (
    <article className='mx-auto flex w-full max-w-content flex-col gap-3'>
      <PostHeader author={post.author} createdAt={post.createdAt} />

      <PostMedia imageUrl={post.imageUrl} username={post.author.username} />

      <PostActions post={post} onOpenLikes={() => setIsLikesDialogOpen(true)} />

      <PostContent username={post.author.username} caption={post.caption} />
      <LikesDialog
        postId={post.id}
        open={isLikesDialogOpen}
        onOpenChange={setIsLikesDialogOpen}
      />

      <CommentSection postId={post.id} />

      <CommentComposer
        isPending={createCommentMutation.isPending}
        onSubmit={handleCreateComment}
      />
    </article>
  );
}
