import { Input } from '@/components/ui/input';

import ProfileField from './ProfileField';

interface NameFieldProps {
  value?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function NameField({
  value,
  placeholder,
  helperText,
  error,
  onChange,
}: NameFieldProps) {
  return (
    <ProfileField
      label='Name'
      htmlFor='name'
      helperText={helperText}
      error={error}
    >
      <Input
        id='name'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={!!error}
      />
    </ProfileField>
  );
}
