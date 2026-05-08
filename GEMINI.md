# Antigravity Agency Workflow Rules (MASTER BRAIN)

> **MANDATORY:** Bu kurallar bu workspace'deki her işlem için bağlayıcıdır ve Antigravity'nin temel çalışma protokolüdür.

---

## 1. Ana Mimari & Konumlar
- **Master Root:** `c:\Users\Ötesi Var\Desktop\deneme web sitesi`
- **Ana Web Sitesi:** `novadrift-digital` (NovaDrift Digital)
- **Ana URL (SABİT):** https://novadrift-digital-five.vercel.app/ (Asla yeni link oluşturulmamalı, her zaman bu link güncellenmelidir.)
- **Tek GitHub Deposu:** `ALLWEBSITE` (https://github.com/developercihan/ALLWEBSITE)

## 2. Yeni Proje & Güncelleme İş Akışı (ZORUNLU)
Sisteme yeni bir web sitesi eklendiğinde veya mevcut bir site güncellendiğinde şu adımlar **sırasıyla** izlenmelidir:

1.  **ALLWEBSITE Push:** Yapılan tüm değişiklikler anında `ALLWEBSITE` reposuna pushlanmalıdır. Başka hiçbir repo kullanılmamalıdır.
2.  **Vercel Deployment:** Yeni/Güncellenen site Vercel'de canlıya alınmalı ve güncel prodüksiyon URL'si alınmalıdır.
3.  **Portfolyo Entegrasyonu:**
    - `novadrift-digital/src/components/Portfolio.tsx` dosyası güncellenmelidir.
    - Yeni proje, gerçek ekran görüntüsü (`public/portfolio/` içine eklenerek) ve canlı Vercel linki ile `CardStack` içine eklenmelidir.
4.  **Tam Senkronizasyon:** Lokal klasör, `ALLWEBSITE` reposu ve Vercel (hem ana site hem de alt projeler) her zaman birbiriyle %100 uyumlu olmalıdır.

## 3. İletişim & Prensipler
- `novadrift-digital` her zaman ajansın "Vitrin" projesi olarak görülmelidir.
- Kullanıcı "yeni bir site yaptım" dediğinde, otomatik olarak bu siteyi `ALLWEBSITE`'a yedekle, Vercel'e çıkar ve NovaDrift portfolyosuna ekle.
- **Hata Payı Sıfır:** Ana site dışındaki projelerin Vercel'den silinmesi kesinlikle yasaktır (istisna: isim değişikliği veya temiz kurulum gerekliyse kullanıcı onayı ile).

---
*Bu dosya Antigravity'nin bu workspace'deki kalıcı hafızasıdır.*
