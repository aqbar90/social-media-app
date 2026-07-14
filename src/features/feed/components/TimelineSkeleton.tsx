import { Skeleton } from '@/components/ui/skeleton';

interface TimelineSkeletonProps {
  count?: number;
}

export default function TimelineSkeleton({ count = 3 }: TimelineSkeletonProps) {
  return (
    <section className='flex flex-col gap-8'>
      {Array.from({ length: count }).map((_, index) => (
        <article key={index} className='flex flex-col gap-2 lg:gap-3'>
          <div className='flex items-center gap-2 lg:gap-3'>
            <Skeleton className='size-11 rounded-full lg:size-16' />

            <div className='flex flex-1 flex-col gap-2'>
              <Skeleton className='h-5 w-40 lg:h-6 lg:w-48' />
              <Skeleton className='h-4 w-24 lg:h-5 lg:w-32' />
            </div>
          </div>

          <Skeleton className='aspect-square w-full rounded-lg' />

          <div className='flex items-center justify-between'>
            <div className='flex gap-3 lg:gap-4'>
              <Skeleton className='h-6 w-12' />
              <Skeleton className='h-6 w-12' />
              <Skeleton className='h-6 w-12' />
            </div>

            <Skeleton className='size-6' />
          </div>

          <Skeleton className='h-5 w-32 lg:h-6 lg:w-40' />
          <Skeleton className='h-5 w-full lg:h-6' />
          <Skeleton className='h-5 w-2/3 lg:h-6' />
        </article>
      ))}
    </section>
  );
}
