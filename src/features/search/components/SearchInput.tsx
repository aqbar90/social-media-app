import { Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
}

export default function SearchInput({
  value = '',
  placeholder = 'Search',
  onChange,
  onClear,
  showClearButton = false,
}: SearchInputProps) {
  return (
    <div className='flex h-10 w-full items-center gap-2 rounded-full border border-border-primary bg-surface-secondary px-3'>
      <Search className='size-5 shrink-0 text-text-secondary' />

      <Input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
        className='h-auto border-0 bg-transparent p-0 text-sm text-text-primary placeholder:text-text-secondary focus-visible:ring-0'
      />

      {showClearButton && (
        <Button
          type='button'
          variant='ghost'
          size='icon'
          onClick={onClear}
          className='size-4 shrink-0 p-0'
        >
          <X className='size-4 text-text-secondary' />
        </Button>
      )}
    </div>
  );
}
