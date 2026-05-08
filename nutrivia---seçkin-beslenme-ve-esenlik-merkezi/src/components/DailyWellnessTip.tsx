import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ICONS } from '../constants';

const TIPS = [
  "Su içmek metabolizmanızı hızlandırır ve tokluk hissi verir.",
  "Mevsim sebzelerini tüketmek vücudunuzun bağışıklığını artırır.",
  "Akşam yemeğinden sonra kısa yürüyüşler sindirimi kolaylaştırır.",
  "Dengeli bir kahvaltı gün boyu enerjinizi dengede tutar.",
  "Lifli gıdalar sindirim sistemi sağlığınız için vazgeçilmezdir.",
  "Günde 7-8 saat kaliteli uyku, iştah kontrolüne yardımcı olur."
];

export const DailyWellnessTip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tip, setTip] = useState("");

  useEffect(() => {
    setTip(TIPS[Math.floor(Math.random() * TIPS.length)]);
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-24 right-8 z-40 max-w-[280px]"
        >
          <div className="bg-brand-green/80 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl relative">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold text-brand-green rounded-full flex items-center justify-center text-[10px]"
            >
              <ICONS.X className="w-3 h-3" />
            </button>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center">
                <ICONS.Sparkles className="w-4 h-4 text-brand-gold" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Günün Notu</span>
            </div>
            
            <p className="text-white/80 text-sm font-light leading-relaxed">
              {tip}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
