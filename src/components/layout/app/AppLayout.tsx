import type { PropsWithChildren } from 'react';

import { BottomNavigation } from '../bottom-navigation';
import HomeNavbar from '../navbar/HomeNavbar';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HomeNavbar />

      <main className='pb-20 md:pb-24'>{children}</main>

      <BottomNavigation />
    </>
  );
}
