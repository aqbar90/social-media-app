'use client';

import { ArrowLeft } from 'iconsax-reactjs';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function CreatePostHeader() {
  const router = useRouter();

  return (
    <header className='flex items-center justify-between border-b py-4'>
      <Button
        type='button'
        variant='ghost'
        size='icon'
        onClick={() => router.back()}
      >
        <ArrowLeft size={24} />
      </Button>

      <h1 className='flex-1 px-4 text-xl font-bold'>Add Post</h1>

      <div className='size-10' />
    </header>
  );
}
