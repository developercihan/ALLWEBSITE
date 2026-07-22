import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Dilan Çelebi.</h3>
            <p className={styles.brandDesc}>
              Bilimsel temelli, güvenilir ve premium takviye ürünlerle 
              hayat kalitenizi artırıyoruz.
            </p>
          </div>
          
          <div className={styles.linkGroup}>
            <span className={styles.linkTitle}>Menü</span>
            <Link href="#" className={styles.link}>Koleksiyon</Link>
            <Link href="#" className={styles.link}>Benim İçin Ne Var?</Link>
            <Link href="#" className={styles.link}>Bilimsel Kurul</Link>
            <Link href="#" className={styles.link}>Hakkımızda</Link>
          </div>
          
          <div className={styles.linkGroup}>
            <span className={styles.linkTitle}>Destek</span>
            <Link href="#" className={styles.link}>Sıkça Sorulan Sorular</Link>
            <Link href="#" className={styles.link}>Kargo & İade</Link>
            <Link href="#" className={styles.link}>İletişim</Link>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} Dilan Çelebi Takviye. Tüm hakları saklıdır.</span>
          <span>KVKK Aydınlatma Metni | Gizlilik Politikası</span>
        </div>
      </div>
    </footer>
  );
}
