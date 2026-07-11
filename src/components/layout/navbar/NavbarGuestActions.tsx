import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NavbarGuestActions() {
  return (
    <div className='hidden items-center gap-3 lg:flex'>
      <Button
        asChild
        variant='outline'
        className='h-11 w-32 rounded-full border-border-primary font-bold transition-all duration-200 hover:opacity-90 active:scale-95'
      >
        <Link href='/login'>Login</Link>
      </Button>

      <Button
        asChild
        className='h-11 w-32 rounded-full font-bold transition-all duration-200 hover:opacity-90 active:scale-95'
      >
        <Link href='/register'>Register</Link>
      </Button>
    </div>
  );
}
