'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type GradientTextProps = React.ComponentProps<'span'> & {
  text: string;
  gradient?: string;
  neon?: boolean;
};

function GradientText({
  text,
  className,
  gradient = 'linear-gradient(90deg, #a7e97f 0%, #4CAF50 50%, #2E7D32 100%)',
  neon = false,
  ...props
}: GradientTextProps) {
  const baseStyle: React.CSSProperties = {
    backgroundImage: gradient,
  };

  return (
    <span
      data-slot="gradient-text"
      className={cn('relative inline-block', className || '')}
      {...props}
    >
      <span
        className="m-0 text-transparent bg-clip-text bg-[length:200%_100%] animate-pulse"
        style={baseStyle}
      >
        {text}
      </span>

      {neon && (
        <span
          className="m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:200%_100%] animate-pulse"
          style={baseStyle}
        >
          {text}
        </span>
      )}
    </span>
  );
}

export { GradientText, type GradientTextProps };
