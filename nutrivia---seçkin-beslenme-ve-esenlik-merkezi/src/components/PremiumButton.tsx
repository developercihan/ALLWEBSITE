import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { cn } from '../lib/utils';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  icon?: React.ReactNode;
}

export const PremiumButton = ({ 
  children, 
  variant = 'primary', 
  className, 
  icon,
  ...props 
}: PremiumButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const tx = useSpring(mouseX, springConfig);
  const ty = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.35); // Subtle magnetic effect
    mouseY.set(y * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const variants = {
    primary: "bg-brand-gold text-brand-green border-transparent",
    outline: "bg-transparent border-brand-gold/30 text-brand-gold hover:border-brand-gold",
    ghost: "bg-transparent border-transparent text-white/60 hover:text-white"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: tx, y: ty }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-4 transition-all duration-500 overflow-hidden border",
        variants[variant],
        className
      )}
      {...props as any}
    >
      {/* Inner Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-[-20%] bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-2xl" />
      </div>

      <span className="relative z-10 flex items-center gap-3">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform duration-500">{icon}</span>}
      </span>

      {/* Shine effect on primary */}
      {variant === 'primary' && (
        <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out pointer-events-none" />
      )}
    </motion.button>
  );
};
