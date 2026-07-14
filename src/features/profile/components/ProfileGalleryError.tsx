import { Button } from '@/components/ui/button';

interface ProfileGalleryErrorProps {
  onRetry: () => void;
}

export default function ProfileGalleryError({
  onRetry,
}: ProfileGalleryErrorProps) {
  return (
    <section className='flex min-h-80 flex-col items-center justify-center gap-4 rounded-lg border'>
      <p className='text-sm text-muted-foreground'>Failed to load posts.</p>

      <Button onClick={onRetry} className='transition-fast active:scale-95'>
        Retry
      </Button>
    </section>
  );
}
