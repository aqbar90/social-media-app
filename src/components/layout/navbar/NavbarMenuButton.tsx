import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { NavbarMenuButtonProps } from './navbar.types';

export default function NavbarMenuButton({
  open,
  onToggle,
}: NavbarMenuButtonProps) {
  return (
    <Button
      type='button'
      variant='ghost'
      size='icon'
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onToggle}
      className='text-foreground hover:bg-transparent hover:opacity-80 active:scale-95'
    >
      {open ? <X className='size-6' /> : <Menu className='size-6' />}
    </Button>
  );
}
