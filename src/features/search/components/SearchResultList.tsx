'use client';

import { useEffect, useRef } from 'react';

import type { SearchUser } from '../types/search';

import SearchUserCard from './SearchUserCard';

interface SearchResultListProps {
  users: SearchUser[];
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage?: () => void;
  onSelect?: () => void;
}

export default function SearchResultList({
  users,
  hasNextPage = false,
  isFetchingNextPage = false,
  fetchNextPage,
  onSelect,
}: SearchResultListProps) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || !fetchNextPage) {
      return;
    }

    const target = loadMoreRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        rootMargin: '200px',
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className='flex flex-col'>
      {users.map((user) => (
        <SearchUserCard key={user.id} user={user} onSelect={onSelect} />
      ))}

      <div ref={loadMoreRef} className='h-1 w-full' />
    </div>
  );
}
