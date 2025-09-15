"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-foreground)]",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#a7e97f_10%,#4CAF50_15%,#2E7D32_20%,#1B5E20_25%,#a7e97f_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,var(--color-dark-green)_0%,var(--color-dark-green)_7%,transparent_10%,transparent_12%,var(--color-dark-green)_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,var(--color-foreground)_0%,var(--color-foreground)_7%,transparent_10%,transparent_12%,var(--color-foreground)_16%)",

              "--green-300": "#a7e97f",
              "--green-400": "#4CAF50",
              "--green-500": "#2E7D32",
              "--green-600": "#1B5E20",
              "--dark-green": "var(--color-dark-green)",
              "--foreground": "var(--color-foreground)",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-pulse pointer-events-none absolute -inset-[10px] [background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-30 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--green-300)_10%,var(--green-400)_15%,var(--green-500)_20%,var(--green-600)_25%,var(--green-300)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--dark-green)_0%,var(--dark-green)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--dark-green)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--foreground)_0%,var(--foreground)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--foreground)_16%)] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
