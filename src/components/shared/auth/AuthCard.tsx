import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <section
      className={cn(
        'container-auth auth-card auth-card-padding relative z-10 flex flex-col items-center gap-4 md:gap-6',
        className
      )}
    >
      {children}
    </section>
  );
}
