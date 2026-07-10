import Link from 'next/link';

import { cn } from '@/lib/utils';

interface AuthFooterProps {
  label: string;
  linkLabel: string;
  href: string;
  className?: string;
}

export function AuthFooter({
  label,
  linkLabel,
  href,
  className,
}: AuthFooterProps) {
  return (
    <div className={cn('flex items-center justify-center gap-1', className)}>
      <span className='font-semibold text-sm text-text-inverse tracking-tight md:text-md'>
        {label}
      </span>

      <Link
        href={href}
        className='font-bold text-sm tracking-tight text-text-brand transition-fast active:scale-95 md:text-md'
      >
        {linkLabel}
      </Link>
    </div>
  );
}
