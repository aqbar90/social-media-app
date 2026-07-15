'use client';

import { usePathname } from 'next/navigation';

import BottomNavigationContainer from './BottomNavigationContainer';
import BottomNavigationFab from './BottomNavigationFab';
import BottomNavigationItem from './BottomNavigationItem';

import { HomeIcon, ProfileIcon } from '@/lib/icons';

export default function BottomNavigation() {
  const pathname = usePathname();

  const isHome = pathname === '/' || pathname === '/feed';

  const isProfile = pathname === '/profile' || pathname.startsWith('/users/');

  return (
    <BottomNavigationContainer>
      <BottomNavigationItem
        href='/feed'
        label='Home'
        icon={<HomeIcon variant={isHome ? 'Bold' : 'Linear'} />}
        active={isHome}
      />

      <BottomNavigationFab />

      <BottomNavigationItem
        href='/profile'
        label='Profile'
        icon={<ProfileIcon variant={isProfile ? 'Bold' : 'Linear'} />}
        active={isProfile}
      />
    </BottomNavigationContainer>
  );
}
