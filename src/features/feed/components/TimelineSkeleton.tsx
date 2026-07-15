import { Skeleton } from '@/components/ui/skeleton';

interface TimelineSkeletonProps {
  count?: number;
}

export default function TimelineSkeleton({ count = 3 }: TimelineSkeletonProps) {
  return (
    <section className='flex flex-col gap-4 md:gap-6'>
      {Array.from({ length: count }).map((_, index) => (
        <article key={index} className='flex flex-col gap-2 md:gap-3'>
          <div className='flex items-center gap-2 md:gap-3'>
            <Skeleton className='size-11 rounded-full md:size-16' />

            <div className='flex flex-1 flex-col gap-2'>
              <Skeleton className='h-5 w-40 md:h-6 md:w-48' />
              <Skeleton className='h-4 w-24 md:h-5 md:w-32' />
            </div>
          </div>

          <Skeleton className='aspect-square w-full rounded-lg' />

          <div className='flex items-center justify-between'>
            <div className='flex gap-3 md:gap-4'>
              <Skeleton className='h-6 w-12' />
              <Skeleton className='h-6 w-12' />
              <Skeleton className='h-6 w-12' />
            </div>

            <Skeleton className='size-6' />
          </div>

          <div className='flex flex-col'>
            <Skeleton className='h-5 w-32 md:h-6 md:w-40' />
            <Skeleton className='h-5 w-full md:h-6' />
            <Skeleton className='h-5 w-2/3 md:h-6' />
          </div>
        </article>
      ))}
    </section>
  );
}
