'use client';

import { ShareIcon } from '@/lib/icons';

interface ShareButtonProps {
  onShare?: () => void;
  disabled?: boolean;
}

export default function ShareButton({
  onShare,
  disabled = false,
}: ShareButtonProps) {
  return (
    <button
      type='button'
      aria-label='Share post'
      disabled={disabled}
      onClick={onShare}
      className='transition-fast active:scale-95 disabled:pointer-events-none disabled:opacity-50'
    >
      <ShareIcon />
    </button>
  );
}
