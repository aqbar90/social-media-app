import { Button } from '@/components/ui/button';
import SearchInput from './SearchInput';

import { X } from 'lucide-react';

export default function SearchHeader() {
  return (
    <header className='flex h-16 items-center gap-4 border-b border-border-primary px-4'>
      <SearchInput />

      <Button
        type='button'
        variant='ghost'
        size='icon'
        className='size-6 lg:hidden'
      >
        <X className='size-4' />
      </Button>
    </header>
  );
}
