import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CONTENT: Record<string, { title: string, content: string }> = {
  '/kvkk': {
    title: 'KVKK Aydınlatma Metni',
    content: `Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca, Nutrivia Diyet ve Beslenme Merkezi (“Kuruluş”) tarafından veri sorumlusu sıfatıyla işlenen kişisel verileriniz hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.

    1. Veri Sorumlusu
    Nutrivia Diyet ve Beslenme Merkezi olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.

    2. Kişisel Verilerin İşlenme Amacı
    Kişisel verileriniz; sağlık hizmetlerinin sunulması, randevu süreçlerinin yönetilmesi, danışmanlık hizmetlerinin ifası ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.

    3. İşlenen Kişisel Veriler
    Ad-soyad, iletişim bilgileri, genel sağlık verileri ve beslenme alışkanlıklarınız bu kapsamda değerlendirilmektedir.`
  },
  '/gizlilik-politikasi': {
    title: 'Gizlilik Politikası',
    content: `Nutrivia olarak ziyaretçilerimizin gizliliğine önem veriyoruz. Bu politika, web sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını açıklar.

    Toplanan Bilgiler:
    - İletişim Formları: Adınız ve e-posta adresiniz sadece size geri dönüş yapmak için kullanılır.
    - Analitik Veriler: Sitemizi iyileştirmek için anonim kullanım verileri toplanabilir.

    Bilgi Güvenliği:
    Verileriniz endüstri standartlarında şifreleme ve güvenlik yöntemleri ile korunmaktadır.`
  },
  '/cerez-politikasi': {
    title: 'Çerez Politikası',
    content: `Web sitemiz, deneyiminizi iyileştirmek için çerezler kullanmaktadır. Çerezler, web tarayıcınız tarafından bilgisayarınızda saklanan küçük dosyalardır.

    Çerez Türleri:
    - Zorunlu Çerezler: Sitenin temel fonksiyonları için gereklidir.
    - Analitik Çerezler: Sitemizi nasıl kullandığınızı anlamamıza yardımcı olur.

    Çerezleri Nasıl Kontrol Edebilirsiniz?
    Tarayıcı ayarlarınızdan çerezleri engelleyebilir veya silebilirsiniz.`
  }
};

export default function Legal() {
  const { pathname } = useLocation();
  const [data, setData] = useState(CONTENT['/kvkk']);

  useEffect(() => {
    if (CONTENT[pathname]) {
      setData(CONTENT[pathname]);
    }
  }, [pathname]);

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-brand lg:prose-xl"
        >
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Yasal Bilgilendirme</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">{data.title}</h1>
          <div className="text-white/70 leading-[2] whitespace-pre-line space-y-6">
            {data.content}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
