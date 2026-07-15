'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Sheet, SheetContent } from '@/components/ui/sheet';

import LikesDialogSection from './LikesDialogSection';

interface LikesDialogProps {
  postId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LikesDialog({
  postId,
  open,
  onOpenChange,
}: LikesDialogProps) {
  return (
    <>
      <div className='hidden md:block'>
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent
            showCloseButton
            className='max-w-lg bg-surface-primary p-6'
          >
            <LikesDialogSection postId={postId} />
          </DialogContent>
        </Dialog>
      </div>

      <div className='md:hidden'>
        <Sheet open={open} onOpenChange={onOpenChange}>
          <SheetContent
            side='bottom'
            showCloseButton={false}
            className='rounded-t-2xl bg-surface-primary p-4'
          >
            <LikesDialogSection postId={postId} mobile />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
