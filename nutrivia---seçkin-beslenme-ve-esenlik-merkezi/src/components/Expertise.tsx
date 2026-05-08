import { motion } from 'motion/react';
import { ICONS, IMAGES } from '../constants';

const expertiseItems = [
  {
    title: 'Kilo Yönetimi',
    desc: 'Sağlıklı kilo verme veya kilo alma hedeflerinize ulaşmanız için size özel planlar.',
    icon: ICONS.Activity
  },
  {
    title: 'Klinik Beslenme',
    desc: 'Diyabet, tiroit, PCOS gibi hastalıklarda beslenme desteği ve tedavi süreci.',
    icon: ICONS.Stethoscope
  },
  {
    title: 'Gebelik & Emzirme',
    desc: 'Gebelikte ve emzirme döneminde doğru beslenme rehberliği.',
    icon: ICONS.Heart
  },
  {
    title: 'Sporcu Beslenmesi',
    desc: 'Spor performansınızı artıracak kişiye özel beslenme programları.',
    icon: ICONS.Zap
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
  }
};

export default function Expertise() {
  return (
    <section id="hizmetler" className="py-24 md:py-40 bg-transparent relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left - List */}
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span 
              variants={itemVariants}
              className="text-brand-gold text-[10px] md:text-[12px] font-semibold tracking-[0.4em] uppercase mb-12 block opacity-60"
            >
              UZMANLIK ALANLARIM
            </motion.span>
            
            <div className="space-y-12 md:space-y-16">
              {expertiseItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="flex gap-6 md:gap-10 group cursor-default"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500 group-hover:rotate-12">
                      <Icon className="w-6 h-6 text-brand-gold group-hover:text-brand-green transition-colors" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-white text-xl md:text-2xl font-serif mb-3 group-hover:text-brand-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-white/40 font-light leading-relaxed max-w-md text-sm md:text-base italic">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right - Interactive Component */}
        <div className="col-span-12 lg:col-span-5 relative mt-16 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Circle Image */}
            <div className="aspect-square rounded-full overflow-hidden relative z-10 border-[1px] border-brand-gold/20 p-6 bg-brand-green/20 backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src={IMAGES.nutrition} 
                  alt="Beslenme uzmanı" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Glass Floating Card - Fixed Mobile Positioning */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute top-1/2 -left-10 lg:-left-20 -translate-y-1/2 bg-brand-green/95 backdrop-blur-3xl p-8 md:p-12 rounded-[2rem] z-20 border border-brand-gold/15 max-w-[280px] md:max-w-[360px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] group"
            >
              <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                <ICONS.GraduationCap className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-serif mb-6 leading-tight">
                Online <br /> <span className="text-brand-gold italic">Danışmanlık</span>
              </h3>
              <p className="text-white/40 font-light text-sm md:text-base leading-relaxed mb-10">
                Türkiye'nin veya dünyanın neresinde olursanız olun, profesyonel beslenme desteği size bir tık kadar yakın.
              </p>
              <motion.a 
                href="#randevu"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-brand-gold text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase transition-all"
              >
                HEMEN KEŞFEDİN <ICONS.ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Decorative background blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/5 rounded-full blur-[100px] -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
