# 🚗 KlasikKasnak — Türkiye'nin Araba Rehberi

> Türkiye ikinci el otomobil piyasasına yönelik bağımsız bir bilgi ve rehber sitesi.  
> 100 araç · 18 marka · 2026 güncel fiyatlar · Güvenilirlik skorları

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)
![Araç Sayısı](https://img.shields.io/badge/Araç-100-orange?style=flat)

---

## 📸 Önizleme

```
┌─────────────────────────────────────────┐
│  KlasikKasnak  EST. 1990                │
│  ◆ Toyota Corolla E210 · 1.4M–1.9M ₺   │ ← Canlı Fiyat Ticker
├─────────────────────────────────────────┤
│  [Tümü] [−2000] [2000s] [2010s] [2020+] │ ← Dönem Filtresi
│  [Sedan] [Hatchback] [SUV]              │ ← Kasa Filtresi
│  [🇯🇵 JP] [🇩🇪 DE] [🇫🇷 FR] [🇰🇷 KR]   │ ← Menşei Filtresi
├─────────────────────────────────────────┤
│  #1 Toyota LC 80 · #2 Toyota E100 ...  │ ← 100 Araç Kartı
└─────────────────────────────────────────┘
```

---

## ✨ Özellikler

- **100 Araç Kataloğu** — 1971'den 2026'ya Türkiye'de en yaygın modeller
- **Güvenilirlik Skoru** — Motor, şanzıman ve yedek parça teminine göre 0–100 puan
- **2026 Güncel Fiyatlar** — sahibinden.com & arabam.com kaynaklı piyasa ortalaması
- **Gelişmiş Filtre Sistemi** — Dönem, kasa tipi, menşei, arama ve sıralama
- **Dark / Light Mode** — Sistem tercihine göre otomatik, localStorage ile kalıcı
- **Araç Detay Modal'ı** — Teknik özellikler, güvenilirlik bar grafiği, dikkat edilecekler
- **Güvenilirlik Sıralaması** — İlk 20 araç marka logolarıyla sıralanmış tablo
- **Sahibinden.com Linkleri** — Her araç için doğrudan ilan sayfasına yönlendirme
- **Retro Tasarım** — Playfair Display + IBM Plex Mono fontları, sepia renk paleti
- **Sıfır Bağımlılık** — Vanilla HTML/CSS/JS, hiç framework yok

---

## 🗂️ Proje Yapısı

```
klasik-kasnak/
├── index.html              # Ana HTML
└── assets/
    ├── css/
    │   └── style.css       # Retro tasarım, dark mode, responsive
    ├── js/
    │   └── main.js         # 100 araç verisi + tüm interaktivite
    └── img/
        ├── *.jpg           # Araç görselleri (manuel eklenir)
        └── logos/          # Marka logoları (manuel eklenir)
```

---

## 🚀 Kurulum

Herhangi bir kurulum gerektirmez. Tarayıcıda doğrudan açılır.

```bash
# Repoyu klonla
git clone https://github.com/kullanici-adi/klasik-kasnak.git

# Klasöre gir
cd klasik-kasnak

# index.html'i tarayıcıda aç
# → Dosyayı çift tıkla ya da:
open index.html         # macOS
xdg-open index.html     # Linux
start index.html        # Windows
```

**Yerel sunucu ile** (önerilen):
```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx serve)
npx serve .
```

Ardından `http://localhost:8080` adresine git.

---

## 🖼️ Görseller

Araç görselleri ve marka logoları `assets/img/` klasörüne eklenir.

| Klasör | İçerik |
|--------|--------|
| `assets/img/*.jpg` | Araç fotoğrafları (örn. `toyota-corolla-e100.jpg`) |
| `assets/img/logos/*.png` | Marka logoları (örn. `logo-toyota.png`) |

Görsel eklenmezse kartlar otomatik placeholder (🚗) gösterir.

<details>
<summary>📋 Tüm görsel dosya isimleri (100 adet)</summary>

```
tofas-sahin.jpg       tofas-dogan.jpg       tofas-kartal.jpg
fiat-uno.jpg          fiat-tipo.jpg         fiat-punto-1.jpg
fiat-punto-2.jpg      fiat-linea.jpg        fiat-egea-sedan.jpg
fiat-egea-hb.jpg      fiat-egea-cross.jpg   toyota-corolla-e90.jpg
toyota-corolla-e100.jpg  toyota-corolla-e110.jpg  toyota-corolla-e120.jpg
toyota-corolla-e140.jpg  toyota-corolla-e150.jpg  toyota-corolla-e210.jpg
toyota-yaris-1.jpg    toyota-yaris-2.jpg    toyota-yaris-3.jpg
toyota-yaris-4.jpg    toyota-lc-80.jpg      toyota-lc-100.jpg
toyota-chr.jpg        toyota-rav4.jpg       honda-civic-eg.jpg
honda-civic-ek.jpg    honda-civic-ep.jpg    honda-civic-fd.jpg
honda-civic-fk.jpg    honda-civic-fe.jpg    vw-golf-3.jpg
vw-golf-4.jpg         vw-golf-5.jpg         vw-golf-6.jpg
vw-golf-7.jpg         vw-golf-8.jpg         vw-passat-b5.jpg
vw-passat-b6.jpg      vw-passat-b8.jpg      vw-polo-4.jpg
vw-polo-5.jpg         vw-polo-6.jpg         bmw-e36.jpg
bmw-e46.jpg           bmw-e90.jpg           bmw-f30.jpg
mercedes-w124.jpg     mercedes-w202.jpg     mercedes-w203.jpg
mercedes-w204.jpg     mercedes-w205.jpg     opel-vectra-a.jpg
opel-vectra-b.jpg     opel-vectra-c.jpg     opel-astra-f.jpg
opel-astra-g.jpg      opel-astra-h.jpg      opel-astra-j.jpg
opel-corsa-c.jpg      opel-corsa-d.jpg      renault-19.jpg
renault-symbol-1.jpg  renault-symbol-2.jpg  renault-symbol-3.jpg
renault-clio-2.jpg    renault-clio-3.jpg    renault-clio-4.jpg
renault-clio-5.jpg    renault-megane-2.jpg  renault-megane-3.jpg
renault-megane-4.jpg  hyundai-accent-lc.jpg hyundai-accent-mc.jpg
hyundai-accent-rb.jpg hyundai-i20-1.jpg     hyundai-i20-2.jpg
hyundai-i20-3.jpg     hyundai-elantra-6.jpg hyundai-tucson-3.jpg
kia-rio-2.jpg         kia-rio-3.jpg         kia-ceed-1.jpg
kia-ceed-2.jpg        peugeot-206.jpg       peugeot-207.jpg
peugeot-208-1.jpg     peugeot-208-2.jpg     peugeot-301.jpg
nissan-patrol-y60.jpg nissan-micra-k12.jpg  nissan-qashqai-2.jpg
dacia-logan-1.jpg     dacia-duster-1.jpg    dacia-duster-2.jpg
skoda-octavia-2.jpg   seat-leon-2.jpg       volvo-s40.jpg
togg-t10x.jpg
```
</details>

---

## 🚗 Araç Listesi

<details>
<summary>Tüm 100 araç (marka & model)</summary>

| # | Marka | Model | Yıllar | Kasa | Menşei |
|---|-------|-------|--------|------|--------|
| 1 | Tofaş | Şahin | 1971–2000 | Sedan | 🇹🇷 |
| 2 | Tofaş | Doğan | 1987–2000 | Hatchback | 🇹🇷 |
| 3 | Tofaş | Kartal | 1984–1994 | Sedan | 🇹🇷 |
| 4 | Fiat | Uno | 1983–2002 | Hatchback | 🇮🇹 |
| 5 | Fiat | Tipo (1. Nesil) | 1988–1995 | Hatchback | 🇮🇹 |
| 6 | Fiat | Punto 2. Nesil | 1999–2006 | Hatchback | 🇮🇹 |
| 7 | Fiat | Punto Grande | 2006–2012 | Hatchback | 🇮🇹 |
| 8 | Fiat | Linea | 2007–2015 | Sedan | 🇮🇹 |
| 9 | Fiat | Egea Sedan | 2015–2024 | Sedan | 🇮🇹 |
| 10 | Fiat | Egea HB | 2016–2024 | Hatchback | 🇮🇹 |
| 11 | Fiat | Egea Cross | 2020–2024 | SUV | 🇮🇹 |
| 12–18 | Toyota | Corolla E90→E210 | 1987–günümüz | Sedan | 🇯🇵 |
| 19–22 | Toyota | Yaris 1→4 | 1999–günümüz | Hatchback | 🇯🇵 |
| 23–24 | Toyota | Land Cruiser 80/100 | 1990–2007 | SUV | 🇯🇵 |
| 25 | Toyota | C-HR | 2016–2023 | SUV | 🇯🇵 |
| 26 | Toyota | RAV4 4. Nesil | 2013–2018 | SUV | 🇯🇵 |
| 27–32 | Honda | Civic EG→FE | 1991–günümüz | Sedan/HB | 🇯🇵 |
| 33–38 | Volkswagen | Golf 3→8 | 1991–günümüz | Hatchback | 🇩🇪 |
| 39–41 | Volkswagen | Passat B5/B6/B8 | 1996–2023 | Sedan | 🇩🇪 |
| 42–44 | Volkswagen | Polo 4/5/6 | 2001–günümüz | Hatchback | 🇩🇪 |
| 45–48 | BMW | 3 Serisi E36/E46/E90/F30 | 1990–2019 | Sedan | 🇩🇪 |
| 49–53 | Mercedes | E/C Serisi W124→W205 | 1984–2021 | Sedan | 🇩🇪 |
| 54–62 | Opel | Vectra A/B/C, Astra F/G/H/J, Corsa C/D | 1988–2015 | — | 🇩🇪 |
| 63–73 | Renault | 19, Symbol, Clio, Megane | 1988–2022 | — | 🇫🇷 |
| 74–81 | Hyundai | Accent, i20, Elantra, Tucson | 2000–2020 | — | 🇰🇷 |
| 82–85 | Kia | Rio, Cee'd | 2005–2018 | Hatchback | 🇰🇷 |
| 86–90 | Peugeot | 206, 207, 208, 301 | 1998–2026 | — | 🇫🇷 |
| 91–93 | Nissan | Patrol Y60, Micra K12, Qashqai | 1987–2021 | — | 🇯🇵 |
| 94–96 | Dacia | Logan, Duster 1/2 | 2004–2024 | — | 🇷🇴 |
| 97 | Skoda | Octavia 2. Nesil | 2004–2013 | Sedan/HB | 🇩🇪 |
| 98 | Seat | Leon 2. Nesil | 2005–2012 | Hatchback | 🇩🇪 |
| 99 | Volvo | S40 2. Nesil | 2004–2012 | Sedan | 🇸🇪 |
| 100 | Togg | T10X | 2023–günümüz | SUV | 🇹🇷 |

</details>

---

## ⚙️ Teknik Detaylar

### Kullanılan Teknolojiler

- **HTML5** — Semantik yapı, accessible modal
- **CSS3** — CSS Variables (dark/light theme), Grid, Flexbox, animasyonlar
- **Vanilla JavaScript** — Tüm filtre/sıralama/modal/dark mode, framework yok

### Fontlar (Google Fonts)

| Font | Kullanım |
|------|----------|
| Playfair Display | Başlıklar, logo |
| IBM Plex Mono | Teknik veriler, badge'ler, fiyatlar |
| Crimson Text | Gövde metni, açıklamalar |

### Araç Veri Alanları

```js
{
  id, brand, model, gen, img,
  year_start, year_end,
  cat,              // 'sedan' | 'hatchback' | 'suv' | 'mpv'
  origin,           // 'jp' | 'de' | 'fr' | 'kr' | 'it' | 'tr' | 'se' | 'ro'
  engine, transmission, fuel, power,
  reliability,      // 0-100 genel skor
  engine_score,     // motor güvenilirliği
  trans_score,      // şanzıman güvenilirliği
  parts_score,      // yedek parça temini
  price_min, price_max,  // TL (2026 piyasa)
  long_term,        // uzun vade değerlendirmesi
  watch_out,        // dikkat edilecekler []
  notes             // genel notlar
}
```

### Filtre Sistemi

| Filtre | Seçenekler |
|--------|-----------|
| Dönem | Tümü · −2000 · 2000–2009 · 2010–2019 · 2020+ |
| Kasa | Tümü · Sedan · Hatchback · SUV/4x4 · MPV |
| Menşei | 🇯🇵 🇩🇪 🇫🇷 🇰🇷 🇮🇹 🇹🇷 🇸🇪 🇷🇴 |
| Sıralama | Güvenilirlik · Yıl (eski/yeni) · Fiyat (ucuz/pahalı) · A→Z |
| Arama | Marka, model, nesil, motor kodu |

---

## 📊 Veri Kaynakları

Fiyat ve güvenilirlik verileri aşağıdaki kaynaklardan derlenmiştir:

| Kaynak | Kullanım |
|--------|---------|
| [sahibinden.com](https://www.sahibinden.com) | 2026 ikinci el fiyat ortalaması |
| [arabam.com](https://www.arabam.com) | Piyasa değer verileri |
| [otosor.com.tr](https://www.otosor.com.tr) | Teknik güvenilirlik değerlendirmeleri |
| [arabam.com/blog](https://blog.arabam.com) | Uzun vadeli kullanıcı analizleri |

> ⚠️ **Sorumluluk Reddi:** Fiyat bilgileri referans niteliğindedir. Satın alma kararı öncesinde güncel ilanları kontrol ediniz ve profesyonel ekspertiz yaptırınız.

---

## 🎨 Tasarım Sistemi

```
Renk Paleti (Light Mode)
  --bg:       #f7f3eb   (krem)
  --surface:  #fdf9f3   (açık krem)
  --accent:   #b05a1a   (tuğla kırmızısı)
  --gold:     #c8943a   (altın)
  --text:     #1f1810   (koyu kahve)

Renk Paleti (Dark Mode)
  --bg:       #1a1510   (koyu kahve)
  --surface:  #241e18   (derin kahve)
  --accent:   #d8803a   (turuncu)
  --text:     #f0e8d8   (krem beyaz)
```

---

## 🤝 Katkıda Bulunma

1. Bu repoyu fork'layın
2. Feature branch oluşturun: `git checkout -b feature/yeni-arac-ekle`
3. Değişikliklerinizi commit'leyin: `git commit -m 'feat: Renault Fluence eklendi'`
4. Branch'i push'layın: `git push origin feature/yeni-arac-ekle`
5. Pull Request açın

### Yeni Araç Eklerken

`assets/js/main.js` içindeki `CARS` dizisine yeni obje ekleyin:

```js
{
  id: 101,
  brand: 'Renault', model: 'Fluence', gen: '',
  img: 'renault-fluence.jpg',
  year_start: 2010, year_end: 2016,
  cat: 'sedan', origin: 'fr',
  engine: '1.5 dCi / 1.6L 16V',
  transmission: 'Manuel 6 / Otomatik',
  fuel: 'Benzinli / Dizel',
  power: '110–130 HP',
  reliability: 75, engine_score: 74, trans_score: 75, parts_score: 82,
  price_min: 300000, price_max: 650000,
  long_term: 'Uzun vade değerlendirme...',
  watch_out: ['Dikkat 1', 'Dikkat 2'],
  notes: 'Notlar...'
}
```

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

---

## 👤 Geliştirici

**Barış** — [331s](https://github.com/331s)

> Bilgisayar Programcılığı Öğrencisi · Türkiye

---

<div align="center">

**⭐ Beğendiyseniz yıldız vermeyi unutmayın!**

*Tüm fiyatlar 2026 yılı piyasa ortalamasıdır · Kaynak: sahibinden.com · arabam.com*

</div>
