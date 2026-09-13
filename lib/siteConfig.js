export const siteConfig = {
  name: "Çağdaş Şen",
  title: "Çağdaş Şen — Retail · Payments · Technology",
  description:
    "Çağdaş Şen — 23+ yıllık kariyer: Nebim, BulutkasaPOS, Fuodix, Setsis, PAX Türkiye. Perakende teknolojileri, ödeme sistemleri, iş geliştirme.",
  // Kullanıcının kendi belirlediği marka mottosu
  quote:
    "Perakendede gerçek teknoloji, müşterinin işini kolaylaştıran teknolojidir.",
  quoteEn:
    "In retail, real technology is technology that makes the customer's job easier.",
  email: "cagdas.sen@paxturkiye.com",
  linkedin: "https://www.linkedin.com/in/cagdas-sen/",
  instagram: "https://www.instagram.com/cagdas__sen/",
  instagramHandle: "@cagdas__sen",
  whatsapp: "905423964243", // E.164 formatında numara eklenince otomatik aktif olur. Örn: 905xxxxxxxxx
  nav: [
    ["Odak", "#focus", "Focus"],
    ["Projeler", "#projects", "Projects"],
    ["Notlar", "#insights", "Notes"],
    ["Deneyim", "#career", "Experience"],
    ["İletişim", "#contact", "Contact"],
  ],

  // Gerçek, LinkedIn deneyim geçmişinden onaylı marka projeleri (Nebim dönemi, 2011-2017)
  brands: ["KOTON", "LEVIS", "PENTİ", "DAMAT", "BİRKENSTOCK", "NEW BALANCE", "MADAME COCO", "İPEKYOL"],

  // Seçilmiş Çalışmalar — PAX döneminden doğrulanmış, gerçek saha case'leri
  caseStudies: [
    {
      number: "01",
      client: "Beymen",
      category: "Reyonda Ödeme",
      title: "Kasa artık ayrı bir durak değil.",
      description: "Ödeme deneyimini müşterinin bulunduğu noktaya taşıyan mağaza modeli.",
      stat: "2.200+ aktif ödeme noktası",
      tags: ["Reyonda Ödeme", "Android POS", "Retail Experience"],
      visual: "typographic",
      visualClass: "typeBeymen",
    },
    {
      number: "02",
      client: "Kiğılı",
      category: "Entegre Ödeme + Merkezi Yönetim",
      title: "500 cihaz. Merkezi yönetim.",
      description: "Kasa ile terminal arasındaki manuel adımları sadeleştiren operasyon.",
      stat: "500 cihaz · 250+ mağaza",
      tags: ["ERP Integration", "TMS", "Central Management"],
      visual: "image",
      image: "/case-pax-tms-arayuzu.webp",
      imageAlt: "PAX TMS arayüzü",
    },
    {
      number: "03",
      client: "MAD Parfüm",
      category: "Uzaktan Operasyon",
      title: "Teknik destek artık sahaya bağlı değil.",
      description: "Saha bağımlılığını azaltan uzaktan destek ve merkezi yönetim yaklaşımı.",
      stat: "510 terminal",
      tags: ["Remote Operations", "Device Management", "Support", "255 A80 + 255 S210"],
      visual: "typographic",
      visualClass: "typeMad",
    },
  ],

  // LinkedIn Deneyim bölümünden birebir kariyer kronolojisi
  career: [
    {
      company: "PAX Türkiye / PAX Technology (EMEA)",
      role: "Head of PAX Retail Business Solutions",
      period: "Eylül 2024 – Halen",
      short: "Reyonda ödeme ve entegre ödeme sistemlerinde büyüme stratejileri kuruyor.",
      detail:
        "PAX Türkiye'de Retail Business Solutions organizasyonuna liderlik ediyor; reyonda ödeme, kasasız mağazacılık, Android POS, mobil satış ve entegre ödeme sistemlerinde yeni pazar ve iş ortaklığı stratejileri kuruyor.",
      featured: true,
    },
    {
      company: "Setsis Bilişim",
      role: "Satış Müdürü / Satış Direktörü — Yazılım Çözümleri",
      period: "Mayıs 2022 – Eylül 2024",
      short: "Saha teknolojileri ve mobil donanım çözümlerinde satış liderliği yaptı.",
      detail:
        "Saha teknolojileri, mobil donanım (Point Mobile) ve OTVT projeleri; depo, lojistik ve perakende operasyonlarına yönelik el terminali ve mobilite çözümleri.",
      featured: true,
    },
    {
      company: "Fuodix",
      role: "Satış Direktörü",
      period: "Ocak 2024 – Eylül 2024",
      short: "MDM, WMS ve SoftPOS projelerinde satış direktörlüğü yaptı.",
      detail:
        "MDM, WMS, kurumsal mobil uygulamalar ve SoftPOS; THY kontuar operasyonları ve Nebim entegre mobil uygulama projeleri.",
    },
    {
      company: "BulutkasaPOS",
      role: "Director of Business Development",
      period: "Eylül 2017 – Mayıs 2022",
      short: "Bulut tabanlı restoran/işletme yönetim çözümünün büyümesine liderlik etti.",
      detail:
        "Cihaz bağımsız bulut tabanlı restoran/işletme yönetim çözümünün geliştirilmesi ve yaygınlaştırılması; ürünün ilk döneminde bizzat kod yazarak katkı sağladı.",
      featured: true,
    },
    {
      company: "Nebim",
      role: "Senior Key Account Manager",
      period: "Mayıs 2013 – Eylül 2017",
      short: "100'ün üzerinde ERP geçiş projesinde aktif rol aldı.",
      detail:
        "Türkiye'nin önde gelen perakende markalarında 100'ün üzerinde ERP geçiş sürecinde aktif rol aldı — Nebim V3: üretim, depo, finans, mağaza operasyonları, MRP, WMS, entegrasyonlar.",
      featured: true,
    },
    {
      company: "Secretcv.com",
      role: "Key Account Manager",
      period: "Ağustos 2012 – Mayıs 2013",
      short: "Kurumsal satış ve stratejik müşteri yönetimiyle perakendeye ilk adımını attı.",
      detail: "Kurumsal satış ve stratejik müşteri yönetimi; perakende sektörüyle ilk profesyonel teması.",
    },
    {
      company: "Hamoğlu Holding — Ferm Creative",
      role: "Satış ve Pazarlama Yönetmeni",
      period: "Ağustos 2010 – Kasım 2011",
      short: "AVM ve otel gruplarında satış ve pazarlama yönetmenliği yaptı.",
      detail:
        "Maxi AVM, Klassis Resort Hotel ve Klassis Golf & Country Club; 2010 Pekin–Paris Klasik Otomobil Rallisi'nin Türkiye ayağı organizasyonu.",
    },
    {
      company: "Pasha",
      role: "Horeca Kurumsal Satış Yöneticisi",
      period: "Ocak 2006 – Haziran 2010",
      short: "New York–New Jersey bölgesinde HORECA sektöründe kurumsal satış yürüttü.",
      detail: "New York – New Jersey bölgesinde HORECA sektörüne yönelik kurumsal satış ve bölge geliştirme.",
    },
    {
      company: "Datasoft Bilgisayar",
      role: "Kurumsal Satış",
      period: "Şubat 2003 – Haziran 2005",
      short: "Kurumsal teknoloji satışı ve erken dönem dijitalleşme projelerinde yer aldı.",
      detail:
        "Kurumsal teknoloji satışı; okullarda dijital zil, SMS devamsızlık bildirimi gibi erken dönem dijitalleşme uygulamalarının fikir ve saha uygulaması.",
    },
  ],

  education: [
    { school: "Montclair State University", program: "Business Management" },
    { school: "Anadolu Üniversitesi", program: "İktisadi ve İdari Bilimler" },
  ],

  // LinkedIn'den paylaşılan tam Nebim dönemi ERP proje listesi (2011–2017, 59 proje)
  nebimProjects: [
    ["Aker", "ERP İmplementasyon Projesi", "2016–2017"],
    ["Bilcee", "ERP İmplementasyon Projesi", "2016–2017"],
    ["Gizia", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2016–2017"],
    ["Kom", "ERP İmplementasyon Projesi", "2016–2017"],
    ["Tutku Gıda", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2016–2017"],
    ["Hummel", "ERP İmplementasyon Projesi", "2015–2016"],
    ["Kifidis", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2015–2016"],
    ["Koton", "ERP İmplementasyon Projesi", "2015–2016"],
    ["Kristal Cola", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2015–2016"],
    ["Madame Coco", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2015–2016"],
    ["Opmar Optik", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2015–2016"],
    ["Zwilling", "ERP İmplementasyon Projesi", "2015–2016"],
    ["Armine", "ERP İmplementasyon Projesi", "2014–2015"],
    ["Centone", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Chicco", "ERP Geçiş Projesi & SAP Entegrasyonu", "2014–2015"],
    ["Delta Tema", "ERP İmplementasyon Projesi", "2014–2015"],
    ["Faik Sönmez", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Karizma Giyim", "ERP İmplementasyon Projesi", "2014–2015"],
    ["Kervan Tekstil", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Maxmara", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Olka", "ERP İmplementasyon Projesi", "2014–2015"],
    ["Pologarage", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Rebul", "ERP İmplementasyon Projesi", "2014–2015"],
    ["Stefanel", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Teknikel", "ERP İmplementasyon Projesi", "2014–2015"],
    ["Triko Mısırlı", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Vekem - Seleksiyon", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Çiçek İç Giyim", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Çiftgeyik Karaca", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2014–2015"],
    ["Bilge İnoks", "ERP İmplementasyon Projesi", "2013–2014"],
    ["Coquet Aksesuar", "ERP İmplementasyon Projesi", "2013–2014"],
    ["Ender Mağazaları", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2013–2014"],
    ["Forever New", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2013–2014"],
    ["Levis", "ERP Geçiş Projesi & SAP Entegrasyonu", "2013–2014"],
    ["Markapark", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2013–2014"],
    ["Penti", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2013–2014"],
    ["Süvari", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2013–2014"],
    ["Tergan", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2013–2014"],
    ["İpekyol", "CRM ve E-Süreç Entegrasyonları", "2013–2014"],
    ["Ant Teknik", "ERP Geçiş Projesi", "2012–2013"],
    ["Beşiktaş Spor Kulübü", "ERP Geçiş Projesi", "2012–2013"],
    ["Bilsar", "ERP İmplementasyon Projesi", "2012–2013"],
    ["Brooks Brothers", "ERP İmplementasyon Projesi", "2012–2013"],
    ["Dagi", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2012–2013"],
    ["Damat", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2012–2013"],
    ["Ecco", "ERP İmplementasyon Projesi", "2012–2013"],
    ["Goose", "ERP Geçiş Projesi", "2012–2013"],
    ["Hatemoğlu", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2012–2013"],
    ["Hello Baby", "ERP İmplementasyon Projesi", "2012–2013"],
    ["Intersport", "ERP Geçişi & SAP Entegrasyonları", "2012–2013"],
    ["Maya Tekstil", "ERP Geçiş Projesi", "2012–2013"],
    ["Olgarlar", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2012–2013"],
    ["Panço", "ERP İmplementasyon Projesi", "2012–2013"],
    ["Silk and Cashmere", "ERP Geçiş Projesi", "2012–2013"],
    ["Tantitoni", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2012–2013"],
    ["Ten İç Giyim", "ERP Geçiş Projesi", "2012–2013"],
    ["İmza Taşkınırmak", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2012–2013"],
    ["Birkenstock", "ERP İmplementasyon Projesi", "2011–2012"],
    ["New Balance", "ERP Geçişi & E-Fatura, E-Defter Entegrasyonları", "2011–2012"],
  ],

  // Sahadan Notlar — Field Notes + LinkedIn paylaşımları tek section altında birleşti
  notesSection: {
    title: "Sahadan Notlar",
    description: "Projeler, mağazalar, etkinlikler ve perakende üzerine paylaşımlar.",
  },
  fieldNotes: [
    {
      category: "PROJE",
      date: null,
      title: "Sahada Entegrasyonu Görmek Başka",
      summary:
        "İpekyol mağazasında PAX A80'in Nebim altyapısıyla mağaza operasyonuna nasıl entegre çalıştığını bizzat sahada gördüm.",
      ctaLabel: "LinkedIn'de Oku ↗",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7500224457110765568/",
    },
    {
      category: "MAĞAZA",
      date: null,
      title: "Kasasız Mağazacılığı Müşteri Olarak Yaşamak",
      summary:
        "JACK & JONES'ta PAX A6650 ile kasaya hiç yürümeden tamamlanan bir alışveriş — sahada bizzat deneyimlediğim yeni nesil mağazacılık.",
      ctaLabel: "LinkedIn'de Oku ↗",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7402408275767451648/",
    },
    {
      category: "GÖRÜŞ",
      date: "21 MAY",
      title: "Kasa Önündeki Büyük Hesaplaşma: Kiosk mu, İnsan mı?",
      summary: "Self-servis kiosklar ile insan etkileşiminin perakende deneyimindeki dengesi üzerine.",
      ctaLabel: "İçeriği Oku ↗",
      url: "https://perakende.org/kasa-onundeki-buyuk-hesaplasma-kiosk-mu-insan-mi/",
    },
    {
      category: "GÖRÜŞ",
      date: "15 MAY",
      title: "Perakende’de Sessiz Kayıp: Kasa Kuyruğunda Kaçan Satışlar",
      summary: "Kasa kuyruklarının satışa ve müşteri deneyimine etkisi üzerine bir değerlendirme.",
      ctaLabel: "İçeriği Oku ↗",
      url: "https://perakende.org/perakendede-sessiz-kayip-kasa-kuyrugunda-kacan-satislar/",
    },
  ],
};

export function whatsappUrl() {
  if (!siteConfig.whatsapp) return "#contact";
  const msg = encodeURIComponent("Merhaba Çağdaş Bey, web siteniz üzerinden ulaşıyorum.");
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
}
