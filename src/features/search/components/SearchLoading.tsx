import { Skeleton } from '@/components/ui/skeleton';

export default function SearchLoading() {
  return (
    <div className='flex flex-col gap-4'>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className='flex items-center gap-2'>
          <Skeleton className='size-12 rounded-full' />

          <div className='flex flex-1 flex-col gap-2'>
            <Skeleton className='h-4 w-40' />
            <Skeleton className='h-4 w-28' />
          </div>
        </div>
      ))}
    </div>
  );
}
