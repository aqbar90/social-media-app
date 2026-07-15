import PostDetailPage from '@/features/posts/pages/PostDetailPage';

interface PostDetailRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PostDetailRouteProps) {
  const { id } = await params;

  return <PostDetailPage postId={Number(id)} />;
}
