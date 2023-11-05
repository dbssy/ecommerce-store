import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', disabled, className, children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        disabled={disabled}
        className={cn(
          'bg-black text-white hover:opacity-75 border-transparent rounded-full w-auto px-5 py-3 font-semibold transition',
          disabled && 'bg-black/70 disabled:cursor-not-allowed',
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
