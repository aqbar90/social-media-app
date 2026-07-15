import { TriangleAlert } from 'lucide-react';

interface SearchErrorProps {
  message?: string;
}

export default function SearchError({
  message = 'Something went wrong.',
}: SearchErrorProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-10 text-center'>
      <TriangleAlert className='size-8 text-text-danger' />

      <div className='space-y-1'>
        <h3 className='text-sm font-bold tracking-tight text-text-primary'>
          Search Failed
        </h3>

        <p className='text-sm tracking-tight text-text-secondary'>{message}</p>
      </div>
    </div>
  );
}
