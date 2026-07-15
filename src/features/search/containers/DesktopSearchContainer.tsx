'use client';

import { useMemo, useState } from 'react';

import SearchEmpty from '../components/SearchEmpty';
import SearchError from '../components/SearchError';
import SearchInput from '../components/SearchInput';
import SearchLoading from '../components/SearchLoading';
import SearchOverlay from '../components/SearchOverlay';
import SearchResultList from '../components/SearchResultList';

import { SEARCH_DEBOUNCE_MS } from '../constants/search.constants';
import { useSearchUsers } from '../hooks/useSearchUsers';

import { useDebounce } from '@/lib/hooks/useDebounce';

export default function DesktopSearchContainer() {
  const [keyword, setKeyword] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const debouncedKeyword = useDebounce(keyword, SEARCH_DEBOUNCE_MS);

  const {
    data,
    isPending,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchUsers({
    q: debouncedKeyword,
  });

  const users = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.pages.flatMap((page) => page.data.users);
  }, [data]);

  const shouldShowOverlay = isFocused && keyword.trim().length > 0;

  return (
    <div className='relative w-full'>
      <SearchInput
        value={keyword}
        placeholder='Search'
        onChange={setKeyword}
        onClear={() => setKeyword('')}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          window.setTimeout(() => {
            setIsFocused(false);
          }, 150);
        }}
      />

      {shouldShowOverlay && (
        <SearchOverlay>
          {isPending ? (
            <SearchLoading />
          ) : isError ? (
            <SearchError
              message={error instanceof Error ? error.message : undefined}
            />
          ) : users.length === 0 ? (
            <SearchEmpty />
          ) : (
            <SearchResultList
              users={users}
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
            />
          )}
        </SearchOverlay>
      )}
    </div>
  );
}
