import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // High-fidelity parallax layers
  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yLayer2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const yLayer3 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yLayer4 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  
  const rotateSlow = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotateFast = useTransform(scrollYProgress, [0, 1], [0, -45]);
  
  // Refined grid opacity - periodic pulsing on scroll
  const gridOpacity = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], 
    [0.02, 0.08, 0.03, 0.08, 0.03, 0.08, 0.03, 0.05]
  );

  const scaleElements = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-brand-green">
      {/* Texture: Grain */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Atmospheric Base Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,_rgba(200,169,107,0.1)_0%,_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,_rgba(200,169,107,0.06)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(200,169,107,0.03)_0%,_transparent_70%)]"></div>

      {/* Parallax Blobs: The "Movement" */}
      <motion.div 
        style={{ y: yLayer1, rotate: rotateSlow, scale: scaleElements }}
        className="absolute top-[2%] right-[-5%] w-[800px] h-[800px] rounded-full bg-brand-gold/[0.04] blur-[150px]"
      />
      
      <motion.div 
        style={{ y: yLayer2, rotate: rotateFast }}
        className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] rounded-full bg-brand-gold/[0.03] blur-[180px]"
      />

      <motion.div 
        style={{ y: yLayer3, scale: scaleElements }}
        className="absolute top-[35%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-gold/[0.05] blur-[120px]"
      />

      {/* Interactive Grid System */}
      <motion.div 
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 transition-opacity duration-1000"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8A96B0A_1px,transparent_1px),linear-gradient(to_bottom,#C8A96B0A_1px,transparent_1px)] bg-[size:4rem_4rem] sm:bg-[size:6rem_6rem]" />
        {/* Secondary finer grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8A96B05_1px,transparent_1px),linear-gradient(to_bottom,#C8A96B05_1px,transparent_1px)] bg-[size:1rem_1rem] sm:bg-[size:1.5rem_1.5rem] opacity-30" />
      </motion.div>

      {/* Floating Lux Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05], 
              scale: [0.8, 1.2, 0.8],
              y: [0, -30, 0] 
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.8
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              y: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -50])
            }}
            className="w-1 h-1 bg-brand-gold/40 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Vertical Light Streaks */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            style={{
              left: `${10 + i * 12}%`,
              y: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -70]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.02, 0.08, 0.02])
            }}
            className="absolute top-0 w-[0.5px] h-40 bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent hidden lg:block"
          />
        ))}
      </div>

      {/* Artistic Curves */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M -20,40 C 30,20 70,60 120,40"
          fill="none"
          stroke="var(--color-brand-gold)"
          strokeWidth="0.04"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
          d="M -20,60 C 40,80 60,40 120,60"
          fill="none"
          stroke="var(--color-brand-gold)"
          strokeWidth="0.04"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
};
