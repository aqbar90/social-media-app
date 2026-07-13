interface PostDetailErrorProps {
  message?: string;
}

export default function PostDetailError({
  message = 'Failed to load post.',
}: PostDetailErrorProps) {
  return (
    <div className='flex justify-center py-10'>
      <p className='text-sm text-muted-foreground'>{message}</p>
    </div>
  );
}
