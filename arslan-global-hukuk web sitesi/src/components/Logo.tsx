import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  iconSize?: number;
  withText?: boolean;
}

export default function Logo({ className, iconSize = 40, withText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div 
        className="relative flex items-center justify-center shrink-0"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-[0_4px_15px_rgba(198,161,110,0.25)] relative z-10 transition-transform duration-700 hover:scale-[1.03]"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C6A16E" />
              <stop offset="40%" stopColor="#E2C799" />
              <stop offset="60%" stopColor="#C6A16E" />
              <stop offset="100%" stopColor="#8E6D3F" />
            </linearGradient>
            <linearGradient id="darkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C1C1C" />
              <stop offset="100%" stopColor="#0A0A0A" />
            </linearGradient>
          </defs>
          
          <rect width="120" height="120" rx="20" fill="url(#darkGrad)" stroke="url(#goldGrad)" strokeWidth="2.5" />
          
          {/* Subtle grid lines for architectural feel */}
          <path d="M0 60 L120 60" stroke="#C6A16E" strokeWidth="0.5" strokeOpacity="0.15" />
          <path d="M60 0 L60 120" stroke="#C6A16E" strokeWidth="0.5" strokeOpacity="0.15" />

          {/* Minimalist 'A' Monogram */}
          <path d="M59.5 35H60.5L84 82H71.5L66.5 71H53.5L48.5 82H36L59.5 35ZM63.5 63L60 55L56.5 63H63.5Z" fill="url(#goldGrad)" />
        </svg>
      </div>
      
      {withText && (
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-serif tracking-[0.2em] leading-none text-white uppercase">ARSLAN</span>
          <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-gold uppercase mt-1">Hukuk & Ortakları</span>
        </div>
      )}
    </div>
  );
}
