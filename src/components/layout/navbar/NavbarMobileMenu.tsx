import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface NavbarMobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function NavbarMobileMenu({
  open,
  onClose,
}: NavbarMobileMenuProps) {
  if (!open) return null;

  return (
    <div className='bg-background lg:hidden'>
      <div className='layout-container px-4'>
        <div className='flex gap-4'>
          <Button
            asChild
            variant='outline'
            className='h-14 flex-1 rounded-full font-bold transition-fast active:scale-95'
          >
            <Link href='/login' onClick={onClose}>
              Login
            </Link>
          </Button>

          <Button
            asChild
            className='h-14 flex-1 rounded-full font-bold transition-fast active:scale-95'
          >
            <Link href='/register' onClick={onClose}>
              Register
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
