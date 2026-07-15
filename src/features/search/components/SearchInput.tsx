'use client';

import { Search, X } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchInputProps {
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function SearchInput({
  value,
  placeholder = 'Search',
  autoFocus = false,
  onChange,
  onClear,
  onBlur,
  onFocus,
}: SearchInputProps) {
  return (
    <div className='relative w-full'>
      <Search className='text-text-placeholder absolute top-1/2 left-4 size-5 -translate-y-1/2' />

      <Input
        type='search'
        value={value}
        autoFocus={autoFocus}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='none'
        spellCheck={false}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className='bg-surface-primary border-border-primary text-text-primary placeholder:text-text-placeholder h-12 rounded-full border pr-12 pl-11 shadow-none focus-visible:ring-0'
      />

      {value.length > 0 && (
        <Button
          type='button'
          variant='ghost'
          size='icon'
          onClick={onClear}
          className='absolute top-1/2 right-2 size-8 -translate-y-1/2 rounded-full'
        >
          <X className='size-4' />
        </Button>
      )}
    </div>
  );
}
