'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import {
  createCommentSchema,
  type CreateCommentFormValues,
} from '@/features/comments/schemas/create-comment.schema';

interface CommentComposerProps {
  isPending?: boolean;
  onSubmit: (values: CreateCommentFormValues) => void;
}

export default function CommentComposer({
  isPending = false,
  onSubmit,
}: CommentComposerProps) {
  const form = useForm<CreateCommentFormValues>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      text: '',
    },
  });

  function handleSubmit(values: CreateCommentFormValues) {
    onSubmit(values);

    form.reset();
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className='flex flex-col gap-3'
    >
      <Textarea
        placeholder='Write a comment...'
        disabled={isPending}
        {...form.register('text')}
      />

      <div className='flex justify-end'>
        <Button
          type='submit'
          disabled={isPending}
          className='transition-fast active:scale-95'
        >
          Comment
        </Button>
      </div>
    </form>
  );
}
