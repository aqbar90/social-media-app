import { ScrollArea } from '@/components/ui/scroll-area';

import type { PostAuthor } from '@/types/entities/post-author';

interface LikesDialogListProps {
  users: PostAuthor[];

  children: React.ReactNode;
}

export default function LikesDialogList({
  users,
  children,
}: LikesDialogListProps) {
  return (
    <ScrollArea className='h-96'>
      <div className='flex flex-col divide-y divide-border'>
        {users.length === 0 ? (
          <div className='flex h-32 items-center justify-center text-center'>
            <p className='text-sm text-muted-foreground'>No likes yet.</p>
          </div>
        ) : (
          children
        )}
      </div>
    </ScrollArea>
  );
}
