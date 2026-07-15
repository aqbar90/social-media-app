import type { PropsWithChildren } from 'react';

import SearchHeader from './SearchHeader';

interface SearchLayoutProps extends PropsWithChildren {
  keyword: string;
  onKeywordChange: (value: string) => void;
  onClose: () => void;
}

export default function SearchLayout({
  keyword,
  onKeywordChange,
  onClose,
  children,
}: SearchLayoutProps) {
  return (
    <section className='relative mx-auto flex w-full max-w-content flex-col'>
      <SearchHeader
        keyword={keyword}
        onKeywordChange={onKeywordChange}
        onClose={onClose}
      />

      {children}
    </section>
  );
}
