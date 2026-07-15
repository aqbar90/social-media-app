'use client';

import { SaveIcon } from '@/lib/icons';

interface SaveButtonProps {
  isSaved: boolean;
  onSave?: () => void;
  disabled?: boolean;
}

export default function SaveButton({
  onSave,
  disabled = false,
  isSaved,
}: SaveButtonProps) {
  return (
    <button
      type='button'
      aria-label='Save post'
      disabled={disabled}
      onClick={onSave}
      className='transition-fast hover:opacity-80 disabled:pointer-events-none disabled:opacity-50'
    >
      <SaveIcon variant={isSaved ? 'Bold' : 'Linear'} />
    </button>
  );
}
