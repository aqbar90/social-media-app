import { Search } from 'lucide-react';

export default function SearchEmpty() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-10 text-center'>
      <Search className='size-8 text-text-secondary' />

      <div className='space-y-1'>
        <h3 className='text-sm font-bold tracking-tight text-text-primary'>
          No results found
        </h3>

        <p className='text-sm tracking-tight text-text-secondary'>
          Try searching with a different username or name.
        </p>
      </div>
    </div>
  );
}
