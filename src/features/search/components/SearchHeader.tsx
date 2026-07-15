import { Search, X } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchHeader() {
  return (
    <header className='flex h-16 items-center gap-4 border-b border-border-primary px-4'>
      <div className='flex h-10 flex-1 items-center gap-2 rounded-full border border-border-primary bg-surface-secondary px-3'>
        <Search className='size-5 text-text-secondary' />

        <Input
          type='text'
          placeholder='Search'
          className='h-auto border-0 bg-transparent p-0 text-sm text-text-primary placeholder:text-text-secondary focus-visible:ring-0'
        />
      </div>

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
