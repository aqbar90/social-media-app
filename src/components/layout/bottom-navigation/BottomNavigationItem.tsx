import Link from 'next/link';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface BottomNavigationItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
}

export default function BottomNavigationItem({
  href,
  label,
  icon,
  active = false,
}: BottomNavigationItemProps) {
  return (
    <Link
      href={href}
      className='flex w-24 flex-col items-center justify-center gap-1 md:gap-1'
    >
      <span
        className={cn(
          'flex items-center justify-center text-text-primary',
          active && 'text-primary'
        )}
      >
        {icon}
      </span>

      <span
        className={cn(
          'text-xs text-text-primary md:text-md',
          active ? 'font-bold text-primary' : 'font-normal'
        )}
      >
        {label}
      </span>
    </Link>
  );
}
