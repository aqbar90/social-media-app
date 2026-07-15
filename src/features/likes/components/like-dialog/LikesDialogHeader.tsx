import { DialogTitle } from '@/components/ui/dialog';
import { SheetTitle } from '@/components/ui/sheet';

interface LikesDialogHeaderProps {
  mobile?: boolean;
}

export default function LikesDialogHeader({
  mobile = false,
}: LikesDialogHeaderProps) {
  if (mobile) {
    return (
      <div className='flex flex-col items-center border-b border-border pb-4'>
        <div className='mb-3 h-1 w-12 rounded-full bg-muted' />

        <SheetTitle className='text-md font-bold text-foreground'>
          Likes
        </SheetTitle>
      </div>
    );
  }

  return (
    <div className='border-b border-border pb-4'>
      <DialogTitle className='text-md font-bold text-foreground'>
        Likes
      </DialogTitle>
    </div>
  );
}
