import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform, MotionValue } from 'framer-motion';

function Particle({ p, springX, springY }: { p: any, springX: MotionValue<number>, springY: MotionValue<number> }) {
  const pX = useTransform(springX, [-1, 1], [-p.parallaxX, p.parallaxX]);
  const pY = useTransform(springY, [-1, 1], [-p.parallaxY, p.parallaxY]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: p.left,
        top: p.top,
        x: pX,
        y: pY,
      }}
    >
      <motion.div
        className="rounded-full bg-gold/40 shadow-[0_0_10px_rgba(198,161,110,0.5)]"
        style={{ width: p.size, height: p.size }}
        animate={{
          x: [0, p.tx, 0],
          y: [0, p.ty, 0],
          opacity: [0.1, 0.7, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          ease: "linear",
          delay: p.delay,
        }}
      />
    </motion.div>
  );
}

export default function CinematicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Generate particles once on mount to avoid hydration mismatches
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to range [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Generate particles
    const generatedParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 40 + 40, // Very slow moving
      delay: Math.random() * -40,
      tx: (Math.random() - 0.5) * 300,
      ty: (Math.random() - 0.5) * 300,
      parallaxX: (Math.random() - 0.5) * 150, // Parallax depth layer
      parallaxY: (Math.random() - 0.5) * 150,
    }));
    setParticles(generatedParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth out the mouse values
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });
  
  // Create transforms for the ambient spheres based on mouse position
  const x1 = useTransform(springX, [-1, 1], [-150, 150]);
  const y1 = useTransform(springY, [-1, 1], [-150, 150]);
  
  const x2 = useTransform(springX, [-1, 1], [180, -180]);
  const y2 = useTransform(springY, [-1, 1], [180, -180]);
  
  const x3 = useTransform(springX, [-1, 1], [100, -100]);
  const y3 = useTransform(springY, [-1, 1], [-100, 100]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-deep-black">
      {/* Light spots mapped to mouse movement */}
      <motion.div 
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] bg-gold/10 mix-blend-screen"
        style={{ x: x1, y: y1 }}
      />
      <motion.div 
        className="absolute top-[40%] -right-[20%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[160px] bg-white/5 mix-blend-screen"
        style={{ x: x2, y: y2 }}
      />
      <motion.div 
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] bg-gold/5 mix-blend-screen"
        style={{ x: x3, y: y3 }}
      />
      
      {/* Abstract floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} p={p} springX={springX} springY={springY} />
      ))}

      {/* Subtle animated noise overlay for luxury texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />
    </div>
  );
}
