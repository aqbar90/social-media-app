import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: ReactNode;
  className?: string;
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <main className={cn('auth-layout auth-theme', className)}>{children}</main>
  );
}
