import { Button } from '@/components/ui/button';

import SearchInput from './SearchInput';

import { X } from 'lucide-react';

interface SearchHeaderProps {
  keyword: string;
  onKeywordChange: (value: string) => void;
  onClose: () => void;
}

export default function SearchHeader({
  keyword,
  onKeywordChange,
  onClose,
}: SearchHeaderProps) {
  return (
    <header className='flex h-16 items-center gap-4 border-b border-border-primary px-4'>
      <SearchInput
        value={keyword}
        autoFocus
        onChange={onKeywordChange}
        onClear={() => onKeywordChange('')}
      />

      <Button
        type='button'
        variant='ghost'
        size='icon'
        onClick={onClose}
        className='size-6 lg:hidden'
      >
        <X className='size-4' />
      </Button>
    </header>
  );
}
