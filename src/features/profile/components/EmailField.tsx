import { Input } from '@/components/ui/input';

import ProfileField from './ProfileField';

interface EmailFieldProps {
  value?: string;
  helperText?: string;
}

export default function EmailField({ value, helperText }: EmailFieldProps) {
  return (
    <ProfileField label='Email' htmlFor='email' helperText={helperText}>
      <Input id='email' value={value} readOnly />
    </ProfileField>
  );
}
