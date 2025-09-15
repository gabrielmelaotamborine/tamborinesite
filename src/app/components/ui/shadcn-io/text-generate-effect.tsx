'use client';

import * as React from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

type TextGenerateEffectProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  words: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
};

function TextGenerateEffect({
  ref,
  words,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
  ...props
}: TextGenerateEffectProps) {
  const localRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);
  
  const [scope, animate] = useAnimate();
  const wordsArray = React.useMemo(() => words.split(' '), [words]);

  React.useEffect(() => {
    if (scope.current) {
      animate(
        'span',
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: duration,
          delay: stagger(staggerDelay),
        }
      );
    }
  }, [animate, duration, filter, scope, staggerDelay]);

  return (
    <div ref={localRef} data-slot="text-generate-effect" {...props}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className="title-gradient-hero text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight lg:leading-[89px] tracking-[-0.02em]"
            style={{
              filter: filter ? 'blur(10px)' : 'none',
            }}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export { TextGenerateEffect, type TextGenerateEffectProps };
