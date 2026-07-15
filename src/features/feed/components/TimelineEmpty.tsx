import { ImageOff } from 'lucide-react';

export default function TimelineEmpty() {
  return (
    <section className='flex flex-col items-center justify-center gap-3 py-16 text-center'>
      <ImageOff className='size-12 text-text-tertiary' />

      <div className='space-y-1'>
        <h2 className='text-lg font-bold text-text-primary'>
          No posts available
        </h2>

        <p className='text-sm text-text-tertiary'>
          Follow more people or check back later.
        </p>
      </div>
    </section>
  );
}
