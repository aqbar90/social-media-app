'use client';

import { useState } from 'react';

import NavbarActions from './NavbarActions';
import NavbarBrand from './NavbarBrand';
import NavbarContainer from './NavbarContainer';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarSearch from './NavbarSearch';

import type { NavbarProps } from './navbar.types';

export default function Navbar({ isAuthenticated, currentUser }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NavbarContainer>
        <div className='shrink-0'>
          <NavbarBrand href={isAuthenticated ? '/feed' : '/'} />
        </div>

        <div className='hidden flex-1 justify-center px-37.5 lg:flex'>
          <NavbarSearch />
        </div>

        <div className='flex shrink-0 items-center'>
          <div className='lg:hidden'>
            <NavbarSearch />
          </div>

          <NavbarActions
            isAuthenticated={isAuthenticated}
            currentUser={currentUser}
            menuOpen={isMenuOpen}
            onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>
      </NavbarContainer>

      <NavbarMobileMenu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
