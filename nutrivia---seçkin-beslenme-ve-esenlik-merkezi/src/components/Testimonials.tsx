import { motion, AnimatePresence } from 'motion/react';
import { ICONS } from '../constants';
import { useState } from 'react';

const reviews = [
  {
    name: 'Ayşe K.',
    text: 'Selin Hanım sayesinde hem kilomu verdim hem de sağlıklı beslenmeyi bir yaşam tarzı haline getirdim. İyi ki yolumuz kesişmiş!',
    role: 'DANIŞAN'
  },
  {
    name: 'Mehmet T.',
    text: 'Sporcu beslenmesi konusunda aldığım destek performansımı inanılmaz artırdı. Bilimsel yaklaşımı gerçekten fark yaratıyor.',
    role: 'SPORCU DANIŞAN'
  },
  {
    name: 'Zeynep B.',
    text: 'PCOS sürecimde en büyük destekçim oldu. Hormonal dengemi sadece doğru beslenmeyle bile ciddi oranda toparladık.',
    role: 'KLİNİK DANIŞAN'
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-48 bg-brand-green relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-gold)_0%,_transparent_60%)] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           className="text-center"
        >
          <span className="text-brand-gold text-[10px] md:text-[11px] font-bold tracking-[0.6em] uppercase mb-16 block opacity-50">
            DENEYİMLER
          </span>

          <div className="max-w-5xl mx-auto min-h-[400px] md:min-h-[500px] flex flex-col justify-center items-center relative">
            {/* Artistic Quote Mark */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
              <span className="text-[25vw] font-serif leading-none italic text-brand-gold">"</span>
            </div>
            
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="px-4 relative z-10"
              >
                <div className="mb-12">
                   <div className="flex justify-center gap-1 mb-8">
                     {[...Array(5)].map((_, i) => (
                       <ICONS.Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                     ))}
                   </div>
                   <p className="text-3xl sm:text-4xl md:text-6xl text-white font-serif italic font-light leading-[1.2] mb-16 max-w-4xl tracking-tight">
                     {reviews[active].text}
                   </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-[1px] bg-brand-gold/30 mb-6" />
                  <span className="text-white font-serif text-xl md:text-2xl italic tracking-wide mb-2">{reviews[active].name}</span>
                  <span className="text-brand-gold/40 text-[10px] tracking-[0.4em] uppercase font-bold">{reviews[active].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls - Premium Pagination */}
          <div className="flex items-center justify-center gap-12 mt-24">
            <motion.button 
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActive((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
              className="group flex items-center gap-3 text-brand-gold/40 hover:text-brand-gold transition-colors text-[10px] font-bold tracking-[0.4em] uppercase"
            >
              <ICONS.ArrowRight className="w-4 h-4 rotate-180 opacity-40 group-hover:opacity-100" />
              GERİ
            </motion.button>
            
            <div className="flex gap-4 items-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-700 rounded-full ${active === i ? 'w-12 h-[2px] bg-brand-gold' : 'w-2 h-[2px] bg-white/10 hover:bg-white/30'}`}
                />
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActive((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))}
              className="group flex items-center gap-3 text-brand-gold/40 hover:text-brand-gold transition-colors text-[10px] font-bold tracking-[0.4em] uppercase"
            >
              İLERİ
              <ICONS.ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
