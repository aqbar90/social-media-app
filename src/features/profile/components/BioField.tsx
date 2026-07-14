import { ComponentProps } from 'react';

import { Textarea } from '@/components/ui/textarea';

import ProfileField from './ProfileField';

interface BioFieldProps extends ComponentProps<typeof Textarea> {
  helperText?: string;
  error?: string;
}

export default function BioField({
  helperText,
  error,
  ...props
}: BioFieldProps) {
  return (
    <ProfileField
      label='Bio'
      htmlFor='bio'
      helperText={helperText}
      error={error}
    >
      <Textarea id='bio' rows={4} aria-invalid={!!error} {...props} />
    </ProfileField>
  );
}
