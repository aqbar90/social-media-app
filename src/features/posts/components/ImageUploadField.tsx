'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { useImagePreview } from '@/lib/hooks/useImagePreview';

import { UploadIcon } from '@/lib/icons';
import { Button } from '@/components/ui/button';

import { ArrowUpToLineIcon, Trash2 } from 'lucide-react';

interface ImageUploadFieldProps {
  image: File | null;
  error?: string;
  onChange(file: File): void;
  onDelete(): void;
}

export default function ImageUploadField({
  image,
  error,
  onChange,
  onDelete,
}: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const previewUrl = useImagePreview(image);

  function openFilePicker() {
    inputRef.current?.click();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    onChange(file);

    event.target.value = '';
  }

  function handleDeleteImage() {
    onDelete();

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <div className='space-y-3'>
      <label className='text-base font-semibold text-foreground'>Photo</label>

      {!image ? (
        <button
          type='button'
          onClick={openFilePicker}
          className={[
            'flex h-72 w-full flex-col items-center justify-center rounded-2xl border border-dashed bg-card transition-fast',
            error ? 'border-destructive' : 'border-border hover:border-primary',
          ].join(' ')}
        >
          <UploadIcon className='size-12' variant='Linear' />

          <p className='mt-5 text-base font-semibold'>
            <span className='text-primary'>Click to upload</span>{' '}
            <span className='text-muted-foreground'>or drag and drop</span>
          </p>

          <p className='mt-2 text-sm text-muted-foreground'>
            PNG or JPG (max. 5 MB)
          </p>
        </button>
      ) : (
        <div className='space-y-4 rounded-2xl border border-border bg-card p-4'>
          {previewUrl && (
            <Image
              src={previewUrl}
              alt='Preview'
              width={800}
              height={800}
              className='aspect-square w-full rounded-xl object-cover'
              unoptimized
            />
          )}

          <div className='flex items-center gap-3'>
            <Button
              type='button'
              variant='secondary'
              className='h-14 flex-1'
              onClick={openFilePicker}
            >
              <ArrowUpToLineIcon className=' size-5' />
              Change Image
            </Button>

            <Button
              type='button'
              variant='secondary'
              size='icon'
              className='size-14 text-danger flex-1'
              onClick={handleDeleteImage}
            >
              <Trash2 className=' mr-2 size-5' />
              Delete Image
            </Button>
          </div>
        </div>
      )}

      <input
        ref={inputRef}
        hidden
        type='file'
        accept='image/png,image/jpeg'
        onChange={handleFileChange}
      />

      {error && <p className='text-sm text-destructive'>{error}</p>}
    </div>
  );
}
