'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';

export default function NavbarSearchInput() {
  const router = useRouter();

  return (
    <div
      className='layout-navbar-search relative cursor-text'
      onClick={() => router.push('/search')}
    >
      <Search className='text-text-placeholder absolute top-1/2 left-4 size-5 -translate-y-1/2' />

      <Input
        type='search'
        placeholder='Search'
        readOnly
        tabIndex={-1}
        className='bg-surface-primary border-border-primary text-text-primary placeholder:text-text-placeholder h-12 rounded-full border pl-11 shadow-none focus-visible:ring-0'
      />
    </div>
  );
}
