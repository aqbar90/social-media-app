import Image from 'next/image';

import logo from '@/assets/logo/logo.svg';
import { APP_NAME } from '@/constants/app';
import { cn } from '@/lib/utils';

type AppLogoProps = {
  className?: string;
  showText?: boolean;
};

export default function AppLogo({ className, showText = true }: AppLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image src={logo} alt={APP_NAME} width={30} height={30} priority />

      {showText && (
        <span className='display-xs font-bold text-primary'>{APP_NAME}</span>
      )}
    </div>
  );
}
