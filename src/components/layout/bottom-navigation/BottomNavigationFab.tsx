import Link from 'next/link';

import { AddIcon } from '@/lib/icons';

export default function BottomNavigationFab() {
  return (
    <Link
      href='/posts/create'
      aria-label='Create post'
      className='flex size-11 items-center justify-center rounded-full bg-primary text-text-primary transition-fast hover:opacity-90 md:size-12'
    >
      <AddIcon />
    </Link>
  );
}
