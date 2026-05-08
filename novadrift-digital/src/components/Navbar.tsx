import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { TextScramble } from '../lib/text-scramble';

function ScrambledLogoText() {
  const elementRef = useRef<HTMLSpanElement>(null);
  const scramblerRef = useRef<TextScramble | null>(null);

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current);
      scramblerRef.current.setText("NOVADRIFT");
    }
  }, []);

  return (
    <span 
      ref={elementRef}
      className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase"
      style={{ fontFamily: 'monospace' }}
    >
      &nbsp;
    </span>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <div className="relative flex items-center">
            <motion.div 
              animate={{ 
                y: [0, -3, 0],
                rotate: [45, 48, 45]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#00D1FF] flex items-center justify-center rotate-45 transition-colors duration-300 group-hover:bg-[#00D1FF] z-20 bg-[#0B0B0B]"
            >
              <span className="-rotate-45 font-black text-lg md:text-xl text-white group-hover:text-black transition-colors">N</span>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center ml-1"
              >
                <ScrambledLogoText />
                <span className="text-[#00D1FF] hidden sm:inline ml-1 font-black text-xl md:text-2xl tracking-tighter uppercase">DIGITAL</span>
              </motion.div>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-xs font-medium uppercase tracking-[0.2em]">
          {[{label: 'Hakkımızda', id: 'about'}, {label: 'Hizmetler', id: 'services'}, {label: 'Portfolyo', id: 'portfolio'}, {label: 'Blog', id: 'blog'}, {label: 'SSS', id: 'sss'}].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D1FF] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-8 py-2 bg-white text-black tracking-widest hover:bg-[#00D1FF] hover:text-black transition-all shadow-lg active:scale-95 font-bold">
            TEKLİF AL
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0B0B0B] border-b border-white/5 p-6 md:hidden flex flex-col gap-6 items-center shadow-2xl"
          >
            {[{label: 'Hakkımızda', id: 'about'}, {label: 'Hizmetler', id: 'services'}, {label: 'Portfolyo', id: 'portfolio'}, {label: 'Blog', id: 'blog'}, {label: 'SSS', id: 'sss'}].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-lg font-bold text-[#00D1FF] uppercase tracking-tighter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-xs">
              TEKLİF AL
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
