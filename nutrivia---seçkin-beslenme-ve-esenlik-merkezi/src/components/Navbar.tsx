import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ICONS } from '../constants';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';
import { PremiumButton } from './PremiumButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 34, 26, 0)', 'rgba(15, 34, 26, 0.95)']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'ANA SAYFA', href: '/' },
    { name: 'HAKKIMDA', href: '/#hakkimda' },
    { name: 'PROGRAMLAR', href: '/programlar' },
    { name: 'TARİFLER', href: '/tarifler' },
    { name: 'VKİ', href: '/vki-hesaplayici' },
    { name: 'BLOG', href: '/blog' },
    { name: 'SSS', href: '/sss' },
  ];

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[200] transition-all duration-500",
        isScrolled ? "py-4 border-b border-white/5" : "py-10"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-10">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 border border-brand-gold rounded-full flex items-center justify-center p-2 transition-colors group-hover:bg-brand-gold/10"
          >
             <ICONS.Apple className="text-brand-gold w-full h-full" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-brand-gold font-serif text-xl tracking-[0.2em] leading-none transition-all group-hover:tracking-[0.25em]">NUTRIVIA</span>
            <span className="text-[9px] text-brand-gold/60 tracking-[0.4em] uppercase leading-none mt-1.5 font-bold">DİYET & BESLENME</span>
          </div>
        </Link>

        {/* Menu - Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isHashLink = link.href.includes('#');
            const Component = isHashLink ? 'a' : Link;
            const props = isHashLink ? { href: link.href } : { to: link.href };
            
            return (
              <Component
                key={link.name}
                {...props as any}
                className={cn(
                  "text-[10px] font-bold tracking-[0.3em] transition-all duration-300 relative group text-white/60 hover:text-brand-gold",
                  pathname === link.href && "text-brand-gold"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full",
                  pathname === link.href ? "w-full" : "w-0"
                )} />
              </Component>
            );
          })}
        </div>

        {/* CTA & Toggle */}
        <div className="flex items-center gap-4">
          <a href="/#randevu" className="hidden md:block">
            <PremiumButton 
              variant="outline" 
              className="px-7 py-3 gap-2"
              icon={<ICONS.Calendar className="w-4 h-4" />}
            >
              RANDEVU AL
            </PremiumButton>
          </a>
          
          {/* Animated Menu Icon */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 relative z-[260] group"
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 7.5, backgroundColor: '#C8A96B' } : { rotate: 0, y: 0, backgroundColor: '#C8A96B' }}
              className="w-7 h-[1.5px] block origin-center"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-5 h-[1.5px] bg-brand-gold block self-end group-hover:w-7 transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -7.5, backgroundColor: '#C8A96B' } : { rotate: 0, y: 0, backgroundColor: '#C8A96B' }}
              className="w-7 h-[1.5px] block origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 1 }}
            className="fixed inset-0 z-[250] bg-brand-green flex flex-col lg:hidden h-[100dvh] overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
               <div className="absolute top-0 right-0 w-[100vw] h-[100vw] bg-brand-gold/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-10 relative z-10 w-full">
              <div className="space-y-6">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-brand-gold/40 text-[9px] font-bold tracking-[0.5em] block mb-8"
                >
                  NAVİGASYON
                </motion.span>
                
                <div className="flex flex-col items-start gap-6">
                  {navLinks.map((link, i) => {
                    const isHashLink = link.href.includes('#');
                    const Component = isHashLink ? 'a' : Link;
                    const props = isHashLink ? { href: link.href } : { to: link.href };
                    
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Component
                          {...props as any}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "text-4xl font-serif tracking-tight transition-all duration-500 block relative group",
                            pathname === link.href ? "text-brand-gold italic pl-4 border-l-2 border-brand-gold" : "text-white/80 hover:text-brand-gold"
                          )}
                        >
                          {link.name}
                        </Component>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 pt-10 border-t border-white/5 w-full flex flex-col items-start"
              >
                <Link
                  to="/#randevu"
                  className="bg-brand-gold text-brand-green px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  RANDEVU AL
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-10 pb-12 flex items-center justify-between relative z-10 border-t border-white/5">
              <div className="flex gap-6">
                 {[ICONS.Instagram, ICONS.Linkedin, ICONS.Twitter].map((Icon, i) => (
                   <a key={i} href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                     <Icon className="w-5 h-5" />
                   </a>
                 ))}
              </div>
              <p className="text-[10px] text-white/20 tracking-widest font-serif italic italic-light">Nutrivia Health</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
