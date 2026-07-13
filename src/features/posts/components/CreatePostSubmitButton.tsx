'use client';

import { Button } from '@/components/ui/button';

interface CreatePostSubmitButtonProps {
  disabled: boolean;
  isPending: boolean;
}

export default function CreatePostSubmitButton({
  disabled,
  isPending,
}: CreatePostSubmitButtonProps) {
  return (
    <Button type='submit' disabled={disabled || isPending} className='w-full'>
      {isPending ? 'Sharing...' : 'Share'}
    </Button>
  );
}
