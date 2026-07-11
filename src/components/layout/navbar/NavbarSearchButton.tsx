import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { NavbarSearchButtonProps } from './navbar.types';

export default function NavbarSearchButton({
  onClick,
}: NavbarSearchButtonProps) {
  return (
    <Button
      type='button'
      variant='ghost'
      size='icon'
      aria-label='Search'
      onClick={onClick}
      className='text-foreground hover:bg-transparent hover:opacity-80 active:scale-95'
    >
      <Search className='size-5' />
    </Button>
  );
}
