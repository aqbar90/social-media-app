'use client';

import { useEffect, useRef } from 'react';

import FollowButton from './FollowButton';
import LikesDialogEmpty from './LikesDialogEmpty';
import LikesDialogError from './LikesDialogError';
import LikesDialogHeader from './LikesDialogHeader';
import LikesDialogItem from './LikesDialogItem';
import LikesDialogList from './LikesDialogList';
import LikesDialogSkeleton from './LikesDialogSkeleton';

import { useAuth } from '@/lib/auth';

import { usePostLikes } from '@/features/likes/hooks/usePostLikes';

interface LikesDialogSectionProps {
  postId: number;
  mobile?: boolean;
}

export default function LikesDialogSection({
  postId,
  mobile = false,
}: LikesDialogSectionProps) {
  const { currentUser } = useAuth();

  const loadMoreRef = useRef<HTMLDivElement>(null);

  const query = usePostLikes(postId, {
    page: 1,
    limit: 20,
  });

  const users = query.data?.pages.flatMap((page) => page.data.users) ?? [];

  useEffect(() => {
    if (!loadMoreRef.current || !query.hasNextPage) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (
        entry.isIntersecting &&
        query.hasNextPage &&
        !query.isFetchingNextPage
      ) {
        void query.fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [query]);

  if (query.isPending) {
    return <LikesDialogSkeleton />;
  }

  if (query.isError) {
    return <LikesDialogError onRetry={() => void query.refetch()} />;
  }

  return (
    <>
      <LikesDialogHeader mobile={mobile} />

      <LikesDialogList users={users}>
        {users.map((user) => (
          <LikesDialogItem
            key={user.id}
            user={user}
            currentUsername={currentUser?.username}
            action={<FollowButton user={user} />}
          />
        ))}

        <div ref={loadMoreRef} />

        {query.isFetchingNextPage && <LikesDialogSkeleton count={1} />}
      </LikesDialogList>

      {users.length === 0 && <LikesDialogEmpty />}
    </>
  );
}
