interface CommentErrorProps {
  message?: string;
}

export default function CommentError({
  message = 'Failed to load comments.',
}: CommentErrorProps) {
  return (
    <div className='py-8 text-center'>
      <p className='text-sm text-muted-foreground'>{message}</p>
    </div>
  );
}
