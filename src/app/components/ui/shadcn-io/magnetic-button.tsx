'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Magnet } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number;
  children?: React.ReactNode;
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(({
  className,
  particleCount = 12,
  children,
  ...props
}, ref) => {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i]?.x || 0,
      y: particles[i]?.y || 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }));
  }, [particlesControl, particles]);

  return (
    <button
      ref={ref}
      className={cn(
        "button min-w-40 relative touch-none",
        "bg-[var(--color-primary)] hover:bg-[var(--color-primary-faded)]",
        "text-[var(--color-solid)] font-semibold",
        "border border-[var(--color-primary)]",
        "transition-all duration-300 rounded-md px-6 py-3",
        "shadow-lg hover:shadow-xl transform hover:scale-105",
        className,
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index]?.x || 0, y: particles[index]?.y || 0 }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full pointer-events-none",
            "bg-[var(--color-primary)]",
            "transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-40",
          )}
        />
      ))}
      <span className="relative w-full flex items-center justify-center gap-2">
        {children || (
          <>
            <Magnet className={cn("w-4 h-4 transition-transform duration-300", isAttracting && "scale-110")} />
            {isAttracting ? "Attracting" : "Hover me"}
          </>
        )}
      </span>
    </button>
  );
});

MagneticButton.displayName = "MagneticButton";
