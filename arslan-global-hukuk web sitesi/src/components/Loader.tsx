import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cinematic loading sequence
    const duration = 3000;
    const interval = 30; // ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      
      // Easing function for smoother progress (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - newProgress / 100, 4);
      setProgress(Math.floor(easeProgress * 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 500); // Wait a bit after 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-deep-black overflow-hidden"
        >
          {/* Cinematic lighting/vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.9)_100%)] pointer-events-none" />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center w-full max-w-md px-8">
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center mb-16"
            >
              <Logo iconSize={72} withText={false} className="mb-8 drop-shadow-[0_0_30px_rgba(198,161,110,0.6)]" />
              <h1 className="text-3xl md:text-5xl font-serif tracking-[0.2em] text-white uppercase mb-4 text-center leading-tight">
                Arslan
              </h1>
              <p className="text-[10px] md:text-xs tracking-[0.5em] text-gold uppercase font-medium text-center">
                Hukuk & Ortaklık
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-full"
            >
              <div className="flex justify-between items-end mb-3">
                <motion.span 
                  className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-light"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Kurumsal Deneyim Başlatılıyor
                </motion.span>
                <span className="text-xs font-mono text-gold/80 tracking-widest">
                  {progress}%
                </span>
              </div>
              
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-gold/50 via-gold to-gold/80 shadow-[0_0_10px_rgba(198,161,110,0.5)]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 60 ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute bottom-[-80px] text-[10px] uppercase tracking-[0.2em] text-white/30 italic font-serif"
            >
              Hukuki Mükemmellik İnşa Ediliyor...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
