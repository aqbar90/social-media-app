import type { Metadata } from 'next';

import { AuthProvider } from '@/lib/auth';
import { QueryProvider } from '@/lib/react-query/query-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Sociality',
  description: 'Modern Social Media Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body className='min-h-screen bg-background font-sans text-foreground antialiased'>
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
