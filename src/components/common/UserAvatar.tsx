import Image from 'next/image';

import defaultAvatar from '@/assets/image/default-avatar.svg';
import { cn } from '@/lib/utils';

interface UserAvatarProps {
  src?: string | null;
  alt: string;
  size?: number;
  className?: string;
}

export default function UserAvatar({
  src,
  alt,
  size = 40,
  className,
}: UserAvatarProps) {
  return (
    <Image
      src={src || defaultAvatar}
      alt={alt}
      width={size}
      height={size}
      className={cn('rounded-full object-cover', className)}
    />
  );
}
