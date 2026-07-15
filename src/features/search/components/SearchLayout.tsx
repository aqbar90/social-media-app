import type { PropsWithChildren } from 'react';

interface SearchOverlayProps extends PropsWithChildren {
  className?: string;
}

export default function SearchOverlay({
  children,
  className,
}: SearchOverlayProps) {
  return (
    <section
      className={[
        'hidden',
        'lg:absolute',
        'lg:left-1/2',
        'lg:top-19',
        'lg:block',
        'lg:w-122.75',
        'lg:-translate-x-1/2',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='rounded-2xl border border-border-primary bg-surface-secondary p-5'>
        {children}
      </div>
    </section>
  );
}
