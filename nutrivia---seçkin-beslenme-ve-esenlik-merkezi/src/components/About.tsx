import { motion } from 'motion/react';
import { IMAGES } from '../constants';

export default function About() {
  return (
    <section id="hakkimda" className="py-20 md:py-40 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-32 items-center">
          {/* Image Side - Overlapping Effect */}
          <div className="w-full lg:w-1/2 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] overflow-hidden border border-brand-gold/15 shadow-2xl">
                <img 
                  src={IMAGES.expert} 
                  alt="Diyetisyen Selin Kaya" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            {/* Decorative Gold Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-full h-full border border-brand-gold/10 rounded-[2rem] -z-0 translate-x-8 translate-y-8 md:translate-x-12 md:translate-y-12" 
            />
            
            {/* Floating Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-brand-gold p-6 md:p-10 rounded-2xl z-20 shadow-[0_20px_50px_rgba(200,169,107,0.3)]"
            >
              <div className="text-brand-green text-3xl md:text-5xl font-serif italic mb-1 tracking-tighter">12+</div>
              <p className="text-brand-green/70 text-[9px] md:text-[10px] font-bold tracking-widest uppercase">SERTİFİKA & BAŞARI</p>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-brand-gold text-[10px] md:text-[12px] font-semibold tracking-[0.4em] uppercase mb-8 block opacity-80">
                HAKKIMDA
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl text-white leading-[1.1] mb-10 font-light">
                Merhaba, ben <br />
                <span className="italic text-brand-gold">Diyetisyen Selin Kaya.</span>
              </h2>
              <div className="space-y-8 text-white/50 text-base md:text-lg font-light leading-relaxed mb-16 max-w-xl">
                <p>
                  Beslenme biliminin gücüne inanıyor ve danışanlarımın yaşam kalitelerini artırmak için çalışıyorum. 
                  Her bireyin benzersiz olduğunun farkındayım ve bu yüzden her programı kişiye özel planlıyorum.
                </p>
                <p className="opacity-80">
                  Hacettepe Üniversitesi Beslenme ve Diyetetik bölümünden mezun olduktan sonra, Fonksiyonel Tıp ve 
                  Klinik Beslenme alanlarında uzmanlaştım. Amacım sadece kilo vermek değil, vücudunuzla yeniden 
                  barışmanızı sağlamak.
                </p>
              </div>

              {/* Signature */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col gap-3"
              >
                <span className="text-brand-gold text-4xl md:text-5xl font-serif italic">Selin Kaya</span>
                <span className="text-brand-gold/40 items-center flex gap-5 text-[10px] tracking-[0.3em] font-bold uppercase mt-2">
                  <span className="w-16 h-[1px] bg-brand-gold/20"></span>
                  DİYETİSYEN • BİLİM İNSANI
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
