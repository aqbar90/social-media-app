'use client';

import { useAuth } from '@/lib/auth';

import { Navbar } from './';

export default function HomeNavbar() {
  const { isAuthenticated, currentUser } = useAuth();

  return <Navbar isAuthenticated={isAuthenticated} currentUser={currentUser} />;
}
