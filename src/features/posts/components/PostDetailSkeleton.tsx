import { Skeleton } from '@/components/ui/skeleton';

export default function PostDetailSkeleton() {
  return (
    <article className='mx-auto flex w-full max-w-content flex-col gap-3'>
      <div className='flex items-center gap-3'>
        <Skeleton className='size-16 rounded-full' />

        <div className='flex flex-1 flex-col gap-2'>
          <Skeleton className='h-6 w-40' />
          <Skeleton className='h-4 w-24' />
        </div>
      </div>

      <Skeleton className='aspect-square w-full rounded-lg' />

      <Skeleton className='h-8 w-48' />

      <div className='space-y-2'>
        <Skeleton className='h-5 w-32' />
        <Skeleton className='h-5 w-full' />
        <Skeleton className='h-5 w-4/5' />
      </div>
    </article>
  );
}
