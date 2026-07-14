'use client';

import { useRef } from 'react';

import UserAvatar from '@/components/common/UserAvatar';
import { Button } from '@/components/ui/button';

interface AvatarUploadProps {
  imageUrl?: string | null;
  alt: string;
  onChange: (file: File) => void;
}

export default function AvatarUpload({
  imageUrl,
  alt,
  onChange,
}: AvatarUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    inputRef.current?.click();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    onChange(file);
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <UserAvatar src={imageUrl} alt={alt} size={130} className='size-32.5' />

      <input
        ref={inputRef}
        type='file'
        accept='image/png,image/jpeg,image/webp'
        className='hidden'
        onChange={handleFileChange}
      />

      <Button
        type='button'
        variant='outline'
        className='h-12 rounded-full px-6'
        onClick={handleChooseFile}
      >
        Change Photo
      </Button>
    </div>
  );
}
