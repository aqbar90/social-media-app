import type { PropsWithChildren } from 'react';

export default function NavbarContainer({ children }: PropsWithChildren) {
  return (
    <header className='bg-background border-border-primary h-16 border-b lg:h-20'>
      <div className='layout-container flex h-full items-center justify-between px-4 lg:px-0'>
        {children}
      </div>
    </header>
  );
}
