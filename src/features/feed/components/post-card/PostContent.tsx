'use client';

import { useState } from 'react';

interface PostContentProps {
  username: string;
  caption: string;
}

export default function PostContent({ username, caption }: PostContentProps) {
  const [expanded, setExpanded] = useState(false);

  const shouldShowToggle = caption.length > 120;

  return (
    <div className='flex flex-col gap-1'>
      <p className='text-sm lg:text-md'>
        <span className='font-bold text-foreground'>{username}</span>{' '}
        <span
          className={
            expanded ? 'text-foreground' : 'line-clamp-2 text-foreground'
          }
        >
          {caption}
        </span>
      </p>

      {shouldShowToggle && (
        <button
          type='button'
          onClick={() => setExpanded((value) => !value)}
          className='transition-fast w-fit text-sm font-semibold text-primary hover:opacity-80 active:scale-95 lg:text-md'
        >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}
