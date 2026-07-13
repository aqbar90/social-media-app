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
  const authenticatedUser =
    isAuthenticated && currentUser ? (
      <NavbarUserMenu currentUser={currentUser} />
    ) : null;

  return (
    <>
      <div className='lg:hidden'>
        {authenticatedUser ?? (
          <NavbarMenuButton open={menuOpen} onToggle={onToggleMenu} />
        )}
      </div>

      <div className='hidden lg:flex'>
        {authenticatedUser ?? <NavbarGuestActions />}
      </div>
    </>
  );
}
