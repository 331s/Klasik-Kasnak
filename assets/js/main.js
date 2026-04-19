/* ══════════════════════════════════════════════
   KlasikKasnak — main.js
   100 Araç Verisi + Filtre + Dark Mode + Modal
   ══════════════════════════════════════════════ */

/* ─── GÖRSEL URL HARİTASI (Wikimedia Commons) ── */
const W = 'https://commons.wikimedia.org/wiki/Special:FilePath/';
const IMG_URLS = {
  'tofas-sahin.jpg':       W+'Sahin.jpg',
  'tofas-dogan.jpg':       W+'Tofaş_Doğan_ca_1994.jpg',
  'tofas-kartal.jpg':      W+'1994_Tofaş_Kartal_SL_front.jpg',
  'fiat-uno.jpg':          W+'Fiat_Uno_front_20080107.jpg',
  'fiat-tipo.jpg':         W+'Fiat_Tipo_1.4_front_20080226.jpg',
  'fiat-punto-1.jpg':      W+'Fiat_Punto_188_front_20071024.jpg',
  'fiat-punto-2.jpg':      W+'Fiat_Grande_Punto_Front_20080308.jpg',
  'fiat-linea.jpg':        W+'Fiat_Linea_2007_red.jpg',
  'fiat-egea-sedan.jpg':   W+'Fiat_Tipo_sedan_(2016).jpg',
  'fiat-egea-hb.jpg':      W+'Fiat_Tipo_hatchback_2016.jpg',
  'fiat-egea-cross.jpg':   W+'Fiat_Tipo_Cross_2020.jpg',
  'toyota-corolla-e90.jpg':W+'1993_Toyota_Corolla_(AE96)_Ultima_Seca_liftback_(2015-06-08)_02.jpg',
  'toyota-corolla-e100.jpg':W+'Toyota_Corolla_(E100)_01.jpg',
  'toyota-corolla-e110.jpg':W+'1997-1999_Toyota_Corolla_(AE102R)_CSi_sedan_(2015-06-08)_01.jpg',
  'toyota-corolla-e120.jpg':W+'2001-2004_Toyota_Corolla_(ZZE122R)_Conquest_sedan_(2007-08-31).jpg',
  'toyota-corolla-e140.jpg':W+'2009_Toyota_Corolla_(ZRE142R)_Ascent_sedan_(2010-08-13)_01.jpg',
  'toyota-corolla-e150.jpg':W+'2013-2015_Toyota_Corolla_(ZRE172R)_Ascent_sedan_(2015-09-21)_01.jpg',
  'toyota-corolla-e210.jpg':W+'2019_Toyota_Corolla_(ZRE172R)_Ascent_sedan_(2019-10-22)_01.jpg',
  'toyota-yaris-1.jpg':    W+'Toyota_Yaris_XP10_02.jpg',
  'toyota-yaris-2.jpg':    W+'2007_Toyota_Yaris_S_5-door_(2010-05-29)_02.jpg',
  'toyota-yaris-3.jpg':    W+'2012_Toyota_Yaris_(NCP130R)_YR_5-door_hatchback_(2015-09-25)_01.jpg',
  'toyota-yaris-4.jpg':    W+'2020_Toyota_Yaris_(MXPH10R)_GXL_hybrid_5-door_hatchback_(2021-02-11)_01.jpg',
  'toyota-lc-80.jpg':      W+'1996_Toyota_Land_Cruiser_80_4.2_VX_in_Dark_Emerald_Pearl,_front_right.jpg',
  'toyota-lc-100.jpg':     W+'1998_Toyota_Land_Cruiser_V8.jpg',
  'toyota-chr.jpg':        W+'Toyota_C-HR_2016_(34175279786).jpg',
  'toyota-rav4.jpg':       W+'2013_Toyota_RAV4_(ACA33R)_GXL_wagon_(2015-01-05)_01.jpg',
  'honda-civic-eg.jpg':    W+'Honda_Civic_SiR_(EG).JPG',
  'honda-civic-ek.jpg':    W+'1998_Honda_Civic_EK_sedan_(29476025701).jpg',
  'honda-civic-ep.jpg':    W+'2001-2003_Honda_Civic_EP3_Type-R_hatchback_(2014-07-14)_02.jpg',
  'honda-civic-fd.jpg':    W+'Honda_Civic_8th_Gen_FD_front.jpg',
  'honda-civic-fk.jpg':    W+'2016_Honda_Civic_EX-T_sedan_(32835701803).jpg',
  'honda-civic-fe.jpg':    W+'2022_Honda_Civic_Sport_sedan_(51989695013).jpg',
  'vw-golf-3.jpg':         W+'1994_Volkswagen_Golf_1.8_Driver_(18933940398).jpg',
  'vw-golf-4.jpg':         W+'2003-2004_Volkswagen_Golf_(1J)_Sport_5-door_hatchback_01.jpg',
  'vw-golf-5.jpg':         W+'2005_Volkswagen_Golf_(1K)_Comfortline_2.0_FSI_5-door_hatchback_(2015-07-09)_01.jpg',
  'vw-golf-6.jpg':         W+'2011_Volkswagen_Golf_S_1.2_Front.jpg',
  'vw-golf-7.jpg':         W+'2013_Volkswagen_Golf_(5G_MY13)_103TSI_Highline_5-door_hatchback_(2015-07-24)_01.jpg',
  'vw-golf-8.jpg':         W+'2020_Volkswagen_Golf_VIII_1.5_eTSI_DSG_Highline_5-door_hatchback_(2021-07-14)_01.jpg',
  'vw-passat-b5.jpg':      W+'1999_Volkswagen_Passat_(3B)_2.3_V5_(1999-2001)_front_20081018.jpg',
  'vw-passat-b6.jpg':      W+'Volkswagen_Passat_B6_front_20080218.jpg',
  'vw-passat-b8.jpg':      W+'2015_Volkswagen_Passat_(3G)_1.6_TDI_Comfortline_sedan_(2016-10-02)_01.jpg',
  'vw-polo-4.jpg':         W+'2002_Volkswagen_Polo_(9N)_1.2_3-door_hatchback_(2009-09-11)_01.jpg',
  'vw-polo-5.jpg':         W+'2009_Volkswagen_Polo_(6R)_1.2_5-door_hatchback_(2009-09-28)_02.jpg',
  'vw-polo-6.jpg':         W+'2017_Volkswagen_Polo_(AW)_1.0_TSI_5-door_hatchback_(2018-01-04)_01.jpg',
  'bmw-e36.jpg':           W+'1996_BMW_316i_(E36)_sedan_(2015-08-14)_01.jpg',
  'bmw-e46.jpg':           W+'2001_BMW_330Ci_(E46)_coupe_(2015-08-12)_01.jpg',
  'bmw-e90.jpg':           W+'2005-2008_BMW_320i_(E90)_sedan_(2009-06-30).jpg',
  'bmw-f30.jpg':           W+'2012_BMW_328i_(F30)_sedan_(2012-07-16).jpg',
  'mercedes-w124.jpg':     W+'Mercedes-Benz_W124_E220_front_20080224.jpg',
  'mercedes-w202.jpg':     W+'Mercedes-Benz_C-Klasse_W202_Front_20080117.jpg',
  'mercedes-w203.jpg':     W+'Mercedes-Benz_C-Klasse_W203_front_20100601.jpg',
  'mercedes-w204.jpg':     W+'Mercedes-Benz_C-Klasse_W204_front_20100601.jpg',
  'mercedes-w205.jpg':     W+'Mercedes-Benz_C-Klasse_W205_front_20141028.jpg',
  'opel-vectra-a.jpg':     W+'Opel_Vectra_A_front_20090614.jpg',
  'opel-vectra-b.jpg':     W+'Opel_Vectra_B_front_20090610.jpg',
  'opel-vectra-c.jpg':     W+'Opel_Vectra_C_front_20100621.jpg',
  'opel-astra-f.jpg':      W+'Opel_Astra_F_front_20090815.jpg',
  'opel-astra-g.jpg':      W+'Opel_Astra_G_Cabrio_front_20090705.jpg',
  'opel-astra-h.jpg':      W+'Opel_Astra_H_front_20070812.jpg',
  'opel-astra-j.jpg':      W+'Opel_Astra_J_front_20100911.jpg',
  'opel-corsa-c.jpg':      W+'Opel_Corsa_C_front_20071009.jpg',
  'opel-corsa-d.jpg':      W+'Opel_Corsa_D_front_20100601.jpg',
  'renault-19.jpg':        W+'Renault_19_front_20081005.jpg',
  'renault-symbol-1.jpg':  W+'Renault_Symbol_front_20080802.jpg',
  'renault-symbol-2.jpg':  W+'Renault_Symbol_II_front.jpg',
  'renault-symbol-3.jpg':  W+'Renault_Symbol_III_2012.jpg',
  'renault-clio-2.jpg':    W+'Renault_Clio_II_phase_2_front_20080901.jpg',
  'renault-clio-3.jpg':    W+'Renault_Clio_III_front_20080727.jpg',
  'renault-clio-4.jpg':    W+'Renault_Clio_IV_front.jpg',
  'renault-clio-5.jpg':    W+'Renault_Clio_V_front.jpg',
  'renault-megane-2.jpg':  W+'Renault_Megane_II_front_20080901.jpg',
  'renault-megane-3.jpg':  W+'Renault_Megane_III_front.jpg',
  'renault-megane-4.jpg':  W+'Renault_Megane_IV_front.jpg',
  'hyundai-accent-lc.jpg': W+'2001_Hyundai_Accent_LC_1.3_GLS_sedan_(2010-10-04).jpg',
  'hyundai-accent-mc.jpg': W+'2006_Hyundai_Accent_MC_1.4_GLS_5-door_(2010-10-28)_01.jpg',
  'hyundai-accent-rb.jpg': W+'2011_Hyundai_Accent_(RB)_Active_4-door_sedan_(2012-01-02).jpg',
  'hyundai-i20-1.jpg':     W+'2008_Hyundai_i20_(PB)_Active_5-door_hatchback_(2011-01-10).jpg',
  'hyundai-i20-2.jpg':     W+'2014_Hyundai_i20_(GB)_Active_5-door_hatchback_(2015-06-19)_01.jpg',
  'hyundai-i20-3.jpg':     W+'2020_Hyundai_i20_(BC3)_N_Line_5-door_hatchback_(2021-03-05)_01.jpg',
  'hyundai-elantra-6.jpg': W+'2016_Hyundai_Elantra_(AD)_Elite_sedan_(2017-01-05)_01.jpg',
  'hyundai-tucson-3.jpg':  W+'2015_Hyundai_Tucson_(TL)_Elite_AWD_wagon_(2015-10-16)_01.jpg',
  'kia-rio-2.jpg':         W+'2006_Kia_Rio_(JB)_LX_5-door_hatchback_(2009-08-07).jpg',
  'kia-rio-3.jpg':         W+'2012_Kia_Rio_(UB)_SLS_5-door_hatchback_(2012-06-17).jpg',
  'kia-ceed-1.jpg':        W+"Kia_Ceed_SW_ED_front_2007.jpg",
  'kia-ceed-2.jpg':        W+"Kia_Cee'd_JD_front.jpg",
  'peugeot-206.jpg':       W+'Peugeot_206_front_20081024.jpg',
  'peugeot-207.jpg':       W+'Peugeot_207_front_20081024.jpg',
  'peugeot-208-1.jpg':     W+'Peugeot_208_A9_front_2012.jpg',
  'peugeot-208-2.jpg':     W+'Peugeot_208_P21_front_2019.jpg',
  'peugeot-301.jpg':       W+'Peugeot_301_front.jpg',
  'nissan-patrol-y60.jpg': W+'Nissan_Patrol_Y60_front_20071006.jpg',
  'nissan-micra-k12.jpg':  W+'2003_Nissan_Micra_(K12)_1.2_S_5-door_hatchback_(2009-06-19).jpg',
  'nissan-qashqai-2.jpg':  W+'2014_Nissan_Qashqai_(J11)_ST_wagon_(2015-02-03)_01.jpg',
  'dacia-logan-1.jpg':     W+'Dacia_Logan_front_20081016.jpg',
  'dacia-duster-1.jpg':    W+'Dacia_Duster_front_20110326.jpg',
  'dacia-duster-2.jpg':    W+'2018_Dacia_Duster_(HM)_Laureate_dCi_110_4X4_(2018-10-17)_01.jpg',
  'skoda-octavia-2.jpg':   W+'2004_Skoda_Octavia_(1Z3)_Tour_1.6_FSI_5-door_hatchback_(2011-01-13).jpg',
  'seat-leon-2.jpg':       W+'2005_Seat_Leon_(1P)_FR_5-door_hatchback_(2012-08-08)_01.jpg',
  'volvo-s40.jpg':         W+'2004_Volvo_S40_(P11)_2.0_(2008-08-26)_01.jpg',
  'togg-t10x.jpg':         W+'TOGG_T10X_2023.jpg',
};

// Görsel URL'sini döndür — Wikimedia Commons yüklenemezse placeholder
function getImgUrl(filename) {
  return IMG_URLS[filename] || null;
}

/* ─── 100 ARAÇ VERİ ─────────────────────────── */

const CARS = [
  // ─── TOFAŞ / TÜRK ───────────────────────────
  {
    id: 1, brand: 'Tofaş', model: 'Şahin', gen: '', img: 'tofas-sahin.jpg',
    year_start: 1971, year_end: 2000, cat: 'sedan', origin: 'tr',
    engine: '1.3L SOHC Karbüratör', transmission: 'Manuel 4',
    fuel: 'Benzinli', power: '65 HP',
    reliability: 72, engine_score: 70, trans_score: 74, parts_score: 95,
    price_min: 80000, price_max: 220000,
    sahibinden_link: 'tofas-sahin',
    long_term: 'Parçası en bol araç. Karbüratör bakımı kritik. Her tamircinin tanıdığı motor.',
    watch_out: ['Karbüratör ayarı', 'Motor yağ kaçakları', 'Alt takım aşınması'],
    notes: 'Türkiye\'nin en efsanevi yerli otomobili. 1.6 ve 1.3 versiyonları mevcut.'
  },
  {
    id: 2, brand: 'Tofaş', model: 'Doğan', gen: '', img: 'tofas-dogan.jpg',
    year_start: 1987, year_end: 2000, cat: 'hatchback', origin: 'tr',
    engine: '1.6L SOHC Karbüratör', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '75 HP',
    reliability: 73, engine_score: 72, trans_score: 75, parts_score: 93,
    price_min: 100000, price_max: 280000,
    sahibinden_link: 'tofas-dogan',
    long_term: 'Şahin\'den daha sporlu, aynı derecede bol parçalı. Hatchback kasa avantajı.',
    watch_out: ['Hava filtresi', 'Karbüratör sorunları', 'Egzoz sistemi'],
    notes: 'Şahin ile aynı platform ama farklı kasa. 1.6 SLX versiyonu en popüleri.'
  },
  {
    id: 3, brand: 'Tofaş', model: 'Kartal', gen: '', img: 'tofas-kartal.jpg',
    year_start: 1984, year_end: 1994, cat: 'sedan', origin: 'tr',
    engine: '1.3L SOHC Karbüratör', transmission: 'Manuel 4',
    fuel: 'Benzinli', power: '65 HP',
    reliability: 68, engine_score: 67, trans_score: 70, parts_score: 88,
    price_min: 60000, price_max: 180000,
    sahibinden_link: 'tofas-kartal',
    long_term: 'Nostaljik değeri yükselen bir model. Rust kontrolü kritik.',
    watch_out: ['Şase pası', 'Karbüratör', 'Elektrik arızaları'],
    notes: 'Şahin\'in station wagon versiyonu. Koleksiyoner aracı haline geliyor.'
  },
  {
    id: 4, brand: 'Fiat', model: 'Uno', gen: '', img: 'fiat-uno.jpg',
    year_start: 1983, year_end: 2002, cat: 'hatchback', origin: 'it',
    engine: '1.1L–1.4L SOHC', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '50–75 HP',
    reliability: 69, engine_score: 68, trans_score: 71, parts_score: 82,
    price_min: 70000, price_max: 200000,
    sahibinden_link: 'fiat-uno',
    long_term: 'Küçük ve hafif. Motor bakımı ucuz. Rust sorunu var.',
    watch_out: ['Gövde pası', 'Silindir kapağı contası', 'Alt takım'],
    notes: 'Türkiye\'de uzun yıllar MAIS tarafından üretildi. Basit yapısı avantaj.'
  },
  // ─── FİAT ───────────────────────────────────
  {
    id: 5, brand: 'Fiat', model: 'Tipo', gen: '1. Nesil', img: 'fiat-tipo.jpg',
    year_start: 1988, year_end: 1995, cat: 'hatchback', origin: 'it',
    engine: '1.4L–1.6L SOHC', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '70–90 HP',
    reliability: 67, engine_score: 65, trans_score: 68, parts_score: 78,
    price_min: 80000, price_max: 220000,
    sahibinden_link: 'fiat-tipo',
    long_term: 'Dönemin popüler modeli. Elektronik arızalara dikkat.',
    watch_out: ['Yakıt pompası', 'Elektronik arızalar', 'Gövde pası'],
    notes: '1.6 IE enjeksiyonlu versiyonu daha tercih edilir. 2015\'te yeniden üretildi.'
  },
  {
    id: 6, brand: 'Fiat', model: 'Punto', gen: '2. Nesil (188)', img: 'fiat-punto-1.jpg',
    year_start: 1999, year_end: 2006, cat: 'hatchback', origin: 'it',
    engine: '1.2L SOHC / 1.4L', transmission: 'Manuel 5',
    fuel: 'Benzinli / LPG', power: '60–80 HP',
    reliability: 71, engine_score: 70, trans_score: 72, parts_score: 80,
    price_min: 90000, price_max: 240000,
    sahibinden_link: 'fiat-punto',
    long_term: 'Hafif şase, ucuz bakım. Pas Türk ikliminde sorun.',
    watch_out: ['Silindir kapağı', 'Termostat', 'Alt takım körükleri'],
    notes: 'Türkiye\'de çok yaygın. 188 kasası olarak da bilinir. LPG dönüşümü için ideal.'
  },
  {
    id: 7, brand: 'Fiat', model: 'Punto', gen: '3. Nesil (Grande)', img: 'fiat-punto-2.jpg',
    year_start: 2006, year_end: 2012, cat: 'hatchback', origin: 'it',
    engine: '1.2L / 1.4L Fire', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '65–77 HP',
    reliability: 73, engine_score: 72, trans_score: 74, parts_score: 82,
    price_min: 130000, price_max: 320000,
    sahibinden_link: 'fiat-punto-grande',
    long_term: 'Fire motoru sağlamdır. Konfor Egea\'dan düşük ama ucuz bakım.',
    watch_out: ['Direksiyon kutusu', 'ABS sensörü', 'Klima kompresörü'],
    notes: 'Fire serisi motor güvenilirliğiyle öne çıkar. Yedek parça bol.'
  },
  {
    id: 8, brand: 'Fiat', model: 'Linea', gen: '', img: 'fiat-linea.jpg',
    year_start: 2007, year_end: 2015, cat: 'sedan', origin: 'it',
    engine: '1.4L Fire / 1.3 Multijet', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '77–90 HP',
    reliability: 76, engine_score: 75, trans_score: 77, parts_score: 88,
    price_min: 180000, price_max: 420000,
    sahibinden_link: 'fiat-linea',
    long_term: 'Türkiye\'de üretilen geniş iç hacimli sedan. Dizel çok yakıt tasarruflu.',
    watch_out: ['Multijet enjektör', 'DPF filtresi (dizel)', 'Direksiyon'],
    notes: 'Bursa fabrikasında üretildi. 1.3 Multijet en verimli seçenek.'
  },
  {
    id: 9, brand: 'Fiat', model: 'Egea', gen: 'Sedan', img: 'fiat-egea-sedan.jpg',
    year_start: 2015, year_end: 2024, cat: 'sedan', origin: 'it',
    engine: '1.4L Fire / 1.3 Multijet', transmission: 'Manuel 5 / Otomatik 6',
    fuel: 'Benzinli / Dizel', power: '95–125 HP',
    reliability: 82, engine_score: 80, trans_score: 82, parts_score: 92,
    price_min: 650000, price_max: 1200000,
    sahibinden_link: 'fiat-egea',
    long_term: 'Türkiye\'nin en çok satan sedanlarından. Geniş iç, ucuz bakım. Otomatik tercih edilir.',
    watch_out: ['Çift kavramalı şanzıman (DCT) arızaları', 'DPF filtresi', 'Debriyaj'],
    notes: 'Bursa\'da üretildi. 2020-2022 modelleri en iyi dönem. Sahibinden\'de çok ilan var.'
  },
  {
    id: 10, brand: 'Fiat', model: 'Egea', gen: 'Hatchback', img: 'fiat-egea-hb.jpg',
    year_start: 2016, year_end: 2024, cat: 'hatchback', origin: 'it',
    engine: '1.4L Fire / 1.3 Multijet', transmission: 'Manuel 5 / Otomatik 6',
    fuel: 'Benzinli / Dizel', power: '95–125 HP',
    reliability: 82, engine_score: 80, trans_score: 82, parts_score: 92,
    price_min: 680000, price_max: 1250000,
    sahibinden_link: 'fiat-egea-hatchback',
    long_term: 'Egea Sedan ile aynı platform. Hatchback kasa şehir içi pratikliği artırır.',
    watch_out: ['DCT arızaları', 'Arka bagaj kapağı kilidi', 'DPF'],
    notes: '5 kapılı ve Cross versiyonları mevcut. Gençlerin tercihi.'
  },
  {
    id: 11, brand: 'Fiat', model: 'Egea', gen: 'Cross', img: 'fiat-egea-cross.jpg',
    year_start: 2020, year_end: 2024, cat: 'suv', origin: 'it',
    engine: '1.0T Firefly / 1.4L Fire', transmission: 'Manuel 6 / Otomatik 6',
    fuel: 'Benzinli', power: '100–120 HP',
    reliability: 80, engine_score: 78, trans_score: 80, parts_score: 88,
    price_min: 900000, price_max: 1500000,
    sahibinden_link: 'fiat-egea-cross',
    long_term: 'SUV görünümlü Egea. Zemin clearance düşük, gerçek off-road değil.',
    watch_out: ['Firefly motor erken km sorunları', 'Yükseltilmiş süspansiyon titremesi'],
    notes: 'Egea platformunun crossover versiyonu. Şehir içi ideal.'
  },
  // ─── TOYOTA ─────────────────────────────────
  {
    id: 12, brand: 'Toyota', model: 'Corolla', gen: 'E90 (AE92)', img: 'toyota-corolla-e90.jpg',
    year_start: 1987, year_end: 1992, cat: 'sedan', origin: 'jp',
    engine: '1.6L 4A-FE DOHC', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '95 HP',
    reliability: 88, engine_score: 90, trans_score: 87, parts_score: 82,
    price_min: 150000, price_max: 350000,
    sahibinden_link: 'toyota-corolla',
    long_term: 'Efsane 4A-FE motoru 400k+ km yapar. Basit mekanik, ucuz bakım.',
    watch_out: ['Karbüratör (erken modeller)', 'Alt takım körükleri', 'Eksantrik kayışı'],
    notes: 'Twin Cam versiyonu (GT-S) koleksiyoner aracı. Türkiye\'de az sayıda.'
  },
  {
    id: 13, brand: 'Toyota', model: 'Corolla', gen: 'E100', img: 'toyota-corolla-e100.jpg',
    year_start: 1992, year_end: 1997, cat: 'sedan', origin: 'jp',
    engine: '1.6L 4A-FE / 1.8L 7A-FE', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli', power: '101–107 HP',
    reliability: 95, engine_score: 95, trans_score: 94, parts_score: 97,
    price_min: 250000, price_max: 550000,
    sahibinden_link: 'toyota-corolla',
    long_term: 'En bol parçalı, en güvenilir Japon sedanı. Her tamirci tanır.',
    watch_out: ['Eksantrik kayışı', 'Enjektör temizliği', 'Alt takım körükleri'],
    notes: 'Türkiye\'nin efsane corollası. 7A-FE 1.8L versiyonu daha güçlü.'
  },
  {
    id: 14, brand: 'Toyota', model: 'Corolla', gen: 'E110', img: 'toyota-corolla-e110.jpg',
    year_start: 1997, year_end: 2001, cat: 'sedan', origin: 'jp',
    engine: '1.6L 4A-FE / 1.8L 7A-FE', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli', power: '101–107 HP',
    reliability: 93, engine_score: 93, trans_score: 92, parts_score: 95,
    price_min: 280000, price_max: 600000,
    sahibinden_link: 'toyota-corolla',
    long_term: 'E100\'ün modernleştirilmiş hali. Aynı motor, daha iyi donanım.',
    watch_out: ['ABS sistemi', 'Klima gaz kaçağı', 'Eksantrik kayışı'],
    notes: 'Sonraki nesilden az tercih edilir ama son derece güvenilir.'
  },
  {
    id: 15, brand: 'Toyota', model: 'Corolla', gen: 'E120', img: 'toyota-corolla-e120.jpg',
    year_start: 2001, year_end: 2007, cat: 'sedan', origin: 'jp',
    engine: '1.4L 4ZZ-FE / 1.6L 3ZZ-FE / 1.8L 1ZZ-FE', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli', power: '97–132 HP',
    reliability: 88, engine_score: 86, trans_score: 88, parts_score: 92,
    price_min: 350000, price_max: 700000,
    sahibinden_link: 'toyota-corolla',
    long_term: '1ZZ-FE 1.8L yağ tüketimi sorunuyla bilinir. 3ZZ-FE 1.6L daha güvenilir.',
    watch_out: ['1ZZ yağ tüketimi', 'VVT-i solenoid', 'Eksantrik zinciri'],
    notes: 'Daha modern elektronik ama 1ZZ motor yağ tüketir. 1.6L tercih et.'
  },
  {
    id: 16, brand: 'Toyota', model: 'Corolla', gen: 'E140 / E150', img: 'toyota-corolla-e140.jpg',
    year_start: 2006, year_end: 2013, cat: 'sedan', origin: 'jp',
    engine: '1.4L 4ZZ / 1.6L 1ZR-FE / 2.0L 3ZR', transmission: 'Manuel 6 / Otomatik 4',
    fuel: 'Benzinli', power: '97–148 HP',
    reliability: 87, engine_score: 86, trans_score: 87, parts_score: 93,
    price_min: 450000, price_max: 850000,
    sahibinden_link: 'toyota-corolla',
    long_term: '1ZR-FE 1.6L motor çok güvenilir. 2.0L pahalı ama güçlü.',
    watch_out: ['VVT-i sorunları', 'Klima', 'Su pompası'],
    notes: 'Türkiye\'de E140/E150 kodu ile satıldı (2006-2013). 1.6L en yaygın seçenek.'
  },
  {
    id: 17, brand: 'Toyota', model: 'Corolla', gen: 'E170 (11. Nesil)', img: 'toyota-corolla-e150.jpg',
    year_start: 2013, year_end: 2019, cat: 'sedan', origin: 'jp',
    engine: '1.33L 2NR / 1.6L 1ZR / 2.0L', transmission: 'Manuel 6 / CVT',
    fuel: 'Benzinli', power: '98–152 HP',
    reliability: 86, engine_score: 85, trans_score: 85, parts_score: 90,
    price_min: 600000, price_max: 1100000,
    sahibinden_link: 'toyota-corolla',
    long_term: 'CVT şanzıman güvenilir ama akışkan bakımı kritik.',
    watch_out: ['CVT sıvısı değişimi', 'Elektronik aksam', 'Yağ kaçağı'],
    notes: '1.6L Manuel versiyonu en popüleri. Türkiye\'de E170 kodu ile 2013-2019 yılları arasında satıldı.'
  },
  {
    id: 18, brand: 'Toyota', model: 'Corolla', gen: 'E210', img: 'toyota-corolla-e210.jpg',
    year_start: 2019, year_end: 2026, cat: 'sedan', origin: 'jp',
    engine: '1.8L 2ZR Hybrid / 2.0L M20A', transmission: 'CVT / Otomatik 10',
    fuel: 'Benzinli / Hybrid', power: '122–184 HP',
    reliability: 88, engine_score: 89, trans_score: 87, parts_score: 82,
    price_min: 1350000, price_max: 2000000,
    sahibinden_link: 'toyota-corolla',
    long_term: 'Hybrid batarya ömrü önemli. Akıllı teknoloji ama bakım servise bağlı.',
    watch_out: ['Hybrid batarya garantisi', 'Kamera / sensör sistemi', 'Kaporta hasar onarımı pahalı'],
    notes: 'Türkiye\'nin en çok satan hibrit modeli. 2026\'da hâlâ lider.'
  },
  {
    id: 19, brand: 'Toyota', model: 'Yaris', gen: '1. Nesil (XP10)', img: 'toyota-yaris-1.jpg',
    year_start: 1999, year_end: 2005, cat: 'hatchback', origin: 'jp',
    engine: '1.0L 1SZ / 1.3L 2NZ', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli', power: '65–86 HP',
    reliability: 85, engine_score: 86, trans_score: 83, parts_score: 80,
    price_min: 120000, price_max: 280000,
    sahibinden_link: 'toyota-yaris',
    long_term: 'Şehir içi ideal. Motor çok sağlam. Küçük yapısı otopark kolaylığı.',
    watch_out: ['Dişli çark sesi', 'Klima', 'Elektrik sorunları'],
    notes: '1.3L versiyonu şehirde en ekonomik seçeneklerden biri.'
  },
  {
    id: 20, brand: 'Toyota', model: 'Yaris', gen: '2. Nesil (XP90)', img: 'toyota-yaris-2.jpg',
    year_start: 2005, year_end: 2011, cat: 'hatchback', origin: 'jp',
    engine: '1.0L / 1.3L / 1.4L Dizel D-4D', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli / Dizel', power: '69–90 HP',
    reliability: 86, engine_score: 87, trans_score: 84, parts_score: 81,
    price_min: 200000, price_max: 420000,
    sahibinden_link: 'toyota-yaris',
    long_term: '1.4 D-4D dizel şehirde çok ekonomik. Benzinli de güvenilir.',
    watch_out: ['D-4D DPF filtresi', 'Turbo hortumları (dizel)', 'Egzoz'],
    notes: 'Dizel versiyonu yakıt tasarrufu için ideal. 2. el piyasada bol.'
  },
  {
    id: 21, brand: 'Toyota', model: 'Yaris', gen: '3. Nesil (XP130)', img: 'toyota-yaris-3.jpg',
    year_start: 2011, year_end: 2019, cat: 'hatchback', origin: 'jp',
    engine: '1.0L / 1.33L 2NR / 1.5L Hybrid', transmission: 'Manuel 5 / CVT',
    fuel: 'Benzinli / Hybrid', power: '69–100 HP',
    reliability: 85, engine_score: 85, trans_score: 85, parts_score: 82,
    price_min: 350000, price_max: 700000,
    sahibinden_link: 'toyota-yaris',
    long_term: 'Hybrid versiyonu şehirde tüketim rakamları olağanüstü.',
    watch_out: ['CVT akışkanı bakımı', 'Hybrid batarya', 'Geri vites sensörü'],
    notes: '1.33L 2NR-FE motor güvenilirlik sembolü.'
  },
  {
    id: 22, brand: 'Toyota', model: 'Yaris', gen: '4. Nesil (XP210)', img: 'toyota-yaris-4.jpg',
    year_start: 2020, year_end: 2026, cat: 'hatchback', origin: 'jp',
    engine: '1.5L 3 Silindirli Hybrid', transmission: 'CVT e-CVT',
    fuel: 'Hybrid', power: '116 HP (sistem)',
    reliability: 87, engine_score: 88, trans_score: 86, parts_score: 78,
    price_min: 900000, price_max: 1600000,
    sahibinden_link: 'toyota-yaris',
    long_term: 'GR SPORT ve GR versiyonları sportif. Tüketim rakamları ölçü koyucu.',
    watch_out: ['Hybrid batarya garantisi kontrolü', 'Servis maliyetleri'],
    notes: 'Toyota GR Yaris yarış versiyonu koleksiyoner aracı (Türkiye\'de az).'
  },
  {
    id: 23, brand: 'Toyota', model: 'Land Cruiser', gen: '80 Serisi', img: 'toyota-lc-80.jpg',
    year_start: 1990, year_end: 1997, cat: 'suv', origin: 'jp',
    engine: '4.2L 1HZ / 4.5L 1FZ-FE', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Dizel / Benzinli', power: '130–212 HP',
    reliability: 98, engine_score: 98, trans_score: 96, parts_score: 90,
    price_min: 1500000, price_max: 4500000,
    sahibinden_link: 'toyota-land-cruiser',
    long_term: '1HZ motor 1.000.000 km yapabilir. BM tarafından tercih edilen arazi aracı.',
    watch_out: ['Şase altı pası', 'Diferansiyel sızdırmazlık', 'Otomatik şanzıman sıvısı'],
    notes: 'Dünyanın en güvenilir arazi aracı. Değer kazanıyor.'
  },
  {
    id: 24, brand: 'Toyota', model: 'Land Cruiser', gen: '100 Serisi', img: 'toyota-lc-100.jpg',
    year_start: 1998, year_end: 2007, cat: 'suv', origin: 'jp',
    engine: '4.2L 1HD-FTE Turbo / 4.7L 2UZ-FE', transmission: 'Otomatik 4–5',
    fuel: 'Dizel / Benzinli', power: '204–238 HP',
    reliability: 94, engine_score: 93, trans_score: 92, parts_score: 86,
    price_min: 1800000, price_max: 5000000,
    sahibinden_link: 'toyota-land-cruiser',
    long_term: 'Daha lüks ve güçlü. 1HD-FTE turbo dikkatli bakım gerektirir.',
    watch_out: ['1HD-FTE turbine', 'Enjektör sorunları', 'AHC süspansiyon (HİDROLİK)'],
    notes: 'VX versiyonu tam donanım. Türkiye\'de çok aranıyor.'
  },
  {
    id: 25, brand: 'Toyota', model: 'C-HR', gen: '', img: 'toyota-chr.jpg',
    year_start: 2016, year_end: 2023, cat: 'suv', origin: 'jp',
    engine: '1.2T / 1.8L Hybrid / 2.0L Hybrid', transmission: 'CVT / Otomatik',
    fuel: 'Benzinli / Hybrid', power: '116–184 HP',
    reliability: 83, engine_score: 82, trans_score: 83, parts_score: 78,
    price_min: 800000, price_max: 1500000,
    sahibinden_link: 'toyota-chr',
    long_term: 'Hybrid en iyi seçenek. 1.2T Turbo bazı erken km sorunları gösterdi.',
    watch_out: ['1.2T turbo intercooler', 'Hybrid batarya', 'Dar arka koltuk'],
    notes: 'Şık tasarım ama dar arka. Hybrid versiyonu yakıt konusunda üstün.'
  },
  {
    id: 26, brand: 'Toyota', model: 'RAV4', gen: '4. Nesil', img: 'toyota-rav4.jpg',
    year_start: 2013, year_end: 2018, cat: 'suv', origin: 'jp',
    engine: '2.0L 3ZR-FAE / 2.5L 2AR / 2.2L D-4D', transmission: 'CVT / Otomatik 6',
    fuel: 'Benzinli / Dizel', power: '151–180 HP',
    reliability: 86, engine_score: 86, trans_score: 85, parts_score: 80,
    price_min: 1000000, price_max: 2000000,
    sahibinden_link: 'toyota-rav4',
    long_term: '2.5L AWD en pratik ve sağlam. 2.0L FWD de iyi seçenek.',
    watch_out: ['AWD sistemi bakımı', 'CVT sıvısı', 'Karbonlanma (GDI motor)'],
    notes: 'Türkiye\'de çok yaygın. 2AR-FE motor efsane güvenilirliğe sahip.'
  },
  // ─── HONDA ──────────────────────────────────
  {
    id: 27, brand: 'Honda', model: 'Civic', gen: 'EG (5. Nesil)', img: 'honda-civic-eg.jpg',
    year_start: 1991, year_end: 1995, cat: 'hatchback', origin: 'jp',
    engine: '1.5L D15 / 1.6L D16 / B16A VTEC', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '90–160 HP',
    reliability: 92, engine_score: 94, trans_score: 91, parts_score: 80,
    price_min: 300000, price_max: 700000,
    sahibinden_link: 'honda-civic',
    long_term: 'B16A VTEC koleksiyoner aracı. D-serisi motor dayanıklılık sembolü.',
    watch_out: ['VTEC solenoid', 'Kaporta pası (alt kısımlar)', 'Yağ kaçakları'],
    notes: 'EG6 SiR versiyonu (B16A) Türkiye\'de az ve değerli.'
  },
  {
    id: 28, brand: 'Honda', model: 'Civic', gen: 'EK (6. Nesil)', img: 'honda-civic-ek.jpg',
    year_start: 1995, year_end: 2000, cat: 'sedan', origin: 'jp',
    engine: '1.4L D14 / 1.6L D16Y', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli', power: '90–115 HP',
    reliability: 91, engine_score: 92, trans_score: 90, parts_score: 82,
    price_min: 280000, price_max: 650000,
    sahibinden_link: 'honda-civic',
    long_term: 'D-serisi motor çok güvenilir. Hafif yapı düşük yakıt tüketimi sağlar.',
    watch_out: ['VTEC solenoid', 'Alt takım pası', 'Klima sistemi'],
    notes: 'Sedan versiyonu Türkiye\'de çok yaygın.'
  },
  {
    id: 29, brand: 'Honda', model: 'Civic', gen: 'EP (7. Nesil)', img: 'honda-civic-ep.jpg',
    year_start: 2001, year_end: 2005, cat: 'hatchback', origin: 'jp',
    engine: '1.4L D14 / 1.6L D16V / 2.0L K20 (Type R)', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '90–200 HP',
    reliability: 89, engine_score: 91, trans_score: 88, parts_score: 79,
    price_min: 350000, price_max: 800000,
    sahibinden_link: 'honda-civic',
    long_term: 'Type R (K20) versiyonu çok değerli koleksiyoner aracı.',
    watch_out: ['Direksiyon pompa sesi', 'Kaporta pası', 'Enjektör tıkanması'],
    notes: 'Hatchback kasa çok sevildi. Type R versiyonu 1 milyon TL üzeri.'
  },
  {
    id: 30, brand: 'Honda', model: 'Civic', gen: 'FD (8. Nesil)', img: 'honda-civic-fd.jpg',
    year_start: 2005, year_end: 2011, cat: 'sedan', origin: 'jp',
    engine: '1.4L L13A / 1.8L R18A', transmission: 'Manuel 6 / Otomatik 5',
    fuel: 'Benzinli', power: '83–140 HP',
    reliability: 87, engine_score: 88, trans_score: 86, parts_score: 82,
    price_min: 450000, price_max: 900000,
    sahibinden_link: 'honda-civic',
    long_term: '1.8L R18A motor güvenilir. Otomatik şanzıman geç geçiş sorunları var.',
    watch_out: ['Otomatik vites gecikmesi', 'AC kompresör', 'Yağ sızdırmazlık'],
    notes: 'Türkiye\'de en yaygın Civic nesli. Geniş iç hacim aileler için uygun.'
  },
  {
    id: 31, brand: 'Honda', model: 'Civic', gen: 'FK (10. Nesil)', img: 'honda-civic-fk.jpg',
    year_start: 2015, year_end: 2021, cat: 'sedan', origin: 'jp',
    engine: '1.0T VTEC / 1.5T VTEC Turbo', transmission: 'Manuel 6 / CVT',
    fuel: 'Benzinli', power: '126–182 HP',
    reliability: 84, engine_score: 83, trans_score: 84, parts_score: 80,
    price_min: 800000, price_max: 1500000,
    sahibinden_link: 'honda-civic',
    long_term: '1.5T Turbo güçlü ama karbon birikimi sorunu var. CVT güvenilir.',
    watch_out: ['1.5T karbon birikimi', 'Hava soğutucu', 'Kaporta boyası (hassas)'],
    notes: 'Type R versiyonu çok sevildi. 1.5T Sport Line tercih edilir.'
  },
  {
    id: 32, brand: 'Honda', model: 'Civic', gen: 'FE (11. Nesil)', img: 'honda-civic-fe.jpg',
    year_start: 2021, year_end: 2026, cat: 'sedan', origin: 'jp',
    engine: '1.5T VTEC Turbo / e:HEV Hybrid', transmission: 'CVT / e-CVT',
    fuel: 'Benzinli / Hybrid', power: '158–184 HP',
    reliability: 85, engine_score: 85, trans_score: 85, parts_score: 76,
    price_min: 1500000, price_max: 2500000,
    sahibinden_link: 'honda-civic',
    long_term: 'Hybrid versiyonu yakıt konusunda devrim. Henüz uzun vade test edilmedi.',
    watch_out: ['Servis maliyeti', 'Elektronik sistemler', 'Yedek parça fiyatları'],
    notes: 'Yeniden dizayn edildi. Daha olgunlaşmış Civic. Hybrid tercih edilir.'
  },
  // ─── VOLKSWAGEN ──────────────────────────────
  {
    id: 33, brand: 'Volkswagen', model: 'Golf', gen: '3. Nesil (A3)', img: 'vw-golf-3.jpg',
    year_start: 1991, year_end: 1997, cat: 'hatchback', origin: 'de',
    engine: '1.4L / 1.6L / 1.8L / 1.9 TDI', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '60–115 HP',
    reliability: 82, engine_score: 80, trans_score: 82, parts_score: 85,
    price_min: 200000, price_max: 500000,
    sahibinden_link: 'volkswagen-golf',
    long_term: '1.9 TDI dizel çok uzun ömürlü. Kaporta pası sorun olabilir.',
    watch_out: ['Gövde pası', 'Elektronik sorunlar', 'Distribütör (benzinli)'],
    notes: 'GTI versiyonu Türkiye\'de az ve değerli. 1.9 TDI en ekonomik.'
  },
  {
    id: 34, brand: 'Volkswagen', model: 'Golf', gen: '4. Nesil (A4)', img: 'vw-golf-4.jpg',
    year_start: 1997, year_end: 2003, cat: 'hatchback', origin: 'de',
    engine: '1.4L 16V / 1.6L / 1.9 TDI 90–130 HP', transmission: 'Manuel 5 / Otomatik',
    fuel: 'Benzinli / Dizel', power: '75–130 HP',
    reliability: 80, engine_score: 78, trans_score: 80, parts_score: 83,
    price_min: 280000, price_max: 650000,
    sahibinden_link: 'volkswagen-golf',
    long_term: 'Kaliteli iç mekan. 1.9 TDI 300k+ km yapar. Elektronik arızalar başladı.',
    watch_out: ['ABS modülü', 'EPC / ESP sistemi', 'Soğutma sistemi'],
    notes: 'GTI ve R32 versiyonları çok değerli. 1.9 TDI siyah motor tercih edilir.'
  },
  {
    id: 35, brand: 'Volkswagen', model: 'Golf', gen: '5. Nesil', img: 'vw-golf-5.jpg',
    year_start: 2003, year_end: 2008, cat: 'hatchback', origin: 'de',
    engine: '1.4L / 1.6L FSI / 2.0T GTI / 1.9 TDI / 2.0 TDI', transmission: 'Manuel 6 / DSG 6',
    fuel: 'Benzinli / Dizel', power: '80–200 HP',
    reliability: 79, engine_score: 78, trans_score: 77, parts_score: 82,
    price_min: 400000, price_max: 900000,
    sahibinden_link: 'volkswagen-golf',
    long_term: 'DSG çift kavramalı şanzıman sorunları yaygın. Manuel tercih edilir.',
    watch_out: ['DSG 6 arızaları', 'Direksiyon pompası', '2.0T carbon birikimi'],
    notes: 'GTI 2.0T 200HP popüler. DSG sorunlu ama manuel versiyonlar güvenilir.'
  },
  {
    id: 36, brand: 'Volkswagen', model: 'Golf', gen: '6. Nesil', img: 'vw-golf-6.jpg',
    year_start: 2008, year_end: 2012, cat: 'hatchback', origin: 'de',
    engine: '1.2 TSI / 1.4 TSI / 1.6 TDI / 2.0 TDI', transmission: 'Manuel 6 / DSG 7',
    fuel: 'Benzinli / Dizel', power: '85–170 HP',
    reliability: 80, engine_score: 79, trans_score: 78, parts_score: 80,
    price_min: 550000, price_max: 1100000,
    sahibinden_link: 'volkswagen-golf',
    long_term: 'DSG 7 DQ200 sorunları devam etti. 1.6 TDI en güvenilir seçenek.',
    watch_out: ['DSG 7 salıncak arızası', '1.2 TSI timing chain', 'Turbo hortumu'],
    notes: '1.6 TDI manuel en az sorun çıkaran kombinasyon.'
  },
  {
    id: 37, brand: 'Volkswagen', model: 'Golf', gen: '7. Nesil', img: 'vw-golf-7.jpg',
    year_start: 2012, year_end: 2019, cat: 'hatchback', origin: 'de',
    engine: '1.0 TSI / 1.4 TSI / 1.5 TSI / 2.0 GTI / 1.6 TDI / 2.0 TDI',
    transmission: 'Manuel 6 / DSG 7',
    fuel: 'Benzinli / Dizel', power: '85–300 HP',
    reliability: 82, engine_score: 81, trans_score: 82, parts_score: 80,
    price_min: 850000, price_max: 1800000,
    sahibinden_link: 'volkswagen-golf',
    long_term: '1.5 TSI EVO en gelişmiş ve güvenilir motor. 2.0 GTI çok popüler.',
    watch_out: ['DSG sorunları (1.0/1.4)', 'High-pressure yakıt pompası', 'Su pompası'],
    notes: 'GTI 230HP, R 300HP versiyonları Türkiye\'de çok tercih edildi.'
  },
  {
    id: 38, brand: 'Volkswagen', model: 'Golf', gen: '8. Nesil', img: 'vw-golf-8.jpg',
    year_start: 2020, year_end: 2026, cat: 'hatchback', origin: 'de',
    engine: '1.0 eTSI / 1.5 eTSI / 2.0 GTI / 2.0 GTE Hybrid', transmission: 'DSG 7–8',
    fuel: 'Benzinli / Mild-Hybrid / PHEV', power: '110–300 HP',
    reliability: 76, engine_score: 75, trans_score: 74, parts_score: 72,
    price_min: 1500000, price_max: 3500000,
    sahibinden_link: 'volkswagen-golf',
    long_term: 'Elektronik sorunlar ilk yıllarda yaygındı. 2022+ facelift daha stabil.',
    watch_out: ['Dokunmatik kontroller arızaları', 'Yazılım güncelleme gerektirme', 'DSG sorunları'],
    notes: 'Çok elektronik bağımlı. 2022 facelift sonrası daha iyi. GTI öncelikle tercih et.'
  },
  {
    id: 39, brand: 'Volkswagen', model: 'Passat', gen: 'B5 / B5.5', img: 'vw-passat-b5.jpg',
    year_start: 1996, year_end: 2005, cat: 'sedan', origin: 'de',
    engine: '1.6L / 1.8T 150HP / 2.0 / 1.9 TDI / 2.5 TDI V6', transmission: 'Manuel 5 / Otomatik 5',
    fuel: 'Benzinli / Dizel', power: '101–180 HP',
    reliability: 79, engine_score: 78, trans_score: 79, parts_score: 82,
    price_min: 350000, price_max: 750000,
    sahibinden_link: 'volkswagen-passat',
    long_term: '1.9 TDI PD motor 300k+ km yapar. 1.8T Turbo dikkatli bakım ister.',
    watch_out: ['1.8T turbo yağ kaçağı', 'Otomatik şanzıman gecikmesi', 'Soğutma sistemi'],
    notes: 'Geniş iç hacim, düşük bakım maliyeti (TDI). Türkiye\'de çok yaygın.'
  },
  {
    id: 40, brand: 'Volkswagen', model: 'Passat', gen: 'B6 / B7', img: 'vw-passat-b6.jpg',
    year_start: 2005, year_end: 2015, cat: 'sedan', origin: 'de',
    engine: '1.4 TSI / 1.6 TDI / 2.0 TDI / 1.8 TSI', transmission: 'Manuel 6 / DSG',
    fuel: 'Benzinli / Dizel', power: '105–170 HP',
    reliability: 80, engine_score: 80, trans_score: 79, parts_score: 80,
    price_min: 550000, price_max: 1200000,
    sahibinden_link: 'volkswagen-passat',
    long_term: '2.0 TDI 170HP en güvenilir. DSG manuel tercih et.',
    watch_out: ['DSG sorunları', 'DPF filtresi', 'EGR valf'],
    notes: 'Türkiye\'de çok satan model. 2.0 TDI manuel ideal uzun yol arabası.'
  },
  {
    id: 41, brand: 'Volkswagen', model: 'Passat', gen: 'B8', img: 'vw-passat-b8.jpg',
    year_start: 2015, year_end: 2023, cat: 'sedan', origin: 'de',
    engine: '1.5 TSI / 1.4 TSI / 1.6 TDI / 2.0 TDI', transmission: 'DSG 6–7',
    fuel: 'Benzinli / Dizel', power: '120–190 HP',
    reliability: 79, engine_score: 79, trans_score: 78, parts_score: 78,
    price_min: 900000, price_max: 2000000,
    sahibinden_link: 'volkswagen-passat',
    long_term: 'Lüks iç mekan, geniş konfor. DSG bakımı kritik.',
    watch_out: ['DSG sorunları', 'Adblue (SCR) sistemi', 'Kamera/sensör arızaları'],
    notes: '2.0 TDI 150HP en dengeli seçenek. GTE hybrid versiyonu da var.'
  },
  {
    id: 42, brand: 'Volkswagen', model: 'Polo', gen: '4. Nesil (9N)', img: 'vw-polo-4.jpg',
    year_start: 2001, year_end: 2009, cat: 'hatchback', origin: 'de',
    engine: '1.2L / 1.4L / 1.6L / 1.4 TDI / 1.9 TDI', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '55–101 HP',
    reliability: 80, engine_score: 79, trans_score: 82, parts_score: 83,
    price_min: 200000, price_max: 480000,
    sahibinden_link: 'volkswagen-polo',
    long_term: '1.4 TDI çok yakıt tasarruflu. 1.4 benzinli çok güvenilir.',
    watch_out: ['1.2L 3 sil. zincir', 'EGR tıkanması', 'Klima sistemi'],
    notes: 'Şehir içi ideal küçük VW. 1.4 TDI en ekonomik.'
  },
  {
    id: 43, brand: 'Volkswagen', model: 'Polo', gen: '5. Nesil (6R)', img: 'vw-polo-5.jpg',
    year_start: 2009, year_end: 2017, cat: 'hatchback', origin: 'de',
    engine: '1.2 TSI / 1.4 TSI / 1.2 TDI / 1.6 TDI', transmission: 'Manuel 5 / DSG 7',
    fuel: 'Benzinli / Dizel', power: '60–110 HP',
    reliability: 79, engine_score: 78, trans_score: 77, parts_score: 80,
    price_min: 350000, price_max: 700000,
    sahibinden_link: 'volkswagen-polo',
    long_term: '1.6 TDI manuel çok ekonomik. DSG 7 DQ200 sorunlu modellerde var.',
    watch_out: ['DSG 7 (1.2 TSI) titreme', 'Timing chain 1.2T', 'EGR'],
    notes: 'GTI 180HP versiyonu popüler ama bakımı pahalı.'
  },
  {
    id: 44, brand: 'Volkswagen', model: 'Polo', gen: '6. Nesil (AW)', img: 'vw-polo-6.jpg',
    year_start: 2017, year_end: 2026, cat: 'hatchback', origin: 'de',
    engine: '1.0 MPI / 1.0 TSI / 1.5 TSI / 1.6 TDI', transmission: 'Manuel 5 / DSG 7',
    fuel: 'Benzinli / Dizel', power: '65–150 HP',
    reliability: 81, engine_score: 80, trans_score: 80, parts_score: 78,
    price_min: 600000, price_max: 1200000,
    sahibinden_link: 'volkswagen-polo',
    long_term: '1.0 TSI 95HP en iyi denge. DSG sorunları azaldı ama var.',
    watch_out: ['1.0 TSI yağ tüketimi', 'DSG gecikmesi', 'Plastik iç aksamlar'],
    notes: 'Türkiye\'de çok satan kompakt model. GTI 207HP versiyonu heyecanlı.'
  },
  // ─── BMW ─────────────────────────────────────
  {
    id: 45, brand: 'BMW', model: '3 Serisi', gen: 'E36', img: 'bmw-e36.jpg',
    year_start: 1990, year_end: 2000, cat: 'sedan', origin: 'de',
    engine: '1.6L / 1.8L M43 / 2.0L M50 / 2.5L M52 / 3.0L S50 M3', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli', power: '102–325 HP',
    reliability: 82, engine_score: 83, trans_score: 80, parts_score: 76,
    price_min: 400000, price_max: 1200000,
    sahibinden_link: 'bmw-3-serisi',
    long_term: 'Sürüş keyfi üstün. Bakım maliyeti Japon rakiplerine göre yüksek.',
    watch_out: ['VANOS arızası', 'Su pompası / termostat', 'Soğutma sistemi genel'],
    notes: 'M3 versiyonu çok değerli. 318i ve 320i en yaygın. 328i en dengeli.'
  },
  {
    id: 46, brand: 'BMW', model: '3 Serisi', gen: 'E46', img: 'bmw-e46.jpg',
    year_start: 1998, year_end: 2005, cat: 'sedan', origin: 'de',
    engine: '1.8L N42 / 2.0L M47D / 2.5L M54 / 3.0L M54', transmission: 'Manuel 5–6 / Otomatik 5',
    fuel: 'Benzinli / Dizel', power: '116–231 HP',
    reliability: 83, engine_score: 84, trans_score: 82, parts_score: 77,
    price_min: 600000, price_max: 1500000,
    sahibinden_link: 'bmw-3-serisi',
    long_term: 'M54 2.5L/3.0L efsane motor. N42 1.8L sorunlu (VANOS).',
    watch_out: ['N42 VANOS', 'Alt kol rotilleri', 'Havalı süspansiyon (touring)'],
    notes: 'Tasarım ikonu. 325i en dengeli seçenek. M3 E46 koleksiyoner aracı.'
  },
  {
    id: 47, brand: 'BMW', model: '3 Serisi', gen: 'E90', img: 'bmw-e90.jpg',
    year_start: 2005, year_end: 2011, cat: 'sedan', origin: 'de',
    engine: '2.0L N46 / N43 / 2.5L N52 / 3.0L N53 / 320d N47 / 330d', transmission: 'Manuel 6 / Otomatik 6',
    fuel: 'Benzinli / Dizel', power: '129–306 HP',
    reliability: 79, engine_score: 78, trans_score: 80, parts_score: 75,
    price_min: 700000, price_max: 1700000,
    sahibinden_link: 'bmw-3-serisi',
    long_term: 'N47 dizel zincir sorunu kritik. N52 benzinli daha güvenilir.',
    watch_out: ['N47 timing chain!', 'Yüksek basınç yakıt pompası', 'Turbo sorunları'],
    notes: '320d N47 motor zinciri ERKEN değiştirilmeli. 325i/328i N52 daha güvenilir.'
  },
  {
    id: 48, brand: 'BMW', model: '3 Serisi', gen: 'F30', img: 'bmw-f30.jpg',
    year_start: 2011, year_end: 2019, cat: 'sedan', origin: 'de',
    engine: '1.5L B38 / 2.0L B47 / B48 / 3.0L B58', transmission: 'Manuel 6 / Otomatik 8',
    fuel: 'Benzinli / Dizel', power: '116–355 HP',
    reliability: 78, engine_score: 77, trans_score: 79, parts_score: 73,
    price_min: 900000, price_max: 2500000,
    sahibinden_link: 'bmw-3-serisi',
    long_term: '320d B47 güvenilir. B48 benzinli de iyi. B38 3 sil. zayıf.',
    watch_out: ['B38 (316i) sorunları', 'Yağ tüketimi', 'Elektronik askı (adaptive)'],
    notes: '320d en yaygın ve ekonomik. 340i B58 çok güçlü ama bakım pahalı.'
  },
  // ─── MERCEDES ─────────────────────────────────
  {
    id: 49, brand: 'Mercedes', model: 'E Serisi', gen: 'W124', img: 'mercedes-w124.jpg',
    year_start: 1984, year_end: 1997, cat: 'sedan', origin: 'de',
    engine: '2.0L M102 / 2.3L / 2.5D OM605', transmission: 'Manuel 5 / Otomatik 4 (722.3)',
    fuel: 'Benzinli / Dizel', power: '102–130 HP',
    reliability: 88, engine_score: 88, trans_score: 87, parts_score: 82,
    price_min: 600000, price_max: 2000000,
    sahibinden_link: 'mercedes-e-serisi',
    long_term: 'Almanya\'nın son "aşırı mühendislenmiş" arabası. Dizel versiyonu 1M km yapar.',
    watch_out: ['EZL ateşleme sistemi', 'Yakıt pompası', 'Plastik parça kırılganlığı'],
    notes: 'Değer kazanan klasik. Dizel (OM605) tercih edilir. E280 en dengeli.'
  },
  {
    id: 50, brand: 'Mercedes', model: 'C Serisi', gen: 'W202', img: 'mercedes-w202.jpg',
    year_start: 1993, year_end: 2001, cat: 'sedan', origin: 'de',
    engine: '1.8L / 2.0L M111 / 2.3K C230 Kompressor / 2.2D CDI', transmission: 'Manuel 5 / Otomatik 5',
    fuel: 'Benzinli / Dizel', power: '122–193 HP',
    reliability: 82, engine_score: 81, trans_score: 82, parts_score: 80,
    price_min: 350000, price_max: 900000,
    sahibinden_link: 'mercedes-c-serisi',
    long_term: 'C180 ve C200 K en popüler. M111 motor güvenilir.',
    watch_out: ['Otomatik şanzıman bakımı', 'ABS pompası', 'Klima'],
    notes: 'C230 Kompressor güçlü seçenek. CDI dizel ise ekonomik.'
  },
  {
    id: 51, brand: 'Mercedes', model: 'C Serisi', gen: 'W203', img: 'mercedes-w203.jpg',
    year_start: 2000, year_end: 2007, cat: 'sedan', origin: 'de',
    engine: '1.8L M271 Kompressor / 2.0L / 2.2L CDI', transmission: 'Manuel 6 / Otomatik 5',
    fuel: 'Benzinli / Dizel', power: '129–170 HP',
    reliability: 80, engine_score: 79, trans_score: 80, parts_score: 79,
    price_min: 450000, price_max: 1100000,
    sahibinden_link: 'mercedes-c-serisi',
    long_term: 'M271 kompressor sorunu var (eksantrik zinciri). CDI çok ekonomik.',
    watch_out: ['M271 timing chain', 'Kompressor kayışı', 'Selenoid valf'],
    notes: 'C180 K en yaygın. 2.2 CDI dizel ideal uzun yol aracı.'
  },
  {
    id: 52, brand: 'Mercedes', model: 'C Serisi', gen: 'W204', img: 'mercedes-w204.jpg',
    year_start: 2007, year_end: 2014, cat: 'sedan', origin: 'de',
    engine: '1.8L M271 / C180 CGI / C200 / C220 CDI / C250 CDI', transmission: 'Manuel 6 / Otomatik 7',
    fuel: 'Benzinli / Dizel', power: '136–204 HP',
    reliability: 81, engine_score: 80, trans_score: 82, parts_score: 78,
    price_min: 700000, price_max: 1800000,
    sahibinden_link: 'mercedes-c-serisi',
    long_term: '7G-Tronic otomatik çok güvenilir. C220 CDI en ekonomik kombinasyon.',
    watch_out: ['M271 timing chain (erken modeller)', 'Balans mili sorunları', 'Egzoz gazı sensörü'],
    notes: 'C200 CGI ve C220 CDI en çok tercih edilen. Facelift (2011+) daha iyi.'
  },
  {
    id: 53, brand: 'Mercedes', model: 'C Serisi', gen: 'W205', img: 'mercedes-w205.jpg',
    year_start: 2014, year_end: 2021, cat: 'sedan', origin: 'de',
    engine: '1.6L M274 / C180 / C200 / C220d / C250d', transmission: 'Otomatik 7–9',
    fuel: 'Benzinli / Dizel', power: '129–204 HP',
    reliability: 79, engine_score: 78, trans_score: 80, parts_score: 75,
    price_min: 1100000, price_max: 2800000,
    sahibinden_link: 'mercedes-c-serisi',
    long_term: 'Çok elektronik bağımlı. 9G-Tronic şanzıman güvenilir.',
    watch_out: ['Elektronik aksam maliyeti', 'Kamera/sensör arızaları', 'Adblue sistemi'],
    notes: 'C220d en dengeli ve ekonomik. AMG versiyonları çok popüler.'
  },
  // ─── OPEL ────────────────────────────────────
  {
    id: 54, brand: 'Opel', model: 'Vectra', gen: 'A', img: 'opel-vectra-a.jpg',
    year_start: 1988, year_end: 1995, cat: 'sedan', origin: 'de',
    engine: '1.6L C16NZ / 1.8L C18NE / 2.0L C20NE', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '75–115 HP',
    reliability: 75, engine_score: 75, trans_score: 74, parts_score: 82,
    price_min: 150000, price_max: 380000,
    sahibinden_link: 'opel-vectra',
    long_term: 'C20NE 2.0L motor sağlam. Basit mekanik, ucuz bakım.',
    watch_out: ['Şanzıman rulman sesi', 'Yakıt pompası', 'Arka süspansiyon'],
    notes: 'Türkiye\'de Avrupa\'nın en çok satılan modeli döneminde. Parça bol.'
  },
  {
    id: 55, brand: 'Opel', model: 'Vectra', gen: 'B', img: 'opel-vectra-b.jpg',
    year_start: 1995, year_end: 2002, cat: 'sedan', origin: 'de',
    engine: '1.6L / 1.8L X18XE / 2.0 16V / 2.2DTI', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '100–145 HP',
    reliability: 76, engine_score: 76, trans_score: 75, parts_score: 83,
    price_min: 200000, price_max: 480000,
    sahibinden_link: 'opel-vectra',
    long_term: 'X18XE 1.8L sağlam. DTI dizel ekonomik. Elekt. sorunlar başlıyor.',
    watch_out: ['EGR valf', 'Turbo (DTI)', 'Elektrik arızaları'],
    notes: 'Geniş iç hacim, iyi yol tutuşu. Türkiye\'de çok tercih edildi.'
  },
  {
    id: 56, brand: 'Opel', model: 'Vectra', gen: 'C', img: 'opel-vectra-c.jpg',
    year_start: 2002, year_end: 2008, cat: 'sedan', origin: 'de',
    engine: '1.8L Z18XE / 2.2L Z22SE / 1.9 CDTi ECOTEC', transmission: 'Manuel 5–6 / Otomatik',
    fuel: 'Benzinli / Dizel', power: '122–150 HP',
    reliability: 77, engine_score: 77, trans_score: 77, parts_score: 80,
    price_min: 280000, price_max: 600000,
    sahibinden_link: 'opel-vectra',
    long_term: '1.9 CDTi dizel 300k+ yapar. 1.8L benzinli de güvenilir.',
    watch_out: ['1.9 CDTi DPF filtresi', 'Direksiyon', 'Elektronik paneller'],
    notes: 'Son Vectra. OPC versiyonu 280HP ile çok heyecanlı.'
  },
  {
    id: 57, brand: 'Opel', model: 'Astra', gen: 'F', img: 'opel-astra-f.jpg',
    year_start: 1991, year_end: 1998, cat: 'hatchback', origin: 'de',
    engine: '1.4L / 1.6L / 1.8L / 2.0L 16V', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '60–136 HP',
    reliability: 74, engine_score: 73, trans_score: 74, parts_score: 82,
    price_min: 120000, price_max: 320000,
    sahibinden_link: 'opel-astra',
    long_term: 'Ucuz ve bol parçalı. 1.4L/1.6L çok güvenilir basit motorlar.',
    watch_out: ['Kaporta pası', 'İzolasyon sorunları', 'Şanzıman rulmanı'],
    notes: 'Türkiye\'nin en çok bilinen Astra\'sı. GSi 2.0 16V sportif klasik.'
  },
  {
    id: 58, brand: 'Opel', model: 'Astra', gen: 'G', img: 'opel-astra-g.jpg',
    year_start: 1998, year_end: 2004, cat: 'hatchback', origin: 'de',
    engine: '1.4L Z14XE / 1.6L Z16XE / 1.8L Z18XE / 2.2L / 1.7 DTi', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '75–147 HP',
    reliability: 75, engine_score: 74, trans_score: 76, parts_score: 83,
    price_min: 180000, price_max: 420000,
    sahibinden_link: 'opel-astra',
    long_term: '1.6L Z16XE en güvenilir Astra motoru. DTi dizel ekonomik.',
    watch_out: ['Z16XE su pompası', 'EGR (DTi)', 'Elektrik sorunları'],
    notes: 'Türkiye\'nin en yaygın Astra nesli. Coupe ve Cabriolet de mevcut.'
  },
  {
    id: 59, brand: 'Opel', model: 'Astra', gen: 'H', img: 'opel-astra-h.jpg',
    year_start: 2004, year_end: 2009, cat: 'hatchback', origin: 'de',
    engine: '1.4L Z14XEP / 1.6L Z16XER / 1.8L / 1.7 CDTi / 1.9 CDTi', transmission: 'Manuel 5–6',
    fuel: 'Benzinli / Dizel', power: '90–150 HP',
    reliability: 76, engine_score: 75, trans_score: 76, parts_score: 82,
    price_min: 250000, price_max: 580000,
    sahibinden_link: 'opel-astra',
    long_term: '1.6L Z16XER sağlam. 1.9 CDTi DPF sorunlu. GTC sporlu kasa.',
    watch_out: ['1.9 CDTi DPF', 'Direksiyon döndürme yardımı', 'Elektronik arızalar'],
    notes: 'GTC coupe Türkiye\'de çok sevildi. OPC 240HP koleksiyoner aracı.'
  },
  {
    id: 60, brand: 'Opel', model: 'Astra', gen: 'J', img: 'opel-astra-j.jpg',
    year_start: 2009, year_end: 2015, cat: 'hatchback', origin: 'de',
    engine: '1.4T A14NET / 1.6T / 1.6 CDTi / 2.0 OPC', transmission: 'Manuel 5–6 / Otomatik',
    fuel: 'Benzinli / Dizel', power: '100–280 HP',
    reliability: 77, engine_score: 76, trans_score: 77, parts_score: 79,
    price_min: 380000, price_max: 850000,
    sahibinden_link: 'opel-astra',
    long_term: '1.4T A14NET güvenilir ama turbo bakımı gerekir. CDTi ekonomik.',
    watch_out: ['1.4T hava manifoldu', 'Turbo hortumu', 'Enjektör sorunları (CDTi)'],
    notes: 'OPC 280HP çok heyecanlı performans aracı. 1.6T en dengeli.'
  },
  {
    id: 61, brand: 'Opel', model: 'Corsa', gen: 'C', img: 'opel-corsa-c.jpg',
    year_start: 2000, year_end: 2006, cat: 'hatchback', origin: 'de',
    engine: '1.0L Z10XE / 1.2L Z12XE / 1.4L Z14XE / 1.3 CDTi', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '58–100 HP',
    reliability: 73, engine_score: 72, trans_score: 74, parts_score: 82,
    price_min: 120000, price_max: 300000,
    sahibinden_link: 'opel-corsa',
    long_term: '1.2L en ucuz bakımlı şehir arabası. Küçük motor yeterli güç sağlar.',
    watch_out: ['Kaporta pası', 'Egzoz susturucusu', 'ABS sensörü'],
    notes: 'Şehir içi ideal küçük araba. Türkiye\'de çok yaygın.'
  },
  {
    id: 62, brand: 'Opel', model: 'Corsa', gen: 'D', img: 'opel-corsa-d.jpg',
    year_start: 2006, year_end: 2014, cat: 'hatchback', origin: 'de',
    engine: '1.0L / 1.2L Z12XER / 1.4L / 1.3 CDTi / 1.7 CDTi', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '65–125 HP',
    reliability: 74, engine_score: 73, trans_score: 75, parts_score: 80,
    price_min: 200000, price_max: 450000,
    sahibinden_link: 'opel-corsa',
    long_term: '1.3 CDTi çok yakıt tasarruflu. 1.2L benzinli sade ve güvenilir.',
    watch_out: ['EPS direksiyon arızası', 'Elektrik kapı kilitleri', 'DPF (CDTi)'],
    notes: 'OPC 1.6T 207HP sportif versiyon koleksiyoncular için değerli.'
  },
  // ─── RENAULT ─────────────────────────────────
  {
    id: 63, brand: 'Renault', model: '19', gen: '', img: 'renault-19.jpg',
    year_start: 1988, year_end: 1996, cat: 'hatchback', origin: 'fr',
    engine: '1.4L E7J / 1.7L F3P', transmission: 'Manuel 5',
    fuel: 'Benzinli', power: '60–95 HP',
    reliability: 67, engine_score: 66, trans_score: 68, parts_score: 80,
    price_min: 80000, price_max: 220000,
    sahibinden_link: 'renault-19',
    long_term: 'Çok ucuz bakım. Motor basit. Güvenilirlik Japon rakiplerine göre düşük.',
    watch_out: ['Silindir kapağı contası', 'Alt takım körükleri', 'Yakıt pompası'],
    notes: 'Türkiye\'de en uzun süre satılan Fransız modeli. 1.4 16V sportif versiyon.'
  },
  {
    id: 64, brand: 'Renault', model: 'Symbol', gen: '1. Nesil', img: 'renault-symbol-1.jpg',
    year_start: 2002, year_end: 2008, cat: 'sedan', origin: 'fr',
    engine: '1.2L D4F / 1.4L K4J / 1.5 dCi', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '65–106 HP',
    reliability: 72, engine_score: 71, trans_score: 72, parts_score: 85,
    price_min: 120000, price_max: 300000,
    sahibinden_link: 'renault-symbol',
    long_term: '1.5 dCi dizel çok ekonomik. Parçası bol, ucuz bakım. Geniş bagaj.',
    watch_out: ['1.5 dCi enjektör', 'Direksiyon rotili', 'Klima'],
    notes: 'Türkiye\'de çok satan uygun fiyatlı sedan. Taksi filosunda yaygın.'
  },
  {
    id: 65, brand: 'Renault', model: 'Symbol', gen: '2. Nesil', img: 'renault-symbol-2.jpg',
    year_start: 2008, year_end: 2012, cat: 'sedan', origin: 'fr',
    engine: '1.2L / 1.4L / 1.5 dCi 68–86 HP', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '68–90 HP',
    reliability: 73, engine_score: 72, trans_score: 73, parts_score: 86,
    price_min: 180000, price_max: 380000,
    sahibinden_link: 'renault-symbol',
    long_term: 'Ekonomik, ucuz bakım. Taksi olarak milyonlarca km yapar.',
    watch_out: ['1.5 dCi enjektör', 'Alt takım', 'Egzoz manifoldu'],
    notes: 'Türk taksicilerin favorisi. 1.5 dCi 86HP dizel en ekonomik.'
  },
  {
    id: 66, brand: 'Renault', model: 'Symbol', gen: '3. Nesil', img: 'renault-symbol-3.jpg',
    year_start: 2012, year_end: 2021, cat: 'sedan', origin: 'fr',
    engine: '1.2L / 0.9 TCe / 1.5 dCi', transmission: 'Manuel 5 / Otomatik EDC',
    fuel: 'Benzinli / Dizel', power: '75–90 HP',
    reliability: 74, engine_score: 73, trans_score: 74, parts_score: 85,
    price_min: 300000, price_max: 600000,
    sahibinden_link: 'renault-symbol',
    long_term: '0.9 TCe turbo erken km sorunları raporlandı. 1.5 dCi hâlâ ideal.',
    watch_out: ['0.9 TCe turbo', 'EDC çift kavrama titreme', 'Enjektör'],
    notes: 'Türkiye\'de Dacia Logan ile aynı platform. 1.5 dCi tercih edilir.'
  },
  {
    id: 67, brand: 'Renault', model: 'Clio', gen: '2. Nesil', img: 'renault-clio-2.jpg',
    year_start: 1998, year_end: 2005, cat: 'hatchback', origin: 'fr',
    engine: '1.2L D4F / 1.4L / 1.6L 16V / 1.5 dCi', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '58–105 HP',
    reliability: 71, engine_score: 70, trans_score: 72, parts_score: 83,
    price_min: 100000, price_max: 280000,
    sahibinden_link: 'renault-clio',
    long_term: '1.5 dCi dizel bütçe dostu. 1.6 16V RS sportif klasik.',
    watch_out: ['Silindir kapağı contası', 'Isıtma sistemi', 'Gaz kelebeği'],
    notes: 'Türkiye\'de milyonlarca adet satıldı. RS 172HP sportif versiyon.'
  },
  {
    id: 68, brand: 'Renault', model: 'Clio', gen: '3. Nesil', img: 'renault-clio-3.jpg',
    year_start: 2005, year_end: 2012, cat: 'hatchback', origin: 'fr',
    engine: '1.2 16V / 1.4 16V / 1.6 16V / 1.5 dCi / 2.0 RS', transmission: 'Manuel 5–6',
    fuel: 'Benzinli / Dizel', power: '75–200 HP',
    reliability: 73, engine_score: 72, trans_score: 74, parts_score: 82,
    price_min: 200000, price_max: 500000,
    sahibinden_link: 'renault-clio',
    long_term: '1.5 dCi güvenilir. 2.0L RS 200HP sportif klasik haline geliyor.',
    watch_out: ['Direksiyon servis sesi', '1.5 dCi enjektör', 'Klima kompresör'],
    notes: 'RS 197 ve RS 200 versiyonları hot-hatch koleksiyonu için.'
  },
  {
    id: 69, brand: 'Renault', model: 'Clio', gen: '4. Nesil', img: 'renault-clio-4.jpg',
    year_start: 2012, year_end: 2019, cat: 'hatchback', origin: 'fr',
    engine: '0.9 TCe / 1.2 TCe / 1.5 dCi / 1.6T RS', transmission: 'Manuel 5–6 / EDC',
    fuel: 'Benzinli / Dizel', power: '75–220 HP',
    reliability: 74, engine_score: 73, trans_score: 73, parts_score: 82,
    price_min: 380000, price_max: 850000,
    sahibinden_link: 'renault-clio',
    long_term: '0.9 TCe sıkıntılı raporlar var. 1.5 dCi ideal. EDC çift kavrama bakım ister.',
    watch_out: ['0.9 TCe güvenilirlik', 'EDC titreme ve arıza', '1.2 TCe turbo'],
    notes: 'RS 220HP Trophy Trophy versiyonu. 1.5 dCi manuel en az sorunlu.'
  },
  {
    id: 70, brand: 'Renault', model: 'Clio', gen: '5. Nesil', img: 'renault-clio-5.jpg',
    year_start: 2019, year_end: 2026, cat: 'hatchback', origin: 'fr',
    engine: '1.0 TCe / 1.3 TCe / 1.5 Blue dCi / E-TECH Hybrid', transmission: 'Manuel / EDC / CVT',
    fuel: 'Benzinli / Dizel / Hybrid', power: '65–140 HP',
    reliability: 76, engine_score: 75, trans_score: 75, parts_score: 78,
    price_min: 850000, price_max: 1400000,
    sahibinden_link: 'renault-clio',
    long_term: 'E-Tech Hybrid şehirde çok ekonomik. 1.0 TCe pratik seçenek.',
    watch_out: ['EDC sorunları (1.0 TCe)', 'E-Tech batarya garantisi', 'Yazılım güncellemeleri'],
    notes: 'Türkiye\'nin en çok satan modeli 2024-2026. E-Tech hybrid tercih edilir.'
  },
  {
    id: 71, brand: 'Renault', model: 'Megane', gen: '2. Nesil', img: 'renault-megane-2.jpg',
    year_start: 2002, year_end: 2008, cat: 'hatchback', origin: 'fr',
    engine: '1.4 16V / 1.6 16V / 2.0 T RS / 1.5 dCi / 1.9 dCi', transmission: 'Manuel 5–6',
    fuel: 'Benzinli / Dizel', power: '82–225 HP',
    reliability: 72, engine_score: 71, trans_score: 73, parts_score: 80,
    price_min: 200000, price_max: 480000,
    sahibinden_link: 'renault-megane',
    long_term: '1.5 dCi en uygun seçenek. Geniş kasa, konforlu.'
    ,watch_out: ['Elektrik/sigorta sorunları', 'Direksiyon', 'Enjektör (1.9 dCi)'],
    notes: 'RS 225HP ve R26 versiyonları hot-hatch ikonları.'
  },
  {
    id: 72, brand: 'Renault', model: 'Megane', gen: '3. Nesil', img: 'renault-megane-3.jpg',
    year_start: 2008, year_end: 2015, cat: 'hatchback', origin: 'fr',
    engine: '1.2 TCe / 1.6 / 2.0T RS / 1.5 dCi / 1.6 dCi', transmission: 'Manuel 6 / EDC',
    fuel: 'Benzinli / Dizel', power: '85–265 HP',
    reliability: 73, engine_score: 72, trans_score: 73, parts_score: 80,
    price_min: 300000, price_max: 700000,
    sahibinden_link: 'renault-megane',
    long_term: '1.5 dCi güvenilir. RS 265HP Trophy Trophy efsane hot-hatch.',
    watch_out: ['1.2 TCe sorunları', 'EDC çift kavrama', 'Elektrik aksamı'],
    notes: 'RS 265HP Trophy Nürburgring rekoru kırdı. Türkiye\'de az ama değerli.'
  },
  {
    id: 73, brand: 'Renault', model: 'Megane', gen: '4. Nesil', img: 'renault-megane-4.jpg',
    year_start: 2016, year_end: 2022, cat: 'hatchback', origin: 'fr',
    engine: '1.2 TCe / 1.3 TCe / 1.8T RS / 1.5 dCi / 1.6 dCi', transmission: 'Manuel 6 / EDC',
    fuel: 'Benzinli / Dizel', power: '85–280 HP',
    reliability: 74, engine_score: 73, trans_score: 74, parts_score: 78,
    price_min: 550000, price_max: 1300000,
    sahibinden_link: 'renault-megane',
    long_term: '1.3 TCe sağlam. 1.8T RS çok eğlenceli. EDC bakımı kritik.',
    watch_out: ['1.3 TCe timing chain', 'EDC bakımı', 'Sensör arızaları'],
    notes: 'RS 280HP Trophy 4Control çok aranan model. 1.5 dCi ekonomik.'
  },
  // ─── HYUNDAİ ─────────────────────────────────
  {
    id: 74, brand: 'Hyundai', model: 'Accent', gen: 'LC (1. Nesil)', img: 'hyundai-accent-lc.jpg',
    year_start: 2000, year_end: 2005, cat: 'sedan', origin: 'kr',
    engine: '1.3L G4EH / 1.5L G4EK / 1.5 CRDi', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli / Dizel', power: '75–102 HP',
    reliability: 75, engine_score: 74, trans_score: 76, parts_score: 83,
    price_min: 120000, price_max: 300000,
    sahibinden_link: 'hyundai-accent',
    long_term: '1.5L benzinli sağlam. Ucuz bakım. Türkiye\'de çok yaygın.',
    watch_out: ['Direksiyon rotili', 'Fren sistemi', 'Otomatik şanzıman'],
    notes: 'Türkiye\'nin en yaygın Koreli modellerinden. Vergi avantajlı 1.3L.'
  },
  {
    id: 75, brand: 'Hyundai', model: 'Accent', gen: 'MC (2. Nesil)', img: 'hyundai-accent-mc.jpg',
    year_start: 2005, year_end: 2010, cat: 'sedan', origin: 'kr',
    engine: '1.4L G4EE / 1.6L G4ED / 1.5 CRDi', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli / Dizel', power: '97–110 HP',
    reliability: 77, engine_score: 76, trans_score: 78, parts_score: 84,
    price_min: 180000, price_max: 420000,
    sahibinden_link: 'hyundai-accent',
    long_term: '1.6L G4ED motor güvenilir. Ucuz ve bol yedek parça.',
    watch_out: ['Egzoz manifoldu', 'ABS modülü', 'Alternator'],
    notes: 'Türkiye\'de en yaygın kompakt sedan döneminde. Taksilerde bol.'
  },
  {
    id: 76, brand: 'Hyundai', model: 'Accent', gen: 'RB (3. Nesil)', img: 'hyundai-accent-rb.jpg',
    year_start: 2011, year_end: 2016, cat: 'sedan', origin: 'kr',
    engine: '1.4L G4FA / 1.6L G4FC', transmission: 'Manuel 6 / Otomatik 6',
    fuel: 'Benzinli', power: '100–123 HP',
    reliability: 79, engine_score: 78, trans_score: 79, parts_score: 84,
    price_min: 280000, price_max: 580000,
    sahibinden_link: 'hyundai-accent',
    long_term: 'G4FC 1.6L çok güvenilir. 6 ileri otomatik konforlu.',
    watch_out: ['Klima kompresörü', 'Elektrik sorunları', 'Motor yatağı sesi'],
    notes: 'Türkiye\'de çok satılan giriş segmenti. 1.6L otomatik en konforlu.'
  },
  {
    id: 77, brand: 'Hyundai', model: 'i20', gen: '1. Nesil (PB)', img: 'hyundai-i20-1.jpg',
    year_start: 2008, year_end: 2014, cat: 'hatchback', origin: 'kr',
    engine: '1.2L G4LA / 1.4L G4FA / 1.6L CRDi', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli / Dizel', power: '75–110 HP',
    reliability: 78, engine_score: 77, trans_score: 79, parts_score: 83,
    price_min: 200000, price_max: 460000,
    sahibinden_link: 'hyundai-i20',
    long_term: '1.4L benzinli sağlam. 1.6 CRDi ekonomik. Ucuz bakım.',
    watch_out: ['Egzoz emisyon sorunları', 'ABS sensörü', 'Klima'],
    notes: 'Şehir içi ideal küçük hatchback. 1.6 CRDi yakıt şampiyonu.'
  },
  {
    id: 78, brand: 'Hyundai', model: 'i20', gen: '2. Nesil (GB)', img: 'hyundai-i20-2.jpg',
    year_start: 2014, year_end: 2020, cat: 'hatchback', origin: 'kr',
    engine: '1.0T GDI / 1.2L / 1.4L / 1.1 CRDi / 1.4 CRDi', transmission: 'Manuel 5–6 / Otomatik 6',
    fuel: 'Benzinli / Dizel', power: '75–120 HP',
    reliability: 79, engine_score: 78, trans_score: 80, parts_score: 82,
    price_min: 380000, price_max: 750000,
    sahibinden_link: 'hyundai-i20',
    long_term: '1.4L 6 AT kombonu çok konforlu. 1.0T bazı erken dönem sorunları.',
    watch_out: ['1.0T GDI soğutucu', 'Otomatik şanzıman güncelleme', 'Gürültü izolasyonu'],
    notes: 'Türkiye\'de çok sevildi. 1.4 MPI otomatik tercih sebebi.'
  },
  {
    id: 79, brand: 'Hyundai', model: 'i20', gen: '3. Nesil (BC3)', img: 'hyundai-i20-3.jpg',
    year_start: 2020, year_end: 2026, cat: 'hatchback', origin: 'kr',
    engine: '1.0T 100HP / 1.0T 120HP / 1.2L MPI', transmission: 'Manuel 6 / iMT / DCT 7',
    fuel: 'Benzinli / Mild-Hybrid', power: '84–120 HP',
    reliability: 80, engine_score: 79, trans_score: 80, parts_score: 78,
    price_min: 780000, price_max: 1200000,
    sahibinden_link: 'hyundai-i20',
    long_term: 'İyi donanım/fiyat dengesi. 1.0T motor güvenilir. Mild-hybrid yakıt tasarrufu.',
    watch_out: ['DCT titremesi (erken dönem)', 'Sensör arızaları', 'OTA güncellemeleri'],
    notes: 'Türkiye\'de 2023-2026 en çok satan modellerden. N Line sporlu görünüm.'
  },
  {
    id: 80, brand: 'Hyundai', model: 'Elantra', gen: '6. Nesil (AD)', img: 'hyundai-elantra-6.jpg',
    year_start: 2015, year_end: 2020, cat: 'sedan', origin: 'kr',
    engine: '1.6L GDI / 2.0L MPI / 1.4T / 1.6 CRDi', transmission: 'Manuel 6 / Otomatik 6',
    fuel: 'Benzinli / Dizel', power: '100–132 HP',
    reliability: 81, engine_score: 80, trans_score: 81, parts_score: 83,
    price_min: 500000, price_max: 1000000,
    sahibinden_link: 'hyundai-elantra',
    long_term: '1.6 GDI sağlam. Geniş iç hacim aileler için uygun.',
    watch_out: ['1.4T turbo hortumu', 'GDI karbon birikimi', 'Elektrik sorunları'],
    notes: '1.6 MPI otomatik en az sorunlu seçenek. Türkiye\'de iyi pazar.'
  },
  {
    id: 81, brand: 'Hyundai', model: 'Tucson', gen: '3. Nesil (TL)', img: 'hyundai-tucson-3.jpg',
    year_start: 2015, year_end: 2020, cat: 'suv', origin: 'kr',
    engine: '1.6T GDI / 2.0L MPI / 1.7 CRDi / 2.0 CRDi', transmission: 'Manuel 6 / Otomatik 6',
    fuel: 'Benzinli / Dizel', power: '132–185 HP',
    reliability: 80, engine_score: 79, trans_score: 80, parts_score: 79,
    price_min: 900000, price_max: 1800000,
    sahibinden_link: 'hyundai-tucson',
    long_term: '2.0 CRDi güçlü ve ekonomik. 1.6T GDI dikkatli bakım ister.',
    watch_out: ['1.6T karbon birikimi', '4WD bakımı', 'DCT (1.6T) arızaları'],
    notes: '2.0 CRDi 4WD Türkiye\'de çok tercih edildi. Geniş iç hacim.'
  },
  // ─── KİA ─────────────────────────────────────
  {
    id: 82, brand: 'Kia', model: 'Rio', gen: '2. Nesil (JB)', img: 'kia-rio-2.jpg',
    year_start: 2005, year_end: 2011, cat: 'hatchback', origin: 'kr',
    engine: '1.4L G4EE / 1.6L G4ED', transmission: 'Manuel 5 / Otomatik 4',
    fuel: 'Benzinli', power: '97–110 HP',
    reliability: 75, engine_score: 74, trans_score: 76, parts_score: 80,
    price_min: 150000, price_max: 360000,
    sahibinden_link: 'kia-rio',
    long_term: 'Ucuz bakım. 1.4L basit motor güvenilir. Yedek parçası bulunur.',
    watch_out: ['Klima', 'Alt takım', 'Plastik iç aksamlar'],
    notes: 'Türkiye\'de yaygın. Hyundai Accent ile aynı platform.'
  },
  {
    id: 83, brand: 'Kia', model: 'Rio', gen: '3. Nesil (UB)', img: 'kia-rio-3.jpg',
    year_start: 2011, year_end: 2017, cat: 'hatchback', origin: 'kr',
    engine: '1.2L / 1.4L G4FA / 1.6L G4FC / 1.1 CRDi', transmission: 'Manuel 5–6 / Otomatik 4',
    fuel: 'Benzinli / Dizel', power: '84–110 HP',
    reliability: 77, engine_score: 76, trans_score: 78, parts_score: 81,
    price_min: 280000, price_max: 580000,
    sahibinden_link: 'kia-rio',
    long_term: '1.4L güvenilir şehir aracı. 1.1 CRDi çok ekonomik.',
    watch_out: ['Elektrik sorunları', 'Klima kompresör', 'Egzoz'],
    notes: '5 kapılı hatchback kasa Türkiye\'de tercih edildi.'
  },
  {
    id: 84, brand: 'Kia', model: "Cee'd", gen: '1. Nesil (ED)', img: 'kia-ceed-1.jpg',
    year_start: 2007, year_end: 2012, cat: 'hatchback', origin: 'kr',
    engine: '1.4L / 1.6L G4FC / 2.0L / 1.4 CRDi / 1.6 CRDi', transmission: 'Manuel 5–6',
    fuel: 'Benzinli / Dizel', power: '90–140 HP',
    reliability: 77, engine_score: 76, trans_score: 78, parts_score: 79,
    price_min: 250000, price_max: 540000,
    sahibinden_link: 'kia-ceed',
    long_term: '1.6L G4FC güvenilir motor. Geniş bagaj Türkiye\'de tercih sebebi.',
    watch_out: ['Soğutma sistemi', 'Direksiyon', 'EGR (CRDi)'],
    notes: 'Avrupalı tasarım standartları. 7 yıl garantiyle satıldı.'
  },
  {
    id: 85, brand: 'Kia', model: "Cee'd", gen: '2. Nesil (JD)', img: 'kia-ceed-2.jpg',
    year_start: 2012, year_end: 2018, cat: 'hatchback', origin: 'kr',
    engine: '1.0T / 1.4T / 1.6L / 1.6T GT / 1.4 CRDi / 1.6 CRDi', transmission: 'Manuel 6 / PDK',
    fuel: 'Benzinli / Dizel', power: '100–204 HP',
    reliability: 78, engine_score: 77, trans_score: 79, parts_score: 78,
    price_min: 380000, price_max: 850000,
    sahibinden_link: 'kia-ceed',
    long_term: '1.6L GT 204HP güçlü. 1.6 CRDi ekonomik. 7 yıl garanti avantajı.',
    watch_out: ['1.0T erken dönem sorunları', 'PDK gecikmesi', 'DPF bakımı'],
    notes: 'GT versiyonu hot-hatch segmentinde değerli.'
  },
  // ─── PEUGEOT ─────────────────────────────────
  {
    id: 86, brand: 'Peugeot', model: '206', gen: '', img: 'peugeot-206.jpg',
    year_start: 1998, year_end: 2012, cat: 'hatchback', origin: 'fr',
    engine: '1.1L / 1.4L / 1.6L 16V / 2.0 16V S16 / 1.4 HDi / 1.9 D', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '60–137 HP',
    reliability: 70, engine_score: 69, trans_score: 71, parts_score: 80,
    price_min: 100000, price_max: 280000,
    sahibinden_link: 'peugeot-206',
    long_term: 'Bakım ucuz. 1.6 16V sağlam motor. Rust sorunu olabilir.',
    watch_out: ['Gövde pası', 'Elektrik arızaları', 'Soğutma sistemi'],
    notes: 'Türkiye\'de uzun yıllar üretildi. 1.4 HDi çok ekonomik.'
  },
  {
    id: 87, brand: 'Peugeot', model: '207', gen: '', img: 'peugeot-207.jpg',
    year_start: 2006, year_end: 2012, cat: 'hatchback', origin: 'fr',
    engine: '1.4L / 1.6L THP / 2.0 RC / 1.4 HDi / 1.6 HDi', transmission: 'Manuel 5–6',
    fuel: 'Benzinli / Dizel', power: '73–175 HP',
    reliability: 71, engine_score: 70, trans_score: 72, parts_score: 78,
    price_min: 180000, price_max: 420000,
    sahibinden_link: 'peugeot-207',
    long_term: '1.4L VTi güvenilir. 1.6 THP turbo bazı sorunlar bildirdi.',
    watch_out: ['1.6 THP turbo sorunları', 'Timing chain', 'Elektronik aksamlar'],
    notes: 'RC 175HP coupe sportif klasik. 1.6 HDi ekonomik.'
  },
  {
    id: 88, brand: 'Peugeot', model: '208', gen: '1. Nesil (A9)', img: 'peugeot-208-1.jpg',
    year_start: 2012, year_end: 2019, cat: 'hatchback', origin: 'fr',
    engine: '1.2 VTi / 1.6 VTi / 1.6 THP GTi / 1.4 e-HDi / 1.6 BlueHDi', transmission: 'Manuel 5–6 / EAT6',
    fuel: 'Benzinli / Dizel', power: '68–208 HP',
    reliability: 73, engine_score: 72, trans_score: 73, parts_score: 78,
    price_min: 300000, price_max: 700000,
    sahibinden_link: 'peugeot-208',
    long_term: '1.2 VTi sağlam. GTi 208HP Nürburgring rekoru kırdı.',
    watch_out: ['1.6 THP timing chain', 'EAT6 bakımı', 'İ-Cockpit görüş açısı'],
    notes: 'GTi 208HP koleksiyoner aracı. 1.6 BlueHDi çok ekonomik.'
  },
  {
    id: 89, brand: 'Peugeot', model: '208', gen: '2. Nesil (P21)', img: 'peugeot-208-2.jpg',
    year_start: 2019, year_end: 2026, cat: 'hatchback', origin: 'fr',
    engine: '1.2 PureTech 75/100/130 / 1.5 BlueHDi / e-208 EV', transmission: 'Manuel 5–6 / EAT8',
    fuel: 'Benzinli / Dizel / Elektrik', power: '75–154 HP',
    reliability: 76, engine_score: 75, trans_score: 76, parts_score: 74,
    price_min: 750000, price_max: 1500000,
    sahibinden_link: 'peugeot-208',
    long_term: '1.2 PureTech 130HP EAT8 en iyi kombinasyon. e-208 Türkiye\'de az.',
    watch_out: ['EAT8 erken dönem bakımı', 'i-Cockpit ergonomisi', '1.2 PureTech timing chain'],
    notes: 'Tasarımı çok beğenildi. e-208 elektrikli giderek yaygınlaşıyor.'
  },
  {
    id: 90, brand: 'Peugeot', model: '301', gen: '', img: 'peugeot-301.jpg',
    year_start: 2012, year_end: 2022, cat: 'sedan', origin: 'fr',
    engine: '1.2L / 1.6L VTi / 1.6 BlueHDi e-HDi', transmission: 'Manuel 5–6 / EAT6',
    fuel: 'Benzinli / Dizel', power: '75–115 HP',
    reliability: 74, engine_score: 73, trans_score: 74, parts_score: 80,
    price_min: 300000, price_max: 700000,
    sahibinden_link: 'peugeot-301',
    long_term: 'Gelişmekte olan pazarlar için tasarlandı. Geniş bagaj avantaj.',
    watch_out: ['1.6 VTi soğutma', 'EAT6 gecikmesi', 'Ses yalıtımı'],
    notes: 'Türkiye, Orta Doğu ve Afrika pazarı için yapıldı. 1.6 HDi tercih et.'
  },
  // ─── NİSSAN ──────────────────────────────────
  {
    id: 91, brand: 'Nissan', model: 'Patrol', gen: 'Y60', img: 'nissan-patrol-y60.jpg',
    year_start: 1987, year_end: 1997, cat: 'suv', origin: 'jp',
    engine: '4.2L TD42 / TB42 / 3.0L RD28', transmission: 'Manuel 5',
    fuel: 'Dizel / Benzinli', power: '125–145 HP',
    reliability: 91, engine_score: 92, trans_score: 90, parts_score: 82,
    price_min: 700000, price_max: 2500000,
    sahibinden_link: 'nissan-patrol',
    long_term: 'TD42 motor Land Cruiser 1HZ ile yarışır. 800k km üzeri örnekler var.',
    watch_out: ['Turbo versiyon turbo bakımı', 'Diferansiyel sızdırmazlık', 'Ön körükler'],
    notes: 'Türkiye\'de nadir ve değerli. TD42 orijinal araçlar koleksiyonerlerin gözdesi.'
  },
  {
    id: 92, brand: 'Nissan', model: 'Micra', gen: 'K12', img: 'nissan-micra-k12.jpg',
    year_start: 2002, year_end: 2010, cat: 'hatchback', origin: 'jp',
    engine: '1.0L CR10 / 1.2L CR12 / 1.4L CR14 / 1.5 dCi', transmission: 'Manuel 5 / Otomatik CVT',
    fuel: 'Benzinli / Dizel', power: '58–98 HP',
    reliability: 77, engine_score: 78, trans_score: 76, parts_score: 76,
    price_min: 130000, price_max: 320000,
    sahibinden_link: 'nissan-micra',
    long_term: '1.2L CR12 çok güvenilir. CVT şanzıman sıvı bakımı kritik.',
    watch_out: ['CVT sıvısı bakımı', 'Klima', 'Kaporta pası'],
    notes: 'Şehir içi küçük Japon arabası. CVT manuel versiyondan daha az tercih edildi.'
  },
  {
    id: 93, brand: 'Nissan', model: 'Qashqai', gen: '2. Nesil (J11)', img: 'nissan-qashqai-2.jpg',
    year_start: 2013, year_end: 2021, cat: 'suv', origin: 'jp',
    engine: '1.2T / 1.6T DIG-T / 1.5 dCi / 1.6 dCi', transmission: 'Manuel 6 / CVT / Oto. 6',
    fuel: 'Benzinli / Dizel', power: '115–163 HP',
    reliability: 80, engine_score: 79, trans_score: 80, parts_score: 78,
    price_min: 700000, price_max: 1500000,
    sahibinden_link: 'nissan-qashqai',
    long_term: '1.6T DIG-T güçlü. 1.5 dCi ekonomik. CVT bakımı kritik.',
    watch_out: ['1.2T turbo sorunları', 'CVT akışkanı', 'ProPilot sistemi kalibrasyonu'],
    notes: 'SUV segmentinin popüler modeli. 1.5 dCi 110HP en ekonomik seçenek.'
  },
  // ─── DACIA ───────────────────────────────────
  {
    id: 94, brand: 'Dacia', model: 'Logan', gen: '1. Nesil', img: 'dacia-logan-1.jpg',
    year_start: 2004, year_end: 2012, cat: 'sedan', origin: 'ro',
    engine: '1.4L K7J / 1.6L K4M / 1.5 dCi', transmission: 'Manuel 5',
    fuel: 'Benzinli / Dizel', power: '75–105 HP',
    reliability: 74, engine_score: 74, trans_score: 75, parts_score: 88,
    price_min: 100000, price_max: 280000,
    sahibinden_link: 'dacia-logan',
    long_term: 'En ucuz bakımlı sedan. Renault motoru güvenilir. Parça çok ucuz.',
    watch_out: ['Plastik iç mekan kalitesi', 'Ses yalıtımı yetersiz', 'ABS sistemi'],
    notes: 'Geniş bagaj ve ucuz bakım ile ticari kullanımda yaygın.'
  },
  {
    id: 95, brand: 'Dacia', model: 'Duster', gen: '1. Nesil', img: 'dacia-duster-1.jpg',
    year_start: 2010, year_end: 2018, cat: 'suv', origin: 'ro',
    engine: '1.6L K4M / 2.0L F4R / 1.5 dCi / 1.6 SCe', transmission: 'Manuel 5–6 / Otomatik 6',
    fuel: 'Benzinli / Dizel', power: '105–150 HP',
    reliability: 76, engine_score: 75, trans_score: 77, parts_score: 84,
    price_min: 350000, price_max: 750000,
    sahibinden_link: 'dacia-duster',
    long_term: 'Fiyat/performans şampiyonu. 4x4 versiyonu gerçek arazi kapasitesi.',
    watch_out: ['4x4 sistemi ön körükleri', 'EGR sistemi (dCi)', 'İç mekan kalitesi'],
    notes: 'Türkiye\'nin en ucuz SUV\'u. 1.5 dCi 4x4 en dengeli seçenek.'
  },
  {
    id: 96, brand: 'Dacia', model: 'Duster', gen: '2. Nesil (HM)', img: 'dacia-duster-2.jpg',
    year_start: 2018, year_end: 2024, cat: 'suv', origin: 'ro',
    engine: '1.0 TCe / 1.3 TCe / 1.5 Blue dCi / 1.6 SCe', transmission: 'Manuel 6 / CVT / EDC',
    fuel: 'Benzinli / Dizel', power: '90–150 HP',
    reliability: 77, engine_score: 76, trans_score: 77, parts_score: 82,
    price_min: 600000, price_max: 1200000,
    sahibinden_link: 'dacia-duster',
    long_term: '1.3 TCe sağlam. 1.5 Blue dCi ekonomik. 4WD seçenek mevcut.',
    watch_out: ['EDC arızaları (1.0 TCe)', '1.3 TCe timing chain', 'İç mekan kalitesi'],
    notes: 'Türkiye\'de fiyat/performans lideri SUV. 2024\'te 3. nesle geçildi.'
  },
  // ─── SKODA ───────────────────────────────────
  {
    id: 97, brand: 'Skoda', model: 'Octavia', gen: '2. Nesil (1Z)', img: 'skoda-octavia-2.jpg',
    year_start: 2004, year_end: 2013, cat: 'sedan', origin: 'de',
    engine: '1.4L / 1.6L BSE / 1.8T / 2.0T / 1.9 TDI / 2.0 TDI',
    transmission: 'Manuel 5–6 / DSG',
    fuel: 'Benzinli / Dizel', power: '75–200 HP',
    reliability: 82, engine_score: 82, trans_score: 81, parts_score: 82,
    price_min: 450000, price_max: 1000000,
    sahibinden_link: 'skoda-octavia',
    long_term: '2.0 TDI güvenilir. 1.4L BSE çok sağlam. VW grubu avantajı.',
    watch_out: ['DSG sorunları', 'DPF filtresi', 'Elektronik arızalar'],
    notes: 'VW Golf\'tan daha geniş ve ucuz. 1.6 TDI 105HP en dengeli seçenek.'
  },
  // ─── SEAT ────────────────────────────────────
  {
    id: 98, brand: 'Seat', model: 'Leon', gen: '2. Nesil (1P)', img: 'seat-leon-2.jpg',
    year_start: 2005, year_end: 2012, cat: 'hatchback', origin: 'de',
    engine: '1.4T / 1.6L / 2.0T FR / 1.9 TDI / 2.0 TDI FR',
    transmission: 'Manuel 5–6 / DSG',
    fuel: 'Benzinli / Dizel', power: '85–240 HP',
    reliability: 79, engine_score: 79, trans_score: 78, parts_score: 79,
    price_min: 350000, price_max: 850000,
    sahibinden_link: 'seat-leon',
    long_term: '2.0T FR güçlü ama bakım VW fiyatlarında. 1.9 TDI ekonomik.',
    watch_out: ['DSG arızaları', 'Direksiyon pompası', 'DPF (TDI)'],
    notes: 'Cupra versiyonu Türkiye\'de nadir. FR 2.0T çok sevildi.'
  },
  // ─── VOLVO ───────────────────────────────────
  {
    id: 99, brand: 'Volvo', model: 'S40', gen: '2. Nesil (P1)', img: 'volvo-s40.jpg',
    year_start: 2004, year_end: 2012, cat: 'sedan', origin: 'se',
    engine: '1.8L / 2.0L B4204S / T5 2.5T / 2.0D D4204T', transmission: 'Manuel 5–6 / Otomatik 5',
    fuel: 'Benzinli / Dizel', power: '122–220 HP',
    reliability: 80, engine_score: 79, trans_score: 80, parts_score: 74,
    price_min: 350000, price_max: 800000,
    sahibinden_link: 'volvo-s40',
    long_term: '2.0D dizel güvenilir. T5 2.5T güçlü. Volvo güvenlik avantajı.',
    watch_out: ['T5 turbo bakımı', 'Otomatik şanzıman sıvısı', 'Kamera sistemleri'],
    notes: 'İsveç güvenlik ekolü. 2.0D 136HP verimli seçenek.'
  },
  // ─── TOGG ────────────────────────────────────
  {
    id: 100, brand: 'Togg', model: 'T10X', gen: '', img: 'togg-t10x.jpg',
    year_start: 2023, year_end: 2026, cat: 'suv', origin: 'tr',
    engine: '1 Motor (200HP) / 2 Motor (476HP)', transmission: 'Tek Vitesli Elektrik',
    fuel: 'Elektrik', power: '200–476 HP',
    reliability: 78, engine_score: 85, trans_score: 88, parts_score: 65,
    price_min: 1500000, price_max: 2500000,
    sahibinden_link: 'togg',
    long_term: 'Türkiye\'nin ilk yerli elektrikli SUV\'u. Garanti ve servis ağı gelişiyor.',
    watch_out: ['Batarya garanti koşulları', 'Yazılım güncellemesi', 'Uzun yol menzil endişesi'],
    notes: 'TR101 (476HP) ve TR100 (200HP) versiyonları. 2023\'te Bursa\'dan çıktı.'
  }
];

/* ─── GLOBAL SIRALAMA NUMARASI ───────────────── */
// Her aracın güvenilirlik sıralamasındaki numarası sabit kalır
const RELIABILITY_RANK = {};
[...CARS]
  .sort((a, b) => b.reliability - a.reliability)
  .forEach((c, i) => { RELIABILITY_RANK[c.id] = i + 1; });

/* ─── STATE ──────────────────────────────────── */
let filters = {
  year: 'tumu',
  cat: 'tumu',
  origin: 'tumu',
  search: '',
  sort: 'reliability'
};

/* ─── FILTER ENGINE ──────────────────────────── */
function getFiltered() {
  let data = [...CARS];

  // Year filter
  if (filters.year !== 'tumu') {
    data = data.filter(c => {
      const mid = Math.round((c.year_start + c.year_end) / 2);
      if (filters.year === 'pre2000') return c.year_start < 2000;
      if (filters.year === '2000s') return c.year_start >= 2000 && c.year_start < 2010;
      if (filters.year === '2010s') return c.year_start >= 2010 && c.year_start < 2020;
      if (filters.year === '2020s') return c.year_start >= 2020;
      return true;
    });
  }
  // Category
  if (filters.cat !== 'tumu') data = data.filter(c => c.cat === filters.cat);
  // Origin
  if (filters.origin !== 'tumu') data = data.filter(c => c.origin === filters.origin);
  // Search
  if (filters.search) {
    const q = filters.search.toLowerCase();
    data = data.filter(c =>
      c.brand.toLowerCase().includes(q) ||
      c.model.toLowerCase().includes(q) ||
      (c.gen || '').toLowerCase().includes(q) ||
      c.engine.toLowerCase().includes(q)
    );
  }

  // Sort
  data.sort((a, b) => {
    if (filters.sort === 'reliability') return b.reliability - a.reliability;
    if (filters.sort === 'year_asc') return a.year_start - b.year_start;
    if (filters.sort === 'year_desc') return b.year_start - a.year_start;
    if (filters.sort === 'price_asc') return a.price_min - b.price_min;
    if (filters.sort === 'price_desc') return b.price_max - a.price_max;
    if (filters.sort === 'name') return (a.brand+a.model).localeCompare(b.brand+b.model);
    return 0;
  });

  return data;
}

/* ─── RENDER GRID ────────────────────────────── */
function renderGrid() {
  const grid = document.getElementById('carGrid');
  const empty = document.getElementById('emptyState');
  const countEl = document.getElementById('resultCount');

  const data = getFiltered();
  countEl.textContent = `${data.length} araç listeleniyor`;

  if (data.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = data.map((c) => cardHTML(c, RELIABILITY_RANK[c.id])).join('');

  // Animate score bars after render
  setTimeout(() => {
    document.querySelectorAll('.score-fill').forEach(el => {
      const target = el.dataset.width;
      el.style.width = target;
    });
  }, 100);
}

/* ─── CARD HTML ──────────────────────────────── */
function stampClass(score) {
  if (score >= 85) return 'stamp-high';
  if (score >= 75) return 'stamp-mid';
  return 'stamp-low';
}
function fmtPrice(min, max) {
  function fmt(n) {
    if (n >= 1000000) return (n/1000000).toFixed(1).replace('.0','') + 'M';
    if (n >= 1000) return Math.round(n/1000) + 'K';
    return n;
  }
  return `${fmt(min)} – ${fmt(max)} ₺`;
}
function originLabel(o) {
  const map = {jp:'🇯🇵 JP', de:'🇩🇪 DE', fr:'🇫🇷 FR', kr:'🇰🇷 KR', it:'🇮🇹 IT', tr:'🇹🇷 TR', se:'🇸🇪 SE', ro:'🇷🇴 RO'};
  return map[o] || o;
}
function catLabel(c) {
  const map = {sedan:'Sedan', hatchback:'Hatch', suv:'SUV', mpv:'MPV'};
  return map[c] || c;
}

function cardHTML(c, num) {
  const img = IMG_URLS[c.img] || `assets/img/${c.img}`;
  return `
  <div class="car-card" onclick="openModal(${c.id})">
    <div class="card-img-wrap">
      <img src="${img}" alt="${c.brand} ${c.model}" loading="lazy"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="card-img-placeholder" style="display:none">
        <span>🚗</span><span>${c.brand} ${c.model}</span>
      </div>
      <div class="card-badges">
        <span class="badge badge-origin">${originLabel(c.origin)}</span>
        <span class="badge badge-cat">${catLabel(c.cat)}</span>
      </div>
      <div class="card-stamp ${stampClass(c.reliability)}">${c.reliability}</div>
      <div class="card-number">#${num}</div>
    </div>
    <div class="card-body">
      <div class="card-brand">${c.brand}</div>
      <div class="card-name">${c.model}${c.gen ? ' ' + c.gen : ''}</div>
      <div class="card-years">${c.year_start} – ${c.year_end > 2025 ? 'Günümüz' : c.year_end}</div>
      <div class="card-divider"></div>
      <div class="card-specs">
        <div class="cspec"><span class="cspec-val">${c.engine.split('/')[0].trim().split(' ').slice(0,2).join(' ')}</span><span class="cspec-key">Motor</span></div>
        <div class="cspec"><span class="cspec-val">${c.fuel.split('/')[0].trim()}</span><span class="cspec-key">Yakıt</span></div>
        <div class="cspec"><span class="cspec-val">${c.power.split('–')[0].trim()}</span><span class="cspec-key">Min. Güç</span></div>
      </div>
      <div class="score-wrap">
        <div class="score-row"><span class="score-lbl">Motor</span><div class="score-track"><div class="score-fill" style="width:0" data-width="${c.engine_score}%"></div></div><span class="score-num">${c.engine_score}</span></div>
        <div class="score-row"><span class="score-lbl">Şanzıman</span><div class="score-track"><div class="score-fill" style="width:0" data-width="${c.trans_score}%"></div></div><span class="score-num">${c.trans_score}</span></div>
      </div>
      <div class="card-price" style="margin-top:10px">${fmtPrice(c.price_min, c.price_max)}<small>2026 piyasa</small></div>
    </div>
  </div>`;
}

/* ─── MODAL ──────────────────────────────────── */
function openModal(id) {
  const c = CARS.find(x => x.id === id);
  if (!c) return;

  const img = IMG_URLS[c.img] || '';
  const imgSection = img
    ? `<img src="${img}" alt="${c.brand} ${c.model}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
       <div class="modal-img-placeholder" style="display:none"><span>🚗</span><span>${c.brand} ${c.model}</span></div>`
    : `<div class="modal-img-placeholder" style="display:flex"><span>🚗</span><span>${c.brand} ${c.model}</span></div>`;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img-wrap">${imgSection}</div>
    <div class="modal-header">
      <div>
        <div class="modal-title">${c.brand} ${c.model} ${c.gen || ''}</div>
        <div class="modal-sub">${c.year_start} – ${c.year_end > 2025 ? 'Günümüz' : c.year_end} · ${originLabel(c.origin)} · ${catLabel(c.cat)}</div>
      </div>
      <div class="modal-price">
        ${fmtPrice(c.price_min, c.price_max)}
        <small>2026 Türkiye piyasa ortalaması<br>Kaynak: sahibinden.com</small>
      </div>
    </div>
    <div class="modal-grid">
      <div>
        <div class="modal-section">
          <div class="modal-section-title">Teknik Özellikler</div>
          <table class="spec-tbl">
            <tr><td>Motor</td><td>${c.engine}</td></tr>
            <tr><td>Güç</td><td>${c.power}</td></tr>
            <tr><td>Şanzıman</td><td>${c.transmission}</td></tr>
            <tr><td>Yakıt</td><td>${c.fuel}</td></tr>
            <tr><td>Üretim Yılları</td><td>${c.year_start} – ${c.year_end > 2025 ? 'Hâlâ üretimde' : c.year_end}</td></tr>
          </table>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Güvenilirlik Skorları</div>
          <div class="modal-reliability">
            <div class="rel-row"><span class="rel-lbl">Genel Skor</span><div class="rel-track"><div class="rel-fill" style="width:${c.reliability}%"></div></div><span class="rel-num">${c.reliability}</span></div>
            <div class="rel-row"><span class="rel-lbl">Motor</span><div class="rel-track"><div class="rel-fill" style="width:${c.engine_score}%"></div></div><span class="rel-num">${c.engine_score}</span></div>
            <div class="rel-row"><span class="rel-lbl">Şanzıman</span><div class="rel-track"><div class="rel-fill" style="width:${c.trans_score}%"></div></div><span class="rel-num">${c.trans_score}</span></div>
            <div class="rel-row"><span class="rel-lbl">Parça Temi.</span><div class="rel-track"><div class="rel-fill" style="width:${c.parts_score}%"></div></div><span class="rel-num">${c.parts_score}</span></div>
          </div>
        </div>
      </div>
      <div>
        <div class="modal-section">
          <div class="modal-section-title">Uzun Vade Değerlendirme</div>
          <div class="modal-text">${c.long_term}</div>
          <div class="modal-warn"><strong>⚠ Dikkat Edilecekler:</strong><br>${c.watch_out.map(w=>'• '+w).join('<br>')}</div>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Notlar</div>
          <div class="modal-text">${c.notes}</div>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Sahibinden.com</div>
          <div class="modal-text">
            <a href="${sahibindenURL(c)}" target="_blank" rel="noopener">
              → sahibinden.com\'da güncel ilanları gör
            </a>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('carModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('carModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── FILTER BUTTONS ─────────────────────────── */
function setupFilterBtns(groupId, key) {
  document.getElementById(groupId).querySelectorAll('.fbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(groupId).querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filters[key] = btn.dataset.val;
      renderGrid();
    });
  });
}
setupFilterBtns('yearFilter', 'year');
setupFilterBtns('catFilter', 'cat');
setupFilterBtns('originFilter', 'origin');

document.getElementById('sortSelect').addEventListener('change', e => {
  filters.sort = e.target.value;
  renderGrid();
});

let searchTimer;
document.getElementById('searchInput').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    filters.search = e.target.value.trim();
    renderGrid();
  }, 250);
});

function resetFilters() {
  filters = { year:'tumu', cat:'tumu', origin:'tumu', search:'', sort:'reliability' };
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.fbtn[data-val="tumu"]').forEach(b => b.classList.add('active'));
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'reliability';
  renderGrid();
}


/* ─── SAHİBİNDEN URL ─────────────────────────── */
function slugify(str) {
  return str.toLowerCase()
    .replace(/ş/g,'s').replace(/ğ/g,'g').replace(/ı/g,'i')
    .replace(/ö/g,'o').replace(/ü/g,'u').replace(/ç/g,'c')
    .replace(/[''`]/g,'').replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')
    .replace(/-+/g,'-').replace(/^-|-$/g,'');
}

const BRAND_SLUGS = {
  'Toyota':'toyota','Honda':      'https://commons.wikimedia.org/wiki/Special:FilePath/Honda_H_logo.svg','Volkswagen':'volkswagen',
  'BMW':'bmw','Mercedes':   'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_Logo_2010.svg','Opel':'opel',
  'Renault':'renault','Hyundai':'hyundai','Kia':'kia',
  'Peugeot':'peugeot','Nissan':'nissan','Dacia':'dacia',
  'Skoda':'skoda','Seat':'seat','Volvo':'volvo',
  'Fiat':'fiat','Tofaş':'tofas','Togg':'togg',
};
const MODEL_SLUGS = {
  'Land Cruiser':'land-cruiser','C-HR':'c-hr',"Cee'd":'ceed',
  'RAV4':'rav4','Şahin':'sahin','Doğan':'dogan','Kartal':'kartal',
};

function sahibindenURL(c) {
  const brand = BRAND_SLUGS[c.brand] || slugify(c.brand);
  const model = MODEL_SLUGS[c.model] || slugify(c.model);
  if (c.cat === 'suv') return `https://www.sahibinden.com/arazi-suv-pickup-${brand}-${model}`;
  return `https://www.sahibinden.com/${brand}-${model}`;
}

/* ─── MARKA LOGO URL HARİTASI (Wikimedia Commons SVG) ─── */
const BRAND_LOGOS = {
  'Toyota':     'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_EU.svg',
  'Honda':      'https://commons.wikimedia.org/wiki/Special:FilePath/Honda_H_logo.svg',
  'Volkswagen': 'https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_logo_2019.svg',
  'BMW':        'https://commons.wikimedia.org/wiki/Special:FilePath/BMW.svg',
  'Mercedes':   'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_Logo_2010.svg',
  'Opel':       'https://commons.wikimedia.org/wiki/Special:FilePath/Opel_2021.svg',
  'Renault':    'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_2021_Text_Logo.svg',
  'Hyundai':    'https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Motor_Company_logo.svg',
  'Kia':        'https://commons.wikimedia.org/wiki/Special:FilePath/Kia_logo.svg',
  'Peugeot':    'https://commons.wikimedia.org/wiki/Special:FilePath/Peugeot_logo.svg',
  'Nissan':     'https://commons.wikimedia.org/wiki/Special:FilePath/Nissan_2020_logo.svg',
  'Dacia':      'https://commons.wikimedia.org/wiki/Special:FilePath/Dacia_2022.svg',
  'Skoda':      'https://commons.wikimedia.org/wiki/Special:FilePath/Škoda_wordmark.svg',
  'Seat':       'https://commons.wikimedia.org/wiki/Special:FilePath/SEAT_logo.svg',
  'Volvo':      'https://commons.wikimedia.org/wiki/Special:FilePath/Volvo_Cars-Logo.svg',
  'Fiat':       'https://commons.wikimedia.org/wiki/Special:FilePath/Fiat_logo.svg',
  'Tofaş':      'https://commons.wikimedia.org/wiki/Special:FilePath/TOFAŞ_logo_(2019-).svg',
  'Togg':       'https://commons.wikimedia.org/wiki/Special:FilePath/Togg_logo.svg',
};

function logoHTML(brand) {
  const url = BRAND_LOGOS[brand];
  const abbr = brand.substring(0,3).toUpperCase();
  if (!url) return `<div class="rk-logo-placeholder">${abbr}</div>`;
  return `<div class="rk-logo">
    <img src="${url}" alt="${brand} logo"
      onerror="this.parentElement.innerHTML='<div class=\'rk-logo-placeholder\'>${abbr}</div>'">
  </div>`;
}

/* ─── RANKING TABLE ──────────────────────────── */
function renderRanking() {
  const top = [...CARS].sort((a,b) => b.reliability - a.reliability).slice(0, 20);
  const tbl = document.getElementById('rankTable');
  tbl.innerHTML = `
    <thead>
      <tr>
        <th>#</th><th>Logo</th><th>Model</th><th>Genel Skor</th>
        <th>2026 Fiyat Aralığı</th><th>Kısa Not</th>
      </tr>
    </thead>
    <tbody>
      ${top.map((c, i) => {
        const cls = i===0?'gold':i===1?'silver':i===2?'bronze':'';
        return `<tr>
          <td><span class="rk ${cls}">${i+1}</span></td>
          <td>${logoHTML(c.brand)}</td>
          <td><div class="rk-name">${c.brand} ${c.model}</div><div class="rk-sub">${c.year_start}–${c.year_end>2025?'günümüz':c.year_end} · ${c.engine.split('/')[0].trim()}</div></td>
          <td><div class="rk-bar"><div class="rk-track"><div class="rk-fill" style="width:${c.reliability}%"></div></div><span class="rk-score">${c.reliability}</span></div></td>
          <td><div class="rk-price">${fmtPrice(c.price_min, c.price_max)}</div></td>
          <td><span class="rk-note">${c.long_term.substring(0,80)}…</span></td>
        </tr>`;
      }).join('')}
    </tbody>`;
}

/* ─── DARK MODE ──────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let isDark = localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') === null && prefersDark);

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀' : '◑';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
themeToggle.addEventListener('click', () => { isDark = !isDark; applyTheme(); });
applyTheme();

/* ─── SCROLL TO TOP ──────────────────────────── */
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── TICKER DUPLICATE ───────────────────────── */
const ticker = document.querySelector('.ticker-items');
if (ticker) ticker.innerHTML += ticker.innerHTML;

/* ─── INIT ───────────────────────────────────── */
renderGrid();
renderRanking();
