import { ComponentProps } from 'react';

import { Input } from '@/components/ui/input';

import ProfileField from './ProfileField';

interface NameFieldProps extends ComponentProps<typeof Input> {
  helperText?: string;
  error?: string;
}

export default function NameField({
  helperText,
  error,
  ...props
}: NameFieldProps) {
  return (
    <ProfileField
      label='Name'
      htmlFor='name'
      helperText={helperText}
      error={error}
    >
      <Input id='name' aria-invalid={!!error} {...props} />
    </ProfileField>
  );
}
