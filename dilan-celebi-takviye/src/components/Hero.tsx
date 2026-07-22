"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImg1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yImg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Background blurred abstract shapes */}
      <div className={styles.floatingElements}>
        <motion.div 
          className={`${styles.pill} ${styles.pill1}`} 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        />
        <motion.div 
          className={`${styles.pill} ${styles.pill2}`} 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
        />
      </div>

      {/* Floating Images for Layered Depth */}
      <motion.div 
        className={`${styles.floatingImage} ${styles.img1}`}
        style={{ y: yImg1, opacity }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1646627927781-67823f669e2a?q=80&w=1000&auto=format&fit=crop" 
          alt="Premium Supplements"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      <motion.div 
        className={`${styles.floatingImage} ${styles.img2}`}
        style={{ y: yImg2, opacity }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000&auto=format&fit=crop" 
          alt="Natural Ingredients"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Typographic Brutalism */}
      <motion.div className={styles.textWrapper} style={{ y: yText, opacity }}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Dilan Çelebi
        </motion.h1>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Takviye
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Bilimsel temelli, kişiselleştirilmiş <br/>premium sağlık deneyimi.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <span>Keşfet</span>
        <motion.div 
          className={styles.scrollLine}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
