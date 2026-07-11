import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

export default function NavbarSearchInput() {
  return (
    <div className='layout-navbar-search relative'>
      <Search className='text-text-placeholder absolute top-1/2 left-4 size-5 -translate-y-1/2' />

      <Input
        type='search'
        placeholder='Search'
        className='bg-surface-primary border-border-primary text-text-primary placeholder:text-text-placeholder h-12 rounded-full border pl-11 shadow-none focus-visible:ring-0'
      />
    </div>
  );
}
