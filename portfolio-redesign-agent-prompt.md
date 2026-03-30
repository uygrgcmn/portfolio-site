# 🚀 Software Engineer Portfolio — Modern Redesign Agent Brief

## Görev
Bir yazılım mühendisi için **çağın ötesinde, modern ve profesyonel** bir portfolio web sitesi tasarla ve kodla. Mevcut tasarım yenilenmeli; ortaya çıkan ürün görsel olarak ezici, teknik olarak etkileyici ve endüstride fark yaratan bir deneyim sunmalı.

---

## 🎯 Amaç & Hedef Kitle
- **Kime:** Senior yazılım mühendisi, full-stack veya backend odaklı
- **İzleyici:** Potansiyel işverenler, startup kurucuları, teknik recruiter'lar, diğer mühendisler
- **Hedef:** İlk 5 saniyede "bu kişiyle çalışmak istiyorum" hissi yaratmak
- **Ton:** Sofistike, güvenli, teknik yetkinliği hissettiren — ama soğuk değil

---

## 🧠 Tasarım Yönü & Estetik

### Genel Konsept
**"Terminal meets Brutalist Luxury"** — Bir yazılım mühendisinin zihninden çıkmış gibi hissettiren, kod estetiğini lüks editorial tasarımla birleştiren bir site. Ne tamamen teknik/geek ne de sıradan bir kreatif portfolio.

### Renk Paleti (Seçeneklerden birini uygula)

**Seçenek A — Dark Precision:**
```
Background:   #0A0A0F  (neredeyse siyah, hafif mavi ton)
Surface:      #111118
Accent:       #00FFB2  (elektrik yeşil/mint — primary CTA ve vurgu)
Secondary:    #6C63FF  (derin violet)
Text:         #E8E8F0
Muted:        #555566
```

**Seçenek B — Monochrome Industrial:**
```
Background:   #F4F2EE  (kırık beyaz, kağıt dokusu hissi)
Surface:      #FFFFFF
Accent:       #1A1A2E  (lacivert siyah)
Pop:          #FF3D00  (yanık turuncu — sadece tek nokta vurgu)
Text:         #0D0D0D
Muted:        #8A8A8A
```

### Tipografi
- **Display Font:** `Bebas Neue`, `Clash Display`, `PP Editorial New`, veya `Playfair Display` — ağır, karakterli, editorial
- **Body Font:** `DM Mono`, `JetBrains Mono`, veya `IBM Plex Mono` — monospace, teknik hissi veren
- **UI Font:** `Syne` veya `Space Mono` — label'lar ve navigasyon için
- Google Fonts veya CDN üzerinden yükle

### Görsel Efektler & Atmosfer
- **Noise texture overlay** — tüm sayfa üzerinde %5-8 opacity ile subtle grain
- **Cursor takip efekti** — fare pozisyonuna göre yumuşak glow veya magnetic cursor
- **Glassmorphism kartlar** — backdrop-blur ile frosted glass, ince border
- **Kod snippet animasyonu** — hero bölümünde typewriter / syntax highlight efekti
- **Scroll-triggered animasyonlar** — elemanlar kaydıkça aşağıdan veya yanlardan çıkıyor
- **Bento grid layout** — about/skills bölümünde asimetrik kart dizilimi
- **SVG line animasyonları** — bölümler arası dekoratif çizgi animasyonları
- **Hover: magnetic buton efekti** — butonlar fareyi hafifçe kendine çekiyor

---

## 📐 Sayfa Yapısı & İçerik

### 1. Navigation
- **Fixed, minimal, blur-background** navbar
- Sol: isim veya logo (monogram)
- Sağ: 4-5 link + CTA butonu (`Hire Me` veya `Contact`)
- Scroll'da hafifçe shrink animasyonu
- Mobile: hamburger → fullscreen overlay menü

### 2. Hero Section
- **Fullscreen (100vh)**
- Büyük display tipografi: Ad soyad veya pozisyon başlığı
- Alt başlık: Uzmanlık alanları (typewriter efektiyle döngüsel)
  - Örn: `"Full-Stack Engineer"` → `"System Architect"` → `"Open Source Contributor"`
- Arka planda: Animated mesh gradient VEYA floating kod parçacıkları (canvas tabanlı)
- **CTA:** `View My Work` butonu (magnetic hover efekti)
- Sağ veya alt köşe: sosyal linkler (GitHub, LinkedIn, Twitter)
- Küçük bir scroll indicator animasyonu (aşağıya doğru bounce)

### 3. About Section
- İki kolonlu layout: Sol — kısa paragraf, Sağ — fotoğraf veya ASCII art / kod bloğu
- **Bento grid ile istatistikler:**
  - `5+ yıl deneyim`
  - `30+ proje`
  - `10+ teknoloji`
  - `3 ülkede çalışma`
- Arka planda subtle grid pattern

### 4. Skills / Tech Stack
- **Asimetrik bento-grid kartlar**
- Her kart: ikon + teknoloji adı + yeterlilik seviyesi (minimal progress bar veya dot indicator)
- Kategoriler: Languages, Frameworks, Databases, DevOps/Cloud, Tools
- Hover'da kart yükseliyor (transform: translateY + glow)
- Teknolojiler: Python, Go, TypeScript, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes, AWS vb. (mühendise göre düzenlenecek)

### 5. Projects Section
- **Featured project:** Büyük showcase kartı — mockup görsel, açıklama, tech tags, link
- **Diğer projeler:** 2-3 kolonlu grid — daha küçük kartlar
- Her kart: proje adı, 1-2 cümle açıklama, kullanılan teknolojiler, GitHub + live demo linkleri
- Hover'da: overlay açılıyor, ekstra detaylar görünüyor
- "View All on GitHub" CTA

### 6. Experience / Timeline
- Vertical timeline (sol kenarda çizgi)
- Her entry: şirket adı, pozisyon, tarih, 2-3 madde başarı/sorumluluk
- Scroll ile noktalar aktif hale geliyor (JS IntersectionObserver)
- Şirket logolarını placeholder olarak tutabilirsin

### 7. Testimonials (Opsiyonel)
- Horizontal scroll veya carousel
- Quote, isim, pozisyon, şirket
- Yıldız rating değil — metin odaklı, editorial his

### 8. Contact Section
- **Minimal form:** Ad, Email, Mesaj, Gönder
- Yanında: Email, GitHub, LinkedIn linkleri
- "Currently open to opportunities" veya "Not available" badge (yeşil/kırmızı dot animasyonu)
- Büyük tipografi arka planda: `LET'S BUILD SOMETHING`

### 9. Footer
- Telif hakkı, sosyal linkler
- "Designed & Built by [İsim]" not

---

## ⚙️ Teknik Gereksinimler

### Stack
- **Tek dosya HTML** (CDN bağlantılı) VEYA **React (.jsx)** — kullanıcıya sor veya HTML varsayılan al
- Vanilla JS veya küçük kütüphaneler (GSAP, Three.js, Swiper)
- CSS: Custom properties (CSS variables) zorunlu, utility-first yaklaşım
- CDN'den yüklenebilecek kütüphaneler: GSAP, Three.js, Swiper, AOS, Typed.js

### Performans & Kalite
- **Mobile-first, tam responsive** (320px → 1920px)
- Smooth scroll davranışı
- `prefers-reduced-motion` media query desteği (erişilebilirlik)
- Semantic HTML5 (`<section>`, `<article>`, `<nav>`, `<main>`)
- ARIA etiketleri kritik bileşenlerde

### Animasyon Felsefesi
- **Sayfa yüklenişi:** Staggered reveal — elementler 0.1s aralıklarla aşağıdan geliyor
- **Scroll:** IntersectionObserver ile tetiklenen fade+slide animasyonlar
- **Hover:** Hızlı (150-200ms), `ease-out` eğrisi — gecikmesiz his
- **Geçişler:** Hiçbir şey keskin kesmiyor, her şey akıyor
- Animasyonları performans için `transform` ve `opacity` üzerinden yap, `top/left/width` değil

---

## 🚫 Kaçınılacaklar
- Inter, Roboto, Arial gibi jenerik fontlar
- Mor gradient + beyaz arka plan klişesi
- Bootstrap veya Tailwind (custom CSS kullan)
- Stok fotoğraf görüntüleri
- Aşırı karmaşık navigation
- Yavaş açılan modal'lar
- Cookie-cutter Bootstrap grid düzeni
- Herhangi bir "AI slop" estetiği

---

## ✅ Çıktı Kriterleri

Tasarım şu testleri geçmeli:

1. **"WOW testi"** — Sayfayı ilk açan biri 3 saniye içinde etkileniyor mu?
2. **"Profesyonellik testi"** — FAANG recruiter bu siteye bakınca pozitif izlenim alıyor mu?
3. **"Teknik kimlik testi"** — Sitenin bir yazılım mühendisine ait olduğu tasarımdan belli oluyor mu?
4. **"Mobil testi"** — iPhone 12 ekranında kusursuz görünüyor mu?
5. **"Hız testi"** — Animasyonlar takılmıyor, geçişler pürüzsüz mü?

---

## 📝 Notlar

- Tüm içerik placeholder olabilir (`[Your Name]`, `[Project Title]` vb.)
- Renk paleti ve font seçimi tasarım kararına bırakılmıştır — bold bir seçim yap
- Tasarım tutarlı ve özgün olmalı; iki farklı bölüm farklı bir siteden kopyalanmış hissettirmemeli
- Kod yorumlu ve okunabilir olmalı (bölüm başlarına yorum satırı)

---

*Bu brief bir yazılım mühendisi için hazırlanmıştır. Tasarımı çağın ötesinde, cesur ve özgün yap. Sıradan olmak yasak.*
