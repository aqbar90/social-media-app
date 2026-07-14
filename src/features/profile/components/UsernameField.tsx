import { Input } from '@/components/ui/input';

import ProfileField from './ProfileField';

interface UsernameFieldProps {
  value?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function UsernameField({
  value,
  placeholder,
  helperText,
  error,
  onChange,
}: UsernameFieldProps) {
  return (
    <ProfileField
      label='Username'
      htmlFor='username'
      helperText={helperText}
      error={error}
    >
      <Input
        id='username'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={!!error}
      />
    </ProfileField>
  );
}
