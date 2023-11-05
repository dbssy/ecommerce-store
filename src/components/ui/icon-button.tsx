import { MouseEventHandler } from 'react';

import { cn } from '@/lib/utils';

interface IIconButtonProps {
  className?: string;
  icon: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function IconButton({ className, icon, onClick }: IIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-white border shadow-md rounded-full hover:scale-110 flex items-center justify-center p-2 transition',
        className,
      )}
    >
      {icon}
    </button>
  );
}
