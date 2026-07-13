'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';

import CaptionField from './CaptionField';
import CreatePostSubmitButton from './CreatePostSubmitButton';
import ImageUploadField from './ImageUploadField';

import {
  createPostSchema,
  type CreatePostSchema,
} from '@/features/posts/schemas/create-post.schema';
import { useCreatePost } from '../hooks/useCreatePost';
import { useRouter } from 'next/navigation';

export default function CreatePostForm() {
  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      image: null,
      caption: '',
    },
  });

  const router = useRouter();

  const createPostMutation = useCreatePost();

  const image = useWatch({
    control,
    name: 'image',
  });

  const caption = useWatch({
    control,
    name: 'caption',
  });

  async function onSubmit(data: CreatePostSchema) {
    if (!data.image) {
      return;
    }

    await createPostMutation.mutateAsync({
      image: data.image,
      caption: data.caption,
    });

    reset();

    router.back();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
      <ImageUploadField
        image={image}
        error={errors.image?.message}
        onChange={(file) =>
          setValue('image', file, {
            shouldDirty: true,
            shouldValidate: true,
          })
        }
        onDelete={() =>
          setValue('image', null, {
            shouldDirty: true,
            shouldValidate: true,
          })
        }
      />

      <CaptionField
        value={caption}
        error={errors.caption?.message}
        onChange={(value) =>
          setValue('caption', value, {
            shouldDirty: true,
            shouldValidate: true,
          })
        }
      />

      <CreatePostSubmitButton
        disabled={!image}
        isPending={createPostMutation.isPending}
      />
    </form>
  );
}
