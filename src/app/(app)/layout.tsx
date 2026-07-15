import type { ReactNode } from 'react';

import AppLayout from '@/components/layout/app/AppLayout';

interface AppGroupLayoutProps {
  children: ReactNode;
}

export default function AppGroupLayout({ children }: AppGroupLayoutProps) {
  return <AppLayout>{children}</AppLayout>;
}
