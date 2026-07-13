'use client';

import { useAuth } from '@/lib/auth';

import NavbarAccountBoundary from './NavbarAccountBoundary';
import { Navbar } from './';

export default function HomeNavbar() {
  const { isAuthenticated, currentUser } = useAuth();

  return (
    <NavbarAccountBoundary>
      <Navbar isAuthenticated={isAuthenticated} currentUser={currentUser} />
    </NavbarAccountBoundary>
  );
}
