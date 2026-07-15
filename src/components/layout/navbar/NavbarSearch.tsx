'use client';

import { useRouter } from 'next/navigation';

import NavbarSearchButton from './NavbarSearchButton';

import DesktopSearchContainer from '@/features/search/containers/DesktopSearchContainer';

export default function NavbarSearch() {
  const router = useRouter();

  return (
    <>
      <div className='hidden w-full lg:block'>
        <DesktopSearchContainer />
      </div>
      <div className='lg:hidden'>
        <NavbarSearchButton onClick={() => router.push('/search')} />
      </div>
    </>
  );
}
