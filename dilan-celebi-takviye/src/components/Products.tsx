"use client";

import { motion } from "framer-motion";
import styles from "./Products.module.css";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Bağışıklık Kalkanı",
    description: "C Vitamini, D3+K2 Damla, Çinko ve yüksek biyo-yararlanımlı bitkisel ekstreler ile güçlendirilmiş yoğun koruma formülü.",
    ingredients: ["Vitamin C", "Zinc", "D3+K2", "Elderberry"],
    image: "https://images.unsplash.com/photo-1550572017-edb7994df514?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Advanced Magnesium Complex",
    description: "Günlük koşturmacada kas gerginliğini azaltan, uyku kalitesini artıran ve enerji metabolizmasını destekleyen 3'lü magnezyum matris formülü.",
    ingredients: ["Magnezyum Glisinat", "Magnezyum Malat", "Magnezyum Sitrat"],
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Zindelik & Enerji",
    description: "Hücresel enerji üretimini destekleyen B-Kompleks, Koenzim Q10 ve Ginseng karışımı.",
    ingredients: ["B-Complex", "CoQ10", "Ginseng"],
    image: "https://images.unsplash.com/photo-1563289053-12d8a554a9fc?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.header}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Koleksiyon.
        </motion.h2>
      </div>
      
      <div className={styles.productList}>
        {products.map((product, i) => (
          <motion.div 
            key={product.id} 
            className={styles.productCard}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={product.image} 
                alt={product.title}
                fill
                className={styles.image}
              />
            </div>
            
            <div className={styles.info}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productDesc}>{product.description}</p>
              
              <div className={styles.ingredients}>
                {product.ingredients.map(ing => (
                  <span key={ing} className={styles.ingredientBadge}>{ing}</span>
                ))}
              </div>
              
              <button className={`btn btn-outline ${styles.buyBtn}`}>
                İncele
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
