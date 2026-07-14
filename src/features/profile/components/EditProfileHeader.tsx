'use client';

import { ArrowLeft } from 'lucide-react';

interface EditProfileHeaderProps {
  onBack: () => void;
}

export default function EditProfileHeader({ onBack }: EditProfileHeaderProps) {
  return (
    <header className='flex items-center gap-3'>
      <button
        type='button'
        onClick={onBack}
        aria-label='Back'
        className='transition-fast rounded-full p-1 hover:bg-accent active:scale-95'
      >
        <ArrowLeft className='size-6 lg:size-8' />
      </button>

      <h1 className='text-xl font-bold text-foreground lg:text-2xl'>
        Edit Profile
      </h1>
    </header>
  );
}
