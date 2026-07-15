import { Skeleton } from '@/components/ui/skeleton';

interface LikesDialogSkeletonProps {
  count?: number;
}

export default function LikesDialogSkeleton({
  count = 6,
}: LikesDialogSkeletonProps) {
  return (
    <div className='flex flex-col divide-y divide-border'>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className='flex items-center justify-between gap-4 py-3'
        >
          <div className='flex flex-1 items-center gap-3'>
            <Skeleton className='size-11 rounded-full md:size-16' />

            <div className='flex flex-1 flex-col gap-2'>
              <Skeleton className='h-5 w-36 md:h-6 md:w-44' />

              <Skeleton className='h-4 w-24 md:h-5 md:w-32' />
            </div>
          </div>

          <Skeleton className='h-10 w-24 rounded-full' />
        </div>
      ))}
    </div>
  );
}
