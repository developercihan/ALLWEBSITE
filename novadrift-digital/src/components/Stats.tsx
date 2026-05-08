import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: "TASARIM ODAKLI GÜVEN", value: 75, suffix: "%" },
  { label: "MOBİL KULLANICI DENEYİMİ", value: 90, suffix: "%+" },
  { label: "İLK İZLENİM SÜRESİ", value: 3, suffix: "sn" },
  { label: "MAX. TESLİMAT SÜRESİ", value: 14, suffix: " GÜN" },
];

export default function Stats() {
  return (
    <section className="py-12 md:py-20 bg-[#161616]/80 backdrop-blur-md border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 md:gap-6"
            >
              {index > 0 && <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>}
              <div className="flex flex-col">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00D1FF] mb-1 md:mb-2 font-mono">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
