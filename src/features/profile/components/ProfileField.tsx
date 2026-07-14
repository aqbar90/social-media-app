import { Label } from '@/components/ui/label';

interface ProfileFieldProps {
  label: string;
  htmlFor: string;
  helperText?: string;
  error?: string;
  children: React.ReactNode;
}

export default function ProfileField({
  label,
  htmlFor,
  helperText,
  error,
  children,
}: ProfileFieldProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Label htmlFor={htmlFor} className='text-sm font-bold text-foreground'>
        {label}
      </Label>

      {children}

      {(helperText || error) && (
        <p
          className={`text-sm ${
            error ? 'text-destructive' : 'text-muted-foreground'
          }`}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  );
}
