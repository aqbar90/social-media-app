import { Button } from '@/components/ui/button';

interface ProfileErrorProps {
  onRetry: () => void;
}

export default function ProfileError({ onRetry }: ProfileErrorProps) {
  return (
    <main className='layout-container flex flex-col items-center gap-4 py-6'>
      <p>Failed to load profile.</p>

      <Button onClick={onRetry} className='transition-fast active:scale-95'>
        Retry
      </Button>
    </main>
  );
}
