import type { Metadata } from 'next';

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
    <html lang='en'>
      <body className='min-h-screen font-sans antialiased'>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
