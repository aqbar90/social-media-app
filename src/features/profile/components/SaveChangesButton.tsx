import { Button } from '@/components/ui/button';

import type { ComponentProps } from 'react';

interface SaveChangesButtonProps extends ComponentProps<typeof Button> {
  loading?: boolean;
}

export default function SaveChangesButton({
  loading = false,
  disabled,
  children,
  ...props
}: SaveChangesButtonProps) {
  return (
    <Button {...props} disabled={loading || disabled}>
      {loading ? 'Saving...' : (children ?? 'Save Changes')}
    </Button>
  );
}
