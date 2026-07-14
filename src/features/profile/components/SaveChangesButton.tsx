import { Button } from '@/components/ui/button';

interface SaveChangesButtonProps {
  disabled?: boolean;
  loading?: boolean;
}

export default function SaveChangesButton({
  disabled = false,
  loading = false,
}: SaveChangesButtonProps) {
  return (
    <Button
      type='submit'
      disabled={disabled || loading}
      className='h-12 w-full rounded-full'
    >
      {loading ? 'Saving...' : 'Save Changes'}
    </Button>
  );
}
