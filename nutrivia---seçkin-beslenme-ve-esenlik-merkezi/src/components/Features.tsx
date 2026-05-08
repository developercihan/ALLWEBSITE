import { motion } from 'motion/react';
import { ICONS } from '../constants';

const features = [
  {
    icon: ICONS.Stethoscope,
    title: 'KİŞİYE ÖZEL PLANLAMA',
    desc: 'Yaşam tarzınıza, hedeflerinize ve ihtiyaçlarınıza özel beslenme programları.'
  },
  {
    icon: ICONS.GraduationCap,
    title: 'BİLİMSEL YAKLAŞIM',
    desc: 'Güncel araştırmalar ve bilimsel veriler ışığında etkili ve güvenilir yöntemler.'
  },
  {
    icon: ICONS.Zap,
    title: 'SÜRDÜRÜLEBİLİR SONUÇLAR',
    desc: 'Kısa vadeli değil, uzun vadeli sağlıklı alışkanlıklar ve kalıcı değişim.'
  },
  {
    icon: ICONS.Phone,
    title: 'SÜREKLİ DESTEK',
    desc: 'Program süresince motivasyon desteği ve düzenli takip imkanı.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
  }
};

export default function Features() {
  return (
    <section className="py-24 md:py-40 bg-transparent relative overflow-hidden">
      {/* Decorative Text Reveal */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="text-[12rem] font-serif italic text-brand-gold"
        >
          Denge & Zarafet • Sağlık & Yaşam • Denge & Vitalite • Selin Kaya • Profesyonel Beslenme Tasarımı • 
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group relative p-8 rounded-[2rem] hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-full border border-brand-gold/10 flex items-center justify-center mb-8 transition-all duration-700 group-hover:scale-110 group-hover:border-brand-gold/40 group-hover:shadow-[0_0_30px_rgba(200,169,107,0.1)]">
                <feature.icon className="w-6 h-6 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
              </div>
              <h3 className="text-brand-gold text-[10px] md:text-[11px] font-bold tracking-[0.3em] mb-4 uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                {feature.title}
              </h3>
              <p className="text-white/30 group-hover:text-white/50 text-sm leading-relaxed max-w-[240px] font-light transition-colors">
                {feature.desc}
              </p>
              
              {/* Subtle accent border on hover */}
              <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/5 rounded-[2rem] transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
