import { motion } from 'motion/react';
import { ICONS } from '../constants';

const steps = [
  {
    icon: ICONS.Users,
    title: 'İLK GÖRÜŞME',
    desc: 'Hedeflerinizi, yaşam tarzınızı ve sağlık durumunuzu değerlendiriyoruz.'
  },
  {
    icon: ICONS.Calendar,
    title: 'KİŞİYE ÖZEL PLAN',
    desc: 'Size özel beslenme planınızı bilimsel yöntemlerle hazırlıyoruz.'
  },
  {
    icon: ICONS.Activity,
    title: 'UYGULAMA & TAKİP',
    desc: 'Planınızı uygularken düzenli takip ve motivasyon desteği sağlıyoruz.'
  },
  {
    icon: ICONS.Star,
    title: 'SONUÇ & DEVAMLILIK',
    desc: 'Hedeflerinize ulaşıyor ve sağlıklı alışkanlıklarınızı kalıcı hale getiriyoruz.'
  }
];

export default function Process() {
  return (
    <section id="programlar" className="py-24 md:py-48 bg-transparent relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-serif italic text-brand-gold whitespace-nowrap">Esenlik Yolculuğu</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-gold text-[10px] md:text-[11px] font-bold tracking-[0.5em] uppercase mb-8 block opacity-60">SÜREÇ NASIL İŞLİYOR?</span>
            <h2 className="text-4xl md:text-7xl text-white font-serif mb-6 leading-tight">Mükemmel <span className="italic text-brand-gold">Dönüşüm</span></h2>
            <p className="text-white/30 text-sm md:text-base font-light tracking-[0.1em]">4 adımda bilimsel ve sürdürülebilir bir yolculuk</p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector Line - More subtle */}
          <div className="absolute top-[60px] md:top-[80px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 lg:gap-12 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center group relative"
                >
                  {/* Step Number Background */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-serif italic text-brand-gold/[0.03] pointer-events-none group-hover:text-brand-gold/[0.06] transition-colors duration-1000">
                    0{i + 1}
                  </div>

                  <div className="relative mb-12">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-green border border-brand-gold/10 flex items-center justify-center relative z-10 transition-all duration-700 group-hover:border-brand-gold/40 group-hover:shadow-[0_0_50px_rgba(200,169,107,0.1)]">
                      <Icon className="w-8 h-8 md:w-12 md:h-12 text-brand-gold/50 group-hover:text-brand-gold transition-all duration-500 group-hover:scale-110" />
                    </div>
                    {/* Small Badge */}
                    <div className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-green font-serif text-[10px] md:text-xs italic z-20 shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 uppercase">
                      ADIM
                    </div>
                  </div>

                  <h3 className="text-white text-[12px] md:text-[13px] font-bold tracking-[0.4em] mb-6 uppercase text-center group-hover:text-brand-gold transition-colors duration-500">{step.title}</h3>
                  <p className="text-white/30 group-hover:text-white/50 text-sm md:text-base font-light leading-relaxed text-center max-w-[220px] transition-colors duration-500">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
