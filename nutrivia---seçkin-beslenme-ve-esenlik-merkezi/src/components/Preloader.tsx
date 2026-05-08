import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-brand-green flex flex-col items-center justify-center"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,107,0.1),transparent_70%)]" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Animated Logo Circle */}
        <div className="relative mb-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 h-32 border border-brand-gold/20 rounded-full flex items-center justify-center"
          >
             <motion.div 
               className="absolute inset-0 border-t-2 border-brand-gold rounded-full"
               animate={{ rotate: 360 }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
             <span className="text-brand-gold font-serif text-3xl">N</span>
          </motion.div>
        </div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-brand-gold font-serif text-2xl tracking-[0.3em] mb-2">NUTRIVIA</h2>
          <div className="h-[1px] w-48 bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-brand-gold origin-left"
              style={{ scaleX: percent / 100 }}
            />
          </div>
          <span className="text-white/20 text-[9px] font-bold tracking-[0.5em] block mt-4 uppercase">
            Bilimle Gelen Sağlık • {percent}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};
