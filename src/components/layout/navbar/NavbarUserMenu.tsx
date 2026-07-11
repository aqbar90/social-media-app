'use client';

import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import Link from 'next/link';

import { ChevronDown, LogOut, User } from 'lucide-react';

import { UserAvatar } from '@/components/common';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { NavbarUserMenuProps } from './navbar.types';
import { useAuth } from '@/lib/auth';

export default function NavbarUserMenu({ currentUser }: NavbarUserMenuProps) {
  const router = useRouter();

  const { logout } = useAuth();

  function handleLogout() {
    logout();

    toast.success('Successfully logged out.');

    router.replace('/');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type='button'
          aria-label='Open user menu'
          className='transition-fast rounded-full hover:opacity-80 active:scale-95'
        >
          <div className='flex items-center lg:hidden'>
            <UserAvatar
              src={currentUser.avatarUrl}
              alt={currentUser.username}
            />
          </div>

          <div className='hidden items-center gap-3 lg:flex'>
            <UserAvatar
              src={currentUser.avatarUrl}
              alt={currentUser.username}
            />

            <span className='text-md font-bold text-foreground'>
              {currentUser.username}
            </span>

            <ChevronDown className='size-4' />
          </div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuItem asChild>
          <Link href='/profile' className='flex items-center gap-2'>
            <User className='size-4' />
            <span>My Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className='text-danger focus:text-danger'
        >
          <LogOut className='size-4' />

          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
