import { Input } from '@/components/ui/input';

import ProfileField from './ProfileField';

interface PhoneFieldProps {
  value?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function PhoneField({
  value,
  placeholder,
  helperText,
  error,
  onChange,
}: PhoneFieldProps) {
  return (
    <ProfileField
      label='Phone Number'
      htmlFor='phone'
      helperText={helperText}
      error={error}
    >
      <Input
        id='phone'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={!!error}
      />
    </ProfileField>
  );
}
