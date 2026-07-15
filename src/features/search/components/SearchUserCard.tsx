import UserAvatar from '@/components/common/UserAvatar';

import type { SearchUser } from '../types/search';

interface SearchUserCardProps {
  user: SearchUser;
  onClick?: (user: SearchUser) => void;
}

export default function SearchUserCard({ user, onClick }: SearchUserCardProps) {
  return (
    <button
      type='button'
      onClick={() => onClick?.(user)}
      className='flex w-full items-center gap-2 rounded-xl p-1 text-left transition-colors hover:bg-surface-hover'
    >
      <UserAvatar src={user.avatarUrl ?? undefined} alt={user.name} size={48} />

      <div className='flex min-w-0 flex-1 flex-col justify-center'>
        <p className='truncate text-sm font-bold tracking-tight text-text-primary'>
          {user.name}
        </p>

        <p className='truncate text-sm tracking-tight text-text-secondary'>
          @{user.username}
        </p>
      </div>
    </button>
  );
}
