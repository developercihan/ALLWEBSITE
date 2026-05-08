import { motion, AnimatePresence } from 'motion/react';
import { FAQS, ICONS } from '../constants';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Bilgi Merkezi</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Sıkça Sorulan <em className="italic text-brand-gold">Sorular</em>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Süreçlerimiz, seanslar ve beslenme danışmanlığı hakkında merak edilen her şey.
          </p>
        </motion.div>

        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className={cn(
                  "w-full text-left p-8 lg:p-10 rounded-3xl border transition-all duration-500 flex justify-between items-center gap-6",
                  activeIndex === i 
                    ? "bg-brand-gold/10 border-brand-gold/30" 
                    : "bg-white/5 border-white/10 hover:border-brand-gold/30"
                )}
              >
                <span className={cn(
                  "text-xl lg:text-2xl font-serif transition-colors",
                  activeIndex === i ? "text-brand-gold" : "text-white"
                )}>
                  {faq.question}
                </span>
                <ICONS.ArrowRight className={cn(
                  "w-6 h-6 transition-transform duration-500",
                  activeIndex === i ? "rotate-90 text-brand-gold" : "text-white/20"
                )} />
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-10 text-white/50 leading-relaxed text-lg lg:text-xl font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 rounded-[2rem] bg-brand-gold/5 border border-brand-gold/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-serif text-white mb-2">Başka bir sorunuz mu var?</h3>
            <p className="text-white/40">Size yardımcı olmaktan mutluluk duyarız.</p>
          </div>
          <div className="flex gap-4">
             <a href="mailto:info@nutrivia.com" className="bg-white/5 border border-white/10 p-5 rounded-2xl text-brand-gold hover:bg-brand-gold/10 transition-colors">
                <ICONS.Mail className="w-6 h-6" />
             </a>
             <a href="https://wa.me/905XXXXXXXXX" className="bg-white/5 border border-white/10 p-5 rounded-2xl text-brand-gold hover:bg-brand-gold/10 transition-colors">
                <ICONS.Phone className="w-6 h-6" />
             </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
