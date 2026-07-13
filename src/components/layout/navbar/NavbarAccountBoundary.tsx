'use client';

import type { PropsWithChildren } from 'react';

import { useAuth } from '@/lib/auth';

export default function NavbarAccountBoundary({ children }: PropsWithChildren) {
  const { isInitialized } = useAuth();

  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
}
