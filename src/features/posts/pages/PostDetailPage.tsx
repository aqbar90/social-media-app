'use client';

import PostDetail from '@/features/posts/components/PostDetail';
import PostDetailError from '@/features/posts/components/PostDetailError';
import PostDetailSkeleton from '@/features/posts/components/PostDetailSkeleton';
import { usePost } from '@/features/posts/hooks/usePosts';

interface PostDetailPageProps {
  postId: number;
}

export default function PostDetailPage({ postId }: PostDetailPageProps) {
  const { data, isPending, isError } = usePost(postId);

  if (isPending) {
    return <PostDetailSkeleton />;
  }

  if (isError || !data) {
    return <PostDetailError />;
  }

  return <PostDetail post={data.data} />;
}
