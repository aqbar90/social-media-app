import NavbarGuestActions from './NavbarGuestActions';
import NavbarMenuButton from './NavbarMenuButton';
import NavbarUserMenu from './NavbarUserMenu';

import type { NavbarActionsProps } from './navbar.types';

export default function NavbarActions({
  isAuthenticated,
  currentUser,
  menuOpen,
  onToggleMenu,
}: NavbarActionsProps) {
  return (
    <>
      <div className='lg:hidden'>
        {isAuthenticated ? (
          currentUser ? (
            <NavbarUserMenu currentUser={currentUser} />
          ) : null
        ) : (
          <NavbarMenuButton open={menuOpen} onToggle={onToggleMenu} />
        )}
      </div>

      <div className='hidden lg:flex'>
        {isAuthenticated ? (
          currentUser ? (
            <NavbarUserMenu currentUser={currentUser} />
          ) : null
        ) : (
          <NavbarGuestActions />
        )}
      </div>
    </>
  );
}
