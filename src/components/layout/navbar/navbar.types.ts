import type { User } from '@/types/entities/user';

export interface NavbarProps {
  isAuthenticated: boolean;
  currentUser: User | null;
}

export interface NavbarActionsProps {
  isAuthenticated: boolean;
  currentUser: User | null;
  menuOpen: boolean;
  onToggleMenu: () => void;
}

export interface NavbarBrandProps {
  href?: string;
}

export interface NavbarSearchButtonProps {
  onClick?: () => void;
}

export interface NavbarMenuButtonProps {
  open: boolean;
  onToggle: () => void;
}

export interface NavbarUserMenuProps {
  currentUser: User;
}
