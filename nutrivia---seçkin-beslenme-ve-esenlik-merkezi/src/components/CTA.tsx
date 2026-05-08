import { motion } from 'motion/react';
import { ICONS, IMAGES } from '../constants';
import { PremiumButton } from './PremiumButton';

export default function CTA() {
  return (
    <section id="randevu" className="py-24 md:py-48 bg-transparent relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-gold)_0%,_transparent_70%)] opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-green/40 border border-brand-gold/10 rounded-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative backdrop-blur-3xl group">
          
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] lg:h-auto overflow-hidden relative">
             <img 
              src={IMAGES.lifestyle} 
              alt="Sağlıklı yaşam tarzı" 
              className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply" />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-green/40 to-transparent lg:hidden" />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2 p-10 md:p-20 lg:p-32 flex flex-col justify-center relative">
            {/* Botanical Decoration */}
            <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none grayscale group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12">
              <ICONS.Apple className="w-80 h-80 text-brand-gold" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-brand-gold text-[10px] md:text-[11px] font-bold tracking-[0.5em] uppercase mb-10 block opacity-50"
              >
                YENİ BİR BAŞLANGIÇ
              </motion.span>
              
              <h2 className="text-4xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.05] mb-12 font-light">
                Sağlıklı Bir <br /> 
                <span className="italic text-brand-gold">Geleceğe</span> <br />
                Yelken Açın.
              </h2>
              
              <p className="text-white/30 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-xl italic">
                 Sizin için en doğru beslenme modelini birlikte kurgulayalım. 
                 Vücudunuzun ihtiyacı olan dengeye bugün kavuşun.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-12">
                <a href="#randevu" className="w-full sm:w-auto">
                  <PremiumButton>
                    RANDEVU AL
                  </PremiumButton>
                </a>
                
                <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <PremiumButton variant="outline" className="w-full" icon={<ICONS.ArrowRight className="w-4 h-4" />}>
                    WHATSAPP
                  </PremiumButton>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
