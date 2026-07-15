'use client';

import { useMemo, useState } from 'react';

import SearchEmpty from '../components/SearchEmpty';
import SearchError from '../components/SearchError';
import SearchLayout from '../components/SearchLayout';
import SearchLoading from '../components/SearchLoading';
import SearchOverlay from '../components/SearchOverlay';
import SearchResultList from '../components/SearchResultList';

import { useSearchUsers } from '../hooks/useSearchUsers';

import { SEARCH_DEBOUNCE_MS } from '../constants/search.constants';

import { useDebounce } from '@/lib/hooks/useDebounce';

export default function SearchContainer() {
  const [keyword, setKeyword] = useState('');

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

  const shouldShowOverlay = keyword.trim().length > 0;

  return (
    <SearchLayout
      keyword={keyword}
      onKeywordChange={setKeyword}
      onClose={() => {
        setKeyword('');
      }}
    >
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
              onSelect={() => {
                setKeyword('');
              }}
            />
          )}
        </SearchOverlay>
      )}
    </SearchLayout>
  );
}
