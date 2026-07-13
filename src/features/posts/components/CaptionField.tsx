'use client';

import { Textarea } from '@/components/ui/textarea';

interface CaptionFieldProps {
  value: string;
  error?: string;
  onChange(value: string): void;
}

export default function CaptionField({
  value,
  error,
  onChange,
}: CaptionFieldProps) {
  return (
    <div className='space-y-3'>
      <label
        htmlFor='caption'
        className='text-base font-semibold text-foreground'
      >
        Caption
      </label>

      <Textarea
        id='caption'
        value={value}
        placeholder='Create your caption'
        rows={7}
        maxLength={500}
        onChange={(event) => onChange(event.target.value)}
        className={
          error
            ? 'border-destructive focus-visible:ring-destructive'
            : undefined
        }
      />

      <div className='flex items-center justify-between'>
        <p className='text-sm text-destructive'>{error}</p>

        <p className='text-sm text-muted-foreground'>{value.length}/500</p>
      </div>
    </div>
  );
}
