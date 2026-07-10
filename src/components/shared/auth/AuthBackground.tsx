import Image from 'next/image';

import desktopGradient from '@/assets/background/desktop-gradient.svg';
import mobileGradient from '@/assets/background/mobile-gradient.svg';

export function AuthBackground() {
  return (
    <>
      <Image
        src={desktopGradient}
        alt=''
        aria-hidden='true'
        priority
        className='hidden pointer-events-none absolute bottom-0 top-37.5 size-full overflow-hidden scale-105 blur-lg object-cover md:block'
      />

      <Image
        src={mobileGradient}
        alt=''
        aria-hidden='true'
        priority
        className='pointer-events-none absolute bottom-0 h-80 blur-xs scale-105 overflow-hidden size-full object-cover  md:hidden'
      />
    </>
  );
}
