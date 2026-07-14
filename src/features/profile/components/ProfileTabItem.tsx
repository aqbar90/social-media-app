import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ProfileTabItemProps {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function ProfileTabItem({
  icon,
  label,
  active,
  onClick,
}: ProfileTabItemProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex flex-1 items-center justify-center gap-2 border-b-2 py-3 text-sm font-semibold transition-fast active:scale-95',
        active
          ? 'border-foreground text-foreground'
          : 'border-transparent text-muted-foreground hover:text-foreground'
      )}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
}
