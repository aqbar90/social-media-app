import type { PropsWithChildren } from 'react';

import HomeNavbar from '../navbar/HomeNavbar';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HomeNavbar />

      <main>{children}</main>
    </>
  );
}
