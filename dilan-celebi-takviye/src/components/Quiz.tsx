"use client";

import { motion } from "framer-motion";
import styles from "./Quiz.module.css";
import { ArrowRight } from "lucide-react";

export default function Quiz() {
  return (
    <section className={styles.quizSection}>
      <div className={styles.bgGrain}></div>
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.title}>
          Benim İçin Ne Var?
        </h2>
        <p className={styles.description}>
          Yaşam tarzınız, uyku düzeniniz ve hedeflerinize göre size özel supplement kombinasyonunuzu bulalım.
        </p>
        
        <div className={styles.interactiveArea}>
          <motion.button 
            className={styles.quizBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Teste Başla <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }}/>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
