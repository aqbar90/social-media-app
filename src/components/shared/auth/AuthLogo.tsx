import Image from 'next/image';

import logo from '@/assets/logo/logo.svg';

export function AuthLogo() {
  return (
    <div className='flex items-center gap-2.75'>
      <Image
        src={logo}
        alt='Sociality Logo'
        priority
        className='size-7.5 shrink-0'
      />

      <span className='text-display-xs font-bold text-text-inverse'>
        Sociality
      </span>
    </div>
  );
}
