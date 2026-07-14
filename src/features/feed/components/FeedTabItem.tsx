import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface FeedTabItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: ReactNode;
}

export default function FeedTabItem({
  label,
  active,
  onClick,
  icon,
}: FeedTabItemProps) {
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
