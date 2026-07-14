import { Button } from '@/components/ui/button';

interface SavedErrorProps {
  onRetry: () => void;
}

export default function SavedError({ onRetry }: SavedErrorProps) {
  return (
    <section className='flex min-h-80 flex-col items-center justify-center gap-4 rounded-lg border'>
      <p className='text-sm text-muted-foreground'>
        Failed to load saved posts.
      </p>

      <Button onClick={onRetry} className='transition-fast active:scale-95'>
        Retry
      </Button>
    </section>
  );
}
