import { ComponentProps } from 'react';

import { Input } from '@/components/ui/input';

import ProfileField from './ProfileField';

interface UsernameFieldProps extends ComponentProps<typeof Input> {
  helperText?: string;
  error?: string;
}

export default function UsernameField({
  helperText,
  error,
  ...props
}: UsernameFieldProps) {
  return (
    <ProfileField
      label='Username'
      htmlFor='username'
      helperText={helperText}
      error={error}
    >
      <Input id='username' aria-invalid={!!error} {...props} />
    </ProfileField>
  );
}
