'use client';

import Link from 'next/link';

import type { SearchUser } from '../types/search';

import UserAvatar from '@/components/common/UserAvatar';

interface SearchUserCardProps {
  user: SearchUser;
  onSelect?: () => void;
}

export default function SearchUserCard({
  user,
  onSelect,
}: SearchUserCardProps) {
  return (
    <Link
      href={`/users/${user.username}`}
      onClick={onSelect}
      className='flex items-center gap-2 rounded-xl p-2 transition-colors hover:bg-surface-secondary'
    >
      <UserAvatar src={user.avatarUrl} alt={user.name} size={48} />

      <div className='flex min-w-0 flex-1 flex-col'>
        <span className='truncate text-sm font-bold text-text-primary'>
          {user.name}
        </span>

        <span className='truncate text-sm text-text-secondary'>
          @{user.username}
        </span>
      </div>
    </Link>
  );
}
