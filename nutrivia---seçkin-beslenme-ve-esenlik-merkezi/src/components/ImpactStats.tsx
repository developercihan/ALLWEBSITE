import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const STATS = [
  { label: "MUTLU DANIŞAN", value: "1500+" },
  { label: "KİŞİYE ÖZEL PROGRAM", value: "3000+" },
  { label: "BAŞARI ORANI", value: "%98" },
  { label: "YILLIK DENEYİM", value: "8+" }
];

export const ImpactStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="py-40 bg-brand-green/30 relative overflow-hidden">
      {/* Background Text */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-0 text-[20vw] font-serif text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
      >
        NUTRIVIA EXPERIENCE NUTRIVIA EXPERIENCE
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 text-[20vw] font-serif text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
      >
        SCIENCE HEALTH WELLNESS SCIENCE HEALTH
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="text-center space-y-4"
            >
              <div className="text-5xl md:text-7xl font-serif text-brand-gold">{stat.value}</div>
              <div className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-white/40 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
