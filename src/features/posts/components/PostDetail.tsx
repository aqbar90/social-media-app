'use client';

import CommentComposer from '@/features/comments/components/CommentComposer';
import CommentSection from '@/features/comments/components/CommentSection';
import { useCreateComment } from '@/features/comments/hooks/useCreateComment';
import { CreateCommentFormValues } from '@/features/comments/schemas/create-comment.schema';
import PostActions from '@/features/feed/components/post-card/PostActions';
import PostContent from '@/features/feed/components/post-card/PostContent';
import PostHeader from '@/features/feed/components/post-card/PostHeader';
import PostMedia from '@/features/feed/components/post-card/PostMedia';

import type { Post } from '@/types/entities/post';
import { toast } from 'sonner';

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const createCommentMutation = useCreateComment();

  function handleCreateComment(values: CreateCommentFormValues) {
    createCommentMutation.mutate(
      {
        postId: post.id,
        payload: {
          text: values.text,
        },
      },
      {
        onError(error) {
          toast.error(
            error instanceof Error ? error.message : 'Failed to create comment.'
          );
        },
      }
    );
  }

  return (
    <article className='mx-auto flex w-full max-w-content flex-col gap-3'>
      <PostHeader author={post.author} createdAt={post.createdAt} />

      <PostMedia imageUrl={post.imageUrl} username={post.author.username} />

      <PostActions post={post} />

      <PostContent username={post.author.username} caption={post.caption} />

      <CommentSection postId={post.id} />

      <CommentComposer
        isPending={createCommentMutation.isPending}
        onSubmit={handleCreateComment}
      />
    </article>
  );
}
