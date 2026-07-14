import { ComponentProps } from 'react';

import { Input } from '@/components/ui/input';

import ProfileField from './ProfileField';

interface PhoneFieldProps extends ComponentProps<typeof Input> {
  helperText?: string;
  error?: string;
}

export default function PhoneField({
  helperText,
  error,
  ...props
}: PhoneFieldProps) {
  return (
    <ProfileField
      label='Phone Number'
      htmlFor='phone'
      helperText={helperText}
      error={error}
    >
      <Input id='phone' type='tel' aria-invalid={!!error} {...props} />
    </ProfileField>
  );
}
