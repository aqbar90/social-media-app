'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { Post } from '@/types/entities/post';

interface PostThumbnailProps {
  post: Post;
}

export default function PostThumbnail({ post }: PostThumbnailProps) {
  const router = useRouter();

  return (
    <button
      type='button'
      onClick={() => router.push(`/posts/${post.id}`)}
      className='group aspect-square w-full overflow-hidden rounded-lg transition-fast active:scale-95'
    >
      <Image
        src={post.imageUrl}
        alt={post.caption ?? `Post by ${post.author.username}`}
        width={400}
        height={400}
        className='size-full object-cover transition duration-300 group-hover:scale-105'
      />
    </button>
  );
}
