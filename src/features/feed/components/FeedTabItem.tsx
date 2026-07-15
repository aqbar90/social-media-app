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
        'flex flex-1 items-center justify-center gap-2 border-b-2 border-transparent py-3 text-sm font-semibold text-text-tertiary transition-fast hover:text-text-primary md:text-md',
        active && 'border-text-primary text-text-primary'
      )}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
}
