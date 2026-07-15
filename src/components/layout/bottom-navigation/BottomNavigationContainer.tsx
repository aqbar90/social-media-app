import type { PropsWithChildren } from 'react';

export default function BottomNavigationContainer({
  children,
}: PropsWithChildren) {
  return (
    <div className='fixed inset-x-0 bottom-4 z-fixed flex justify-center md:bottom-6'>
      <nav className='layout-bottom-navigation flex items-center justify-center gap-11 rounded-full border border-border-primary bg-surface-primary/90 px-4 backdrop-blur-xl'>
        {children}
      </nav>
    </div>
  );
}
