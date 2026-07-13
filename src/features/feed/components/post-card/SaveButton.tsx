'use client';

import { SaveIcon } from '@/lib/icons';

interface SaveButtonProps {
  onSave?: () => void;
  disabled?: boolean;
}

export default function SaveButton({
  onSave,
  disabled = false,
}: SaveButtonProps) {
  return (
    <button
      type='button'
      aria-label='Save post'
      disabled={disabled}
      onClick={onSave}
      className='transition-fast active:scale-95 disabled:pointer-events-none disabled:opacity-50'
    >
      <SaveIcon />
    </button>
  );
}
