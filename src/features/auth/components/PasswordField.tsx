'use client';

import { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface PasswordFieldProps extends Omit<
  React.ComponentProps<typeof Input>,
  'type'
> {
  id?: string;
  label?: string;
  error?: string;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    {
      id = 'password',
      label = 'Password',
      error,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className='flex w-full flex-col gap-0.5'>
        <Label htmlFor={id} className='text-sm font-bold text-text-inverse'>
          {label}
        </Label>

        <div className='relative'>
          <Input
            {...props}
            ref={ref}
            id={id}
            type={showPassword ? 'text' : 'password'}
            disabled={disabled}
            className={cn(
              'h-12 rounded-xl border-border-primary bg-surface-inverse px-4 py-2 text-md tracking-tight font-normal text-text-inverse placeholder:text-text-placeholder focus-visible:border-border-focus focus-visible:ring-0',
              error && 'border-border-danger',
              className
            )}
          />

          <button
            type='button'
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute top-1/2 right-4 flex -translate-y-1/2 items-center justify-center text-primary transition-fast active:scale-95'
          >
            {showPassword ? (
              <EyeOff className='size-5' />
            ) : (
              <Eye className='size-5' />
            )}
          </button>
        </div>

        {error ? <p className='text-sm text-text-danger'>{error}</p> : null}
      </div>
    );
  }
);

PasswordField.displayName = 'PasswordField';
