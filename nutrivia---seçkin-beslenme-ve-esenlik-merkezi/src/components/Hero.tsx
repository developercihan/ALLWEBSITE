import { motion } from 'motion/react';
import { ICONS, IMAGES } from '../constants';
import { PremiumButton } from './PremiumButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Scroll Down Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-brand-gold font-bold">Keşfet</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8 lg:gap-16 h-full items-center relative z-10">
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-brand-gold text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mb-8 block opacity-70"
            >
              LÜKS BESLENME TASARIMI • SELİN KAYA
            </motion.span>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8 font-light tracking-tight">
              Bedeninize <br />
              <span className="italic text-brand-gold font-serif">Saygı Duyun,</span> <br />
              Yeniden Doğun.
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.5 }}
              className="text-white/40 text-base md:text-xl max-w-xl mb-14 leading-relaxed font-light"
            >
              Bilimsel temelli, kişiye özel beslenme mimarisi ile sadece kilonuzu değil, 
              yaşam kalitenizi ve enerjinizi sanata dönüştürüyoruz.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-8">
              <a href="#randevu" className="w-full sm:w-auto">
                <PremiumButton icon={<ICONS.ArrowRight className="w-5 h-5" />}>
                  RANDEVU OLUŞTUR
                </PremiumButton>
              </a>
              
              <a href="#hizmetler" className="w-full sm:w-auto">
                <PremiumButton 
                  variant="outline" 
                  icon={<ICONS.Play className="w-4 h-4 fill-current opacity-40 group-hover:opacity-100 transition-opacity" />}
                >
                  HİZMETLER
                </PremiumButton>
              </a>
            </div>

            {/* Stats - Staggered */}
            <div className="mt-20 md:mt-32 pt-12 border-t border-white/5 flex flex-wrap gap-10 md:gap-16">
              {[
                { icon: ICONS.Award, val: '10+', label: 'YIL DENEYİM' },
                { icon: ICONS.Users, val: '800+', label: 'BAŞARI HİKAYESİ' },
                { icon: ICONS.Heart, val: '%99', label: 'MEMNUNİYET' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="flex items-center gap-5 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-full border border-brand-gold/15 flex items-center justify-center group-hover:border-brand-gold/40 group-hover:bg-brand-gold/5 transition-all duration-500">
                    <stat.icon className="w-5 h-5 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <div>
                    <div className="text-white font-serif text-2xl md:text-3xl leading-none font-light italic">{stat.val}</div>
                    <div className="text-brand-gold/30 text-[9px] tracking-widest uppercase mt-2 font-bold group-hover:text-brand-gold/50 transition-colors">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Image - Floating Effect */}
        <div className="col-span-12 lg:col-span-6 relative mt-16 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] lg:aspect-[3/4] max-h-[750px] mx-auto overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] group"
            >
              <img 
                src={IMAGES.hero} 
                alt="Uzman Diyetisyen" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/30 via-transparent to-transparent opacity-60" />
            </motion.div>
            
            {/* Floating Glass Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute -bottom-10 -right-5 md:-bottom-20 md:-right-10 p-8 md:p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] max-w-[240px] md:max-w-[300px] shadow-2xl"
            >
              <div className="text-brand-gold font-serif text-4xl md:text-5xl italic mb-4 leading-none font-light">Zarafet</div>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed tracking-wide font-light">
                Modern beslenme disiplinini lüks bir yaşam tarzına dönüştürüyoruz. Sizin için, size özel.
              </p>
            </motion.div>
            
            {/* Background Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-gold/5 rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
