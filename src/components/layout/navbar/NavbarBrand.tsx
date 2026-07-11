import Link from 'next/link';

import AppLogo from '@/components/common/AppLogo';

import type { NavbarBrandProps } from './navbar.types';

export default function NavbarBrand({ href = '/' }: NavbarBrandProps) {
  return (
    <Link
      href={href}
      className='shrink-0 transition-opacity duration-200 hover:opacity-80 active:scale-95'
    >
      <AppLogo />
    </Link>
  );
}
