import { ComponentProps } from 'react';

import { Input } from '@/components/ui/input';

import ProfileField from './ProfileField';

interface EmailFieldProps extends ComponentProps<typeof Input> {
  helperText?: string;
}

export default function EmailField({ helperText, ...props }: EmailFieldProps) {
  return (
    <ProfileField label='Email' htmlFor='email' helperText={helperText}>
      <Input id='email' readOnly {...props} />
    </ProfileField>
  );
}
