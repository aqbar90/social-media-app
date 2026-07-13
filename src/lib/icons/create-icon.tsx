import type { ComponentType } from 'react';

import type { IconProps } from 'iconsax-reactjs';

const DEFAULT_SIZE = 24;
const DEFAULT_VARIANT = 'Linear';
const DEFAULT_COLOR = 'currentColor';

export function createIcon(Icon: ComponentType<IconProps>) {
  return function AppIcon({
    size = DEFAULT_SIZE,
    variant = DEFAULT_VARIANT,
    color = DEFAULT_COLOR,
    ...props
  }: IconProps) {
    return <Icon size={size} variant={variant} color={color} {...props} />;
  };
}
