import Image from 'next/image';

interface PostMediaProps {
  imageUrl: string;
  username: string;
}

export default function PostMedia({ imageUrl, username }: PostMediaProps) {
  return (
    <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
      <Image
        src={imageUrl}
        alt={`${username}'s post`}
        fill
        sizes='(min-width: 768px) 600px, 100vw'
        className='object-cover'
      />
    </div>
  );
}
