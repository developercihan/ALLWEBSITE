import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Uzmanlıklar', href: '/uzmanliklar' },
    { name: 'Ekibimiz', href: '/ekibimiz' },
    { name: 'Başarı Hikayeleri', href: '/basari-hikayeleri' },
    { name: 'Büromuz', href: '/hakkimizda' },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 h-24 flex items-center px-16",
          isScrolled ? "bg-deep-black/80 backdrop-blur-xl border-b border-white/5 h-20" : "bg-transparent border-b border-white/5"
        )}
      >
        <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <Logo iconSize={36} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.15em] transition-colors font-medium relative group",
                    location.pathname === link.href ? "text-gold" : "text-white/70 hover:text-gold"
                  )}
                >
                  {link.name}
                  <span className={cn("absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300", 
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="hidden lg:flex px-8 py-3 bg-transparent border border-gold/40 text-gold text-[11px] uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-300 rounded-sm font-semibold">
              İletişime Geç
            </Link>
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-deep-black flex flex-col p-12"
          >
            <button 
              className="self-end text-white mb-12"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-3xl font-serif text-white hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/" className="mt-8 px-8 py-4 bg-gold rounded-full text-sm tracking-[0.2em] uppercase text-deep-black font-bold text-center" onClick={() => setIsMobileMenuOpen(false)}>
                İletişime Geç
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
