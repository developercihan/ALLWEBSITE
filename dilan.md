# "Dilan Çelebi Takviye Ürünleri" - Antigravity Web Sitesi Proje ve Tasarım Kılavuzu

Bu belge, **Dilan Çelebi Takviye Ürünleri** markası için **Antigravity** mimarisiyle sıfırdan geliştirilecek profesyonel e-ticaret web sitesinin teknik, stratejik, tasarım ve içerik altyapısını detaylandırmaktadır. 

---

## 1. Proje Vizyonu ve Marka Konumlandırma

*   **Marka Adı:** Dilan Çelebi Takviye Ürünleri
*   **Sektör:** Sağlıklı Yaşam, Vitamin, Mineral ve Sporcu Takviyeleri (Nutrasötik)
*   **Vizyon:** Bilimsel temelli, güvenilir, premium ve kişiselleştirilmiş takviye ürünleri modern tüketiciyle buluşturmak; estetik ve fonksiyonelliği dijital dünyada kusursuz birleştirmek.
*   **Antigravity Felsefesi:** Web sitesinde "yerçekimsiz" bir akıcılık, hafiflik ve akışkanlık hissi yaratılacaktır. Ağır yük, yavaş yüklenen görseller, karmaşık menüler yerine; kullanıcıyı yormayan, minimalist, ferah ve sezgisel bir arayüz kurgulanacaktır.

---

## 2. Mimari ve Site Haritası (Sitemap)

Web sitesi kullanıcıyı kaybetmeden en kısa sürede doğru ürüne ulaştırmak üzere optimize edilmiştir.

1.  **Ana Sayfa (Home):**
    *   Dinamik Hero Alanı (Antigravity hissiyatına uygun yumuşak geçişli görsel / video)
    *   Hızlı Kategori Seçicisi (Bağışıklık, Enerji, Sporcu, Güzellik/Kollajen, Uyku/Stres)
    *   Öne Çıkan ve Çok Satan Ürünler Karusel Slider
    *   "Dilan Çelebi Uzman Tavsiyesi" Bölümü
    *   Sosyal Kanıt / Müşteri Deneyimleri ve Basında Biz
2.  **Ürünler / Mağaza (Shop / Catalog):**
    *   Gelişmiş Filtreleme (Hedef, Yaş Grubu, Form - Kapsül/Sıvı/Toz, Fiyat Aralığı)
    *   Hızlı Görünüm ve Sepete Ekle Özelliği
3.  **Kişiselleştirilmiş Quiz / Kombinasyon Sihirbazı ("Benim İçin Ne Var?"):**
    *   Kullanıcının yaşam tarzı, uyku düzeni, beslenme alışkanlıkları ve hedeflerine göre otomatik ürün kombinasyonu oluşturan interaktif modül.
4.  **Ürün Detay Sayfası (PDP):**
    *   Yüksek çözünürlüklü ürün görselleri ve 360° paket incelemesi
    *   Etken Madde Analizi ve Besin Değerleri Tablosu
    *   Kullanım Önerisi ve Uzman Notu
    *   Sertifikalar ve Laboratuvar Test Sonuçları (Güven unsuru)
    *   Müşteri Yorumları ve Puanlama
5.  **Hakkımızda / Bilimsel Kurul:**
    *   Dilan Çelebi'nin Hikayesi ve Marka Felsefesi
    *   Kalite Standartları (GMP, Helal, ISO, FDA uyumlulukları)
6.  **Blog / Sağlık Rehberi:**
    *   Vitaminler, bağışıklık ipuçları, sağlıklı yaşam makaleleri
7.  **İletişim & Destek:**
    *   Canlı Destek Entegrasyonu, SSS (Sık Sorulan Sorular), İletişim Formu

---

## 3. Kullanıcı Deneyimi (UX) ve Arayüz (UI) Tasarım Kuralları

*   **Renk Paleti (Antigravity & Sağlık Tonları):**
    *   *Ana Arka Plan:* Saf beyaz ve hafif buzlu gri tonları (`#F8F9FA`, `#FFFFFF`)
    *   *Ana Metin / Kontrast:* Derin Antrasit (`#1A1A1A`)
    *   *Marka Vurgu Rengi (Accent):* Adaçayı Yeşili / Doğal Soft Mint (`#4A7C59` ve `#88B04B` tonları - tazelik ve güven hissi)
    *   *İkincil Vurgu:* Şampanya / Yumuşak Altın Detaylar (`#D4AF37` - premium dokunuşlar için)
*   **Tipografi:**
    *   *Başlıklar:* Modern Serif (Örn: *Playfair Display* veya *Cormorant Garamond* - prestij ve zarafet)
    *   *Gövde Metni:* Temiz Sans-Serif (Örn: *Inter* veya *Plus Jakarta Sans* - maksimum okunabilirlik)
*   **Mikro Etkileşimler:**
    *   Butonların üzerine gelindiğinde (hover) hafif yukarı süzülme efekti (Antigravity hissiyatı).
    *   Sepete ekleme anında ekranda yormayan, zarif bir bildirim animasyonu.

---

## 4. Teknik Altyapı ve Performans Gereksinimleri

*   **Önerilen Teknolojiler:**
    *   *Frontend:* Next.js (React) veya Shopify Plus / Headless E-ticaret altyapısı (Maksimum hız ve SEO performansı için).
    *   *Backend:* Node.js / GraphQL veya güvenli e-ticaret bulut servisleri.
    *   *Ödeme ve Kargo:* iyzico / PayTR entegrasyonu, Aras/Yurtiçi Kargo API bağlantıları.
*   **Performans Hedefleri:**
    *   Google Lighthouse Performans Skorunun her sekmede 90+ olması.
    *   Mobil uyumluluk (Mobile-First yaklaşım, kullanıcıların %80'inin mobilden alışveriş yapacağı öngörüsüyle kusursuz mobil deneyim).
    *   SSL Sertifikası, 256-bit şifreleme ve KVKK / GDPR tam uyumluluğu.

---

## 5. İçerik Stratejisi ve Örnek Ürün Kategorizasyonu

### Örnek Ürün Kategorileri:
1.  **Bağışıklık Kalkanı:** C Vitamini, D3+K2 Damla, Çinko ve Bitkisel Ekstreler.
2.  **Zindelik & Enerji:** B-Kompleks, Koenzim Q10, Ginseng karışımları.
3.  **Güzellik & Yaşlanma Karşıtı:** Hidrolize Kollajen (Tip I, II, III), Hyaluronik Asit, Biotin.
4.  **Zihinsel Odak & Uyku:** Ashwagandha, Melatonin, Magnezyum Glisinat.

### Örnek Ürün Kartı Metni (Magnezyum Kompleksi):
*   **Ürün Adı:** Dilan Çelebi Advanced Magnesium Complex
*   **Açıklama:** "Günlük koşturmacada kas gerginliğini azaltan, uyku kalitesini artıran ve enerji metabolizmasını destekleyen 3'lü magnezyum matris formülü."
*   **Etken Maddeler:** Magnezyum Glisinat, Magnezyum Malat, Magnezyum Sitrat.

---

## 6. Lansman ve Dijital Pazarlama Yol Haritası

*   **Faz 1 (Hazırlık):** UI/UX tasarımlarının Figma üzerinde tamamlanması, kodlama aşaması ve test ürün verilerinin yüklenmesi.
*   **Faz 2 (Ön Lansman):** "Kişiselleştirilmiş Quiz" modülü ile e-posta bültenine kayıt olan kullanıcılara özel indirim kuponları tanımlanması.
*   **Faz 3 (Lansman):** Sosyal medya influencer iş birlikleri (diyetisyenler, sağlıklı yaşam koçları) ve performans pazarlama (Meta & Google Ads) kampanyalarının devreye alınması.

---
*Bu doküman, Dilan Çelebi Takviye Ürünleri web sitesinin geliştirme sürecinde tüm paydaşlar (tasarımcılar, yazılımcılar, içerik üreticileri) için ana yol haritası olarak tasarlanmıştır.*
