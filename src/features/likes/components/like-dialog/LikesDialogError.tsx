import { TriangleAlert } from 'lucide-react';

interface LikesDialogErrorProps {
  onRetry: () => void;
}

export default function LikesDialogError({ onRetry }: LikesDialogErrorProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-10'>
      <TriangleAlert className='size-10 text-destructive' />

      <p className='text-sm text-muted-foreground'>Failed to load likes.</p>

      <button
        type='button'
        onClick={onRetry}
        className='transition-fast rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90'
      >
        Try Again
      </button>
    </div>
  );
}
