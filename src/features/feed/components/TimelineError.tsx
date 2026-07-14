import { TriangleAlert } from 'lucide-react';

interface TimelineErrorProps {
  onRetry: () => void;
}

export default function TimelineError({ onRetry }: TimelineErrorProps) {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-16 text-center'>
      <TriangleAlert className='size-12 text-destructive' />

      <div className='space-y-1'>
        <h2 className='text-lg font-bold text-foreground'>
          Failed to load feed
        </h2>

        <p className='text-sm text-muted-foreground'>Please try again.</p>
      </div>

      <button
        type='button'
        onClick={onRetry}
        className='transition-fast rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 active:scale-95'
      >
        Try Again
      </button>
    </section>
  );
}
