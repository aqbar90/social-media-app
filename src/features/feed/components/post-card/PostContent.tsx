'use client';

import { useState } from 'react';

interface PostContentProps {
  username: string;
  caption: string | null;
}

export default function PostContent({ username, caption }: PostContentProps) {
  const [expanded, setExpanded] = useState(false);

  const content = caption ?? '';

  const shouldShowToggle = content.length > 120;

  return (
    <div className='flex flex-col'>
      <p className='text-sm text-text-primary md:text-md'>
        <span className='font-bold'>{username}</span>{' '}
        <span className={expanded ? '' : 'line-clamp-2'}>{content}</span>
      </p>

      {shouldShowToggle && (
        <button
          type='button'
          onClick={() => setExpanded((value) => !value)}
          className='w-fit text-sm font-semibold text-text-brand transition-fast md:text-md'
        >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}
