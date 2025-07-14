# 🚀 Eterna Teknik Servis Web Sitesi

Bu proje, **Next.js 14 App Router** mimarisi ile geliştirilen ve SSR + SEO uyumlu, **yüksek performanslı bir teknik servis web sitesidir**. Hedef; beyaz eşya, kombi, klima ve elektronik cihazlar için bakım-onarım bilgisi sunan, **tamamen responsive**, **mobilde <1s açılan**, ve **Google PageSpeed puanı 100/100** olan bir dijital altyapı sunmaktır.

## 📦 Özellikler

- ⚡ **Next.js 14 (App Router)** ile tamamen SSR destekli mimari
- 📱 **Mobil öncelikli tasarım** ve tam responsive görünüm
- ✅ **Google PageSpeed Insights: 100/100** (Mobil & Masaüstü)
- 🧠 **Serpsonic destekli 10.000+ karakterlik SEO makalesi** entegrasyonu
- 🧩 **Schema.org yapısal verileri:**
  - `Article`, `LocalBusiness`, `BreadcrumbList`, `ReviewSnippet`, `FAQPage`, `QAPage`
- 💬 **Dinamik müşteri yorumları** ve **soru-cevap sistemleri**
- 🗺️ `sitemap.xml` ve `robots.txt` otomatik üretim
- 🌐 OG / Twitter meta etiketleri ile zengin paylaşım deneyimi
- ☎️ Mobilde "Hemen Ara" butonu ve **CTA odaklı UX**
- 🔒 KVKK ve Gizlilik sayfaları dahil, tüm yasal içerikler
- 🚫 **Yetkili servis olmadığımız** bilgisi tüm sayfalarda görünür şekilde yer almakta

## 🧩 Sayfa Yapısı

- `/` – Ana Sayfa
- `/hakkimizda` – Hakkımızda
- `/iletisim` – İletişim
- `/kvkk` – KVKK Metni
- `/gizlilik` – Gizlilik Politikası
- `/sss` – Sıkça Sorulan Sorular
- `/hizmet?service=Beyaz+Eşya+Servisi` → Dinamik hizmet sayfaları:
- Beyaz Eşya Servisi, Buzdolabı, Çamaşır Makinesi, Bulaşık Makinesi, Fırın, Klima, Kombi, Televizyon

## ⚙️ Kurulum

Projeyi çalıştırmak için aşağıdaki adımları takip edin:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

Ardından tarayıcıda [http://localhost:3000](http://localhost:3000) adresine gidin.

## 📁 Konfigürasyon
- `src/config/company.ts` → Şirket bilgileri burada merkezi olarak tutulur.
- `public/article.md` → Serpsonic makalesi markdown olarak buradan yüklenir.
- `src/data/fakeReviews.ts` → Yapay müşteri yorumları
- `tailwind.config.js`, `postcss.config.mjs`, `next-sitemap.config.js` → Stil ve SEO konfigürasyonları

## 🧪 Performans ve SEO
Proje; mobilde ve masaüstünde aşağıdaki metrikleri hedefler:

- PageSpeed Skoru: 100
- Mobil Açılış Süresi: < 1sn
- HTML Başlıklar: Optimize
- OG/Twitter Etiketleri: Eksiksiz
- Schema.org: Entegre

### Doğrulama araçları:
- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- GTMetrix
- WebPageTest
- Ahrefs
- ScreamingFrog

## 📌 Uyarı
📣 Bu site yetkili servis değildir. Yalnızca garanti dışı cihazlar için bakım, onarım ve arıza çözümleri sunar.
Bu bilgi her sayfada açık şekilde belirtilmiştir.

## 🚀 Deployment
Proje Vercel üzerinde yayınlanmıştır:
🔗 [https://service-web-blush.vercel.app](https://service-web-blush.vercel.app)

## 👨‍💻 Geliştirici
Bu proje, **Eterna Teknoloji A.Ş.** bünyesinde,
**Mersin Üniversitesi Bilgisayar Mühendisliği Zorunlu Yaz Stajı (07.07.2025 – 01.09.2025)** kapsamında
**Berkay Bakaç** tarafından geliştirilmiştir.

- GitHub: [@berkaybakac](https://github.com/berkaybakac)
- LinkedIn: [linkedin.com/in/berkaybakac](https://linkedin.com/in/berkaybakac)
```
