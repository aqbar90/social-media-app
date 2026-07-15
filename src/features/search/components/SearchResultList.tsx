import type { SearchUser } from '../types/search';

import SearchUserCard from './SearchUserCard';

interface SearchResultListProps {
  users: SearchUser[];
  onUserClick?: (user: SearchUser) => void;
}

export default function SearchResultList({
  users,
  onUserClick,
}: SearchResultListProps) {
  return (
    <div className='flex flex-col gap-4'>
      {users.map((user) => (
        <SearchUserCard key={user.id} user={user} onClick={onUserClick} />
      ))}
    </div>
  );
}
