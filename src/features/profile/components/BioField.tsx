import { Textarea } from '@/components/ui/textarea';

import ProfileField from './ProfileField';

interface BioFieldProps {
  value?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function BioField({
  value,
  placeholder,
  helperText,
  error,
  onChange,
}: BioFieldProps) {
  return (
    <ProfileField
      label='Bio'
      htmlFor='bio'
      helperText={helperText}
      error={error}
    >
      <Textarea
        id='bio'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={!!error}
        rows={4}
      />
    </ProfileField>
  );
}
