import { cn } from '@/lib/utils';

interface AuthTitleProps {
  title: string;
  className?: string;
}

export function AuthTitle({ title, className }: AuthTitleProps) {
  return (
    <h1
      className={cn(
        'text-center font-bold text-text-inverse text-xl tracking-tight md:text-display-xs md:tracking-normal',
        className
      )}
    >
      {title}
    </h1>
  );
}
