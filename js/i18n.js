/*!
 * Pristine Accounting — i18n (Bahasa Indonesia / English)
 * Vanilla JS, no dependencies. Indonesian is the default/static language;
 * English is applied at runtime on top of the static ID markup.
 *
 * Usage in HTML:
 *   data-i18n="key"             → sets element.textContent
 *   data-i18n-aria-label="key"  → sets element[aria-label]
 *   data-i18n-title="key"       → sets element[title]
 *   data-i18n-alt="key"         → sets element[alt]
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'pristineLanguage';
  var DEFAULT_LANG = 'id';
  var SUPPORTED_LANGS = ['id', 'en'];

  /* ────────────────────────────────────────────────────────────
     DICTIONARY — "id" and "en" must have identical key sets.
     ──────────────────────────────────────────────────────────── */
  var DICT = {
    id: {
      'meta.title': 'Pristine Accounting | Jasa Akuntansi, Pajak & Konsultasi Bisnis',
      'meta.description': 'Pristine Accounting (KJA Kristi & Rekan) menyediakan jasa akuntansi, perpajakan, dan konsultasi bisnis terpercaya untuk individu dan perusahaan di Indonesia.',

      'brand.logoAlt': 'Logo Pristine Accounting',

      'nav.ariaHome': 'Beranda Pristine Accounting',
      'nav.ariaPrimary': 'Navigasi utama',
      'nav.ariaToggle': 'Buka/tutup navigasi',
      'nav.about': 'Tentang Kami',
      'nav.services': 'Layanan',
      'nav.credentials': 'Kredensial',
      'nav.clients': 'Klien',
      'nav.contact': 'Kontak',
      'nav.cta': 'Konsultasi Sekarang',

      'hero.eyebrow': 'Akuntansi • Perpajakan • Konsultasi Bisnis',
      'hero.h1Line1': 'Akuntansi Andal',
      'hero.h1Line2': 'untuk Keputusan yang Lebih Tepat',
      'hero.lead': 'Jaga keuangan Anda tetap akurat, tertata, dan siap mendukung setiap langkah bisnis.',
      'hero.ctaPrimary': 'Lihat Layanan',
      'hero.ctaOutline': 'Lihat Kredensial',
      'hero.imageAlt': 'Konsultan bisnis berdiskusi dengan klien',
      'hero.statsAriaLabel': 'Keunggulan layanan',
      'hero.stat1Title': 'Akurat',
      'hero.stat1Desc': 'Catatan keuangan yang jelas',
      'hero.stat2Title': 'Tertata',
      'hero.stat2Desc': 'Siap untuk setiap pelaporan',

      'about.imageAlt': 'Tim konsultan meninjau laporan bisnis',
      'about.kicker': 'Tentang Kami',
      'about.h2': 'Layanan akuntansi tepercaya dengan dukungan yang jelas dan praktis.',
      'about.lead': 'Pristine Accounting adalah kantor jasa akuntansi tepercaya yang menyediakan layanan akuntansi, perpajakan, bisnis, dan manajemen untuk individu maupun perusahaan.',
      'about.card1Title': 'Jujur & Tepercaya',
      'about.card1Desc': 'Layanan dengan integritas dan komunikasi yang bertanggung jawab.',
      'about.card2Title': 'Berorientasi Klien',
      'about.card2Desc': 'Bekerja sama erat dengan klien dan tim untuk menjawab kebutuhan bisnis yang nyata.',
      'about.card3Title': 'Selalu Terkini',
      'about.card3Desc': 'Mengikuti perkembangan informasi, teknologi, dan regulasi terkini.',
      'about.card4Title': 'Tepat Waktu',
      'about.card4Desc': 'Disiplin dalam menyelesaikan setiap penugasan tepat waktu.',

      'vision.title': 'Visi',
      'vision.text': 'Menjadi mitra akuntansi tepercaya yang menghadirkan solusi keuangan yang andal, efisien, dan bernilai tambah di Indonesia.',
      'mission.title': 'Misi',
      'mission.item1': 'Menjunjung tinggi etika profesi',
      'mission.item2': 'Bekerja dengan integritas',
      'mission.item3': 'Membangun kepercayaan klien',
      'mission.item4': 'Berkomunikasi secara jelas',
      'mission.item5': 'Mengikuti perkembangan teknologi',
      'mission.item6': 'Menyelesaikan penugasan tepat waktu',

      'services.kicker': 'Layanan Kami',
      'services.h2Line1': '3 Layanan Utama untuk',
      'services.h2Line2': 'Kejelasan Finansial',
      'services.lead': 'Mulai dari pembukuan hingga pelaporan pajak dan konsultasi manajemen bisnis, Pristine Accounting membantu perusahaan menjaga operasional keuangan tetap rapi dan terukur.',
      'services.card1Title': 'Layanan Akuntansi',
      'services.card1Item1': 'Laporan dan analisis keuangan',
      'services.card1Item2': 'Pembukuan umum',
      'services.card1Item3': 'Pencatatan jurnal harian',
      'services.card1Item4': 'Rekonsiliasi bank',
      'services.card1Item5': 'Pengelolaan penggajian',
      'services.card1Item6': 'Dukungan piutang dan utang usaha',
      'services.card2Title': 'Layanan Perpajakan',
      'services.card2Item1': 'Perhitungan PPh 21, 23, 4(2), badan, dan wajib pajak luar negeri',
      'services.card2Item2': 'Jasa pelaporan pajak',
      'services.card2Item3': 'Jasa PPh badan',
      'services.card2Item4': 'Pendampingan sengketa pajak',
      'services.card2Item5': 'Konsultasi SP2DK',
      'services.card2Item6': 'Dokumentasi transfer pricing',
      'services.card3Title': 'Konsultasi Bisnis & Manajemen',
      'services.card3Item1': 'Analisis manajemen risiko',
      'services.card3Item2': 'Penganggaran dan laporan operasional',
      'services.card3Item3': 'Penyusunan Standard Operating Procedure (SOP)',
      'services.card3Item4': 'Strategi produk',
      'services.card3Item5': 'Perancangan proses bisnis',

      'credentials.certGridAriaLabel': 'Sertifikat profesional',
      'credentials.viewCert': '🔍 Lihat Sertifikat',
      'credentials.kicker': 'Sertifikat',
      'credentials.h2': 'Kredensial profesional yang membangun kepercayaan.',
      'credentials.lead': 'Profil perusahaan menampilkan bukti izin praktik dan registrasi profesional, termasuk kredensial AB, KJA, ASEAN CPA, RNA, dan ACPA.',
      'credentials.listAriaLabel': 'Kredensial profesional',

      'clients.kicker': 'Klien',
      'clients.h2': 'Perusahaan yang Mempercayai Pristine Accounting',
      'clients.alt1': 'Kumpulan logo klien 1',
      'clients.alt2': 'Kumpulan logo klien 2',
      'clients.alt3': 'Kumpulan logo klien 3',

      'testimonials.kicker': 'Testimoni',
      'testimonials.h2': 'Apa Kata Klien Kami',
      'testimonials.lead': 'Kisah nyata dari para pelaku bisnis yang mempercayakan pengelolaan keuangan mereka kepada Pristine Accounting.',
      'testi.title': 'Testimoni Klien',
      'testi.sub1': 'Layanan Manajemen Keuangan',
      'testi.sub2': 'Layanan Pajak & Akuntansi',
      'testi.sub3': 'Layanan Konsultasi Bisnis',
      'testi.thumbnailAlt': 'Pratinjau video',

      'contact.kicker': 'Kontak',
      'contact.h2': 'Bangun Fondasi Keuangan yang Lebih Kuat',
      'contact.lead': 'Dapatkan wawasan keuangan yang jelas, sederhanakan proses akuntansi Anda, dan bangun fondasi yang lebih kuat untuk pertumbuhan. Coba layanan kami hari ini dan rasakan perbedaannya.',
      'contact.phoneLabel': 'Telepon / WhatsApp',
      'contact.emailLabel': 'Email',
      'contact.legalAriaLabel': 'Nomor izin dan registrasi',

      'footer.navTitle': 'Navigasi',
      'footer.businessConsulting': 'Konsultasi Bisnis',

      'wa.ariaLabel': 'Chat melalui WhatsApp',
      'wa.ctaLabel': 'Hubungi Kami',

      'certLb.closeAriaLabel': 'Tutup',
      'certLb.zoomOutTitle': 'Perkecil',
      'certLb.zoomInTitle': 'Perbesar',
      'certLb.resetTitle': 'Atur Ulang',
      'certLb.defaultTitle': 'Sertifikat',
      'certLb.hint': 'Scroll untuk zoom · Geser untuk memindah · Klik dua kali untuk mengatur ulang',

      'langSwitch.groupAriaLabel': 'Pilihan bahasa',
      'langSwitch.idAriaLabel': 'Ganti ke Bahasa Indonesia',
      'langSwitch.enAriaLabel': 'Ganti ke Bahasa Inggris'
    },

    en: {
      'meta.title': 'Pristine Accounting | Accounting, Tax & Business Consulting Services',
      'meta.description': 'Pristine Accounting (KJA Kristi & Rekan) provides trusted accounting, tax, and business consulting services for individuals and companies in Indonesia.',

      'brand.logoAlt': 'Pristine Accounting logo',

      'nav.ariaHome': 'Pristine Accounting Home',
      'nav.ariaPrimary': 'Primary navigation',
      'nav.ariaToggle': 'Toggle navigation',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.credentials': 'Credentials',
      'nav.clients': 'Clients',
      'nav.contact': 'Contact',
      'nav.cta': 'Get Consultation',

      'hero.eyebrow': 'Accounting • Tax • Business Consulting',
      'hero.h1Line1': 'Reliable Accounting',
      'hero.h1Line2': 'for Smarter Decisions',
      'hero.lead': 'Keep your finances accurate, organized, and ready to support every business move.',
      'hero.ctaPrimary': 'Explore Services',
      'hero.ctaOutline': 'View Credentials',
      'hero.imageAlt': 'Business consultant meeting with clients',
      'hero.statsAriaLabel': 'Service highlights',
      'hero.stat1Title': 'Accurate',
      'hero.stat1Desc': 'Clear financial records',
      'hero.stat2Title': 'Organized',
      'hero.stat2Desc': 'Ready for every report',

      'about.imageAlt': 'Consulting team reviewing business reports',
      'about.kicker': 'About Us',
      'about.h2': 'Trusted accounting service with clear, practical support.',
      'about.lead': 'Pristine Accounting is a trusted and reliable accounting firm that provides accounting, tax, business, and management services for individuals and companies.',
      'about.card1Title': 'Honest & Trustworthy',
      'about.card1Desc': 'Service with integrity and responsible communication.',
      'about.card2Title': 'Client Focused',
      'about.card2Desc': 'Work closely with clients and teams to solve real business needs.',
      'about.card3Title': 'Up to Date',
      'about.card3Desc': 'Aligned with current information, technology, and regulations.',
      'about.card4Title': 'On Time',
      'about.card4Desc': 'Disciplined service delivery for every assignment.',

      'vision.title': 'Vision',
      'vision.text': 'To become a trusted accounting partner that delivers reliable, efficient, and value-driven financial solutions in Indonesia.',
      'mission.title': 'Mission',
      'mission.item1': 'Uphold professional ethics',
      'mission.item2': 'Work with integrity',
      'mission.item3': 'Build client trust',
      'mission.item4': 'Communicate clearly',
      'mission.item5': 'Stay updated with technology',
      'mission.item6': 'Deliver assignments on time',

      'services.kicker': 'Our Services',
      'services.h2Line1': '3 Core Services for',
      'services.h2Line2': 'Financial Clarity',
      'services.lead': 'From bookkeeping to tax reporting and business management consultation, Pristine Accounting helps companies keep their financial operations clean and measurable.',
      'services.card1Title': 'Accounting Services',
      'services.card1Item1': 'Financial reports and analysis',
      'services.card1Item2': 'General bookkeeping',
      'services.card1Item3': 'Daily journal recording',
      'services.card1Item4': 'Bank reconciliation',
      'services.card1Item5': 'Payroll processing',
      'services.card1Item6': 'AR and AP support',
      'services.card2Title': 'Tax Services',
      'services.card2Item1': 'PPh 21, 23, 4(2), corporate, and foreign taxpayer calculation',
      'services.card2Item2': 'Tax reporting services',
      'services.card2Item3': 'Corporate income tax services',
      'services.card2Item4': 'Tax dispute assistance',
      'services.card2Item5': 'SP2DK consultation',
      'services.card2Item6': 'Transfer pricing documentation',
      'services.card3Title': 'Business & Management Consulting',
      'services.card3Item1': 'Risk management analysis',
      'services.card3Item2': 'Budgeting and operational reports',
      'services.card3Item3': 'Standard Operating Procedure support',
      'services.card3Item4': 'Product strategy',
      'services.card3Item5': 'Business process engineering',

      'credentials.certGridAriaLabel': 'Professional certificates',
      'credentials.viewCert': '🔍 View Certificate',
      'credentials.kicker': 'Certificates',
      'credentials.h2': 'Professional credentials that build trust.',
      'credentials.lead': 'The company profile highlights proof of practice and professional registrations, including AB, KJA, ASEAN CPA, RNA, and ACPA credentials.',
      'credentials.listAriaLabel': 'Professional credentials',

      'clients.kicker': 'Clients',
      'clients.h2': 'Companies That Trusted Pristine Accounting',
      'clients.alt1': 'Selected client logos group 1',
      'clients.alt2': 'Selected client logos group 2',
      'clients.alt3': 'Selected client logos group 3',

      'testimonials.kicker': 'Testimonials',
      'testimonials.h2': 'What Our Clients Say',
      'testimonials.lead': 'Real stories from businesses that have trusted Pristine Accounting to manage their financial operations.',
      'testi.title': 'Client Testimonial',
      'testi.sub1': 'Financial Management Services',
      'testi.sub2': 'Tax & Accounting Services',
      'testi.sub3': 'Business Consulting Services',
      'testi.thumbnailAlt': 'Thumbnail',

      'contact.kicker': 'Contact',
      'contact.h2': 'Build a Stronger Financial Foundation',
      'contact.lead': 'Gain clear financial insights, streamline your accounting, and build a stronger foundation for growth. Try us today and experience the difference.',
      'contact.phoneLabel': 'Phone / WhatsApp',
      'contact.emailLabel': 'Email',
      'contact.legalAriaLabel': 'Legal and registration numbers',

      'footer.navTitle': 'Navigate',
      'footer.businessConsulting': 'Business Consulting',

      'wa.ariaLabel': 'Chat via WhatsApp',
      'wa.ctaLabel': 'Contact Us',

      'certLb.closeAriaLabel': 'Close',
      'certLb.zoomOutTitle': 'Zoom Out',
      'certLb.zoomInTitle': 'Zoom In',
      'certLb.resetTitle': 'Reset',
      'certLb.defaultTitle': 'Certificate',
      'certLb.hint': 'Scroll to zoom · Drag to pan · Double-click to reset',

      'langSwitch.groupAriaLabel': 'Language switch',
      'langSwitch.idAriaLabel': 'Switch to Indonesian',
      'langSwitch.enAriaLabel': 'Switch to English'
    }
  };

  /* ────────────────────────────────────────────────────────────
     Dictionary integrity check — id/en must have identical keys.
     Logs a console error (does not throw) if they diverge, so a
     missing translation is loud in dev but never breaks the page.
     ──────────────────────────────────────────────────────────── */
  function validateDictionary() {
    var idKeys = Object.keys(DICT.id).sort();
    var enKeys = Object.keys(DICT.en).sort();
    var missingInEn = idKeys.filter(function (k) { return enKeys.indexOf(k) === -1; });
    var missingInId = enKeys.filter(function (k) { return idKeys.indexOf(k) === -1; });
    if (missingInEn.length || missingInId.length) {
      if (missingInEn.length) {
        console.error('[i18n] Missing EN translation for keys:', missingInEn);
      }
      if (missingInId.length) {
        console.error('[i18n] Missing ID translation for keys:', missingInId);
      }
      return false;
    }
    return true;
  }

  /* ────────────────────────────────────────────────────────────
     Storage helpers — never let localStorage failures break render.
     ──────────────────────────────────────────────────────────── */
  function readStoredLang() {
    try {
      var v = window.localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED_LANGS.indexOf(v) !== -1) return v;
      return DEFAULT_LANG;
    } catch (err) {
      return DEFAULT_LANG;
    }
  }

  function writeStoredLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* storage unavailable (private mode, quota, etc.) — fail silently */
    }
  }

  /* ────────────────────────────────────────────────────────────
     Translation lookup
     ──────────────────────────────────────────────────────────── */
  var currentLang = DEFAULT_LANG;

  function t(key) {
    var table = DICT[currentLang] || DICT[DEFAULT_LANG];
    if (table && Object.prototype.hasOwnProperty.call(table, key)) {
      return table[key];
    }
    var fallback = DICT[DEFAULT_LANG];
    if (fallback && Object.prototype.hasOwnProperty.call(fallback, key)) {
      return fallback[key];
    }
    return key;
  }

  /* ────────────────────────────────────────────────────────────
     Apply translations to the DOM using textContent/setAttribute
     only — never innerHTML — so markup structure is untouched.
     ──────────────────────────────────────────────────────────── */
  function applyToDom() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      el.setAttribute('aria-label', t(key));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', t(key));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      el.setAttribute('alt', t(key));
    });
  }

  function applyMeta() {
    document.title = t('meta.title');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  }

  function syncSwitchButtons() {
    document.querySelectorAll('.lang-btn[data-lang]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === currentLang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  /* ────────────────────────────────────────────────────────────
     Public: set language, update DOM, persist, notify listeners
     (e.g. the testimonial video renderer) without a page reload.
     ──────────────────────────────────────────────────────────── */
  function setLanguage(lang, opts) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    applyToDom();
    applyMeta();
    syncSwitchButtons();
    var persist = !opts || opts.persist !== false;
    if (persist) writeStoredLang(lang);
    document.dispatchEvent(new CustomEvent('pristine:langchange', { detail: { lang: lang } }));
  }

  function getLanguage() {
    return currentLang;
  }

  function init() {
    validateDictionary();

    document.querySelectorAll('.lang-btn[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang === currentLang) return;
        setLanguage(lang);
      });
    });

    var stored = readStoredLang();
    if (stored !== DEFAULT_LANG) {
      setLanguage(stored, { persist: false });
    } else {
      /* Already correct in the static markup — just sync ARIA state. */
      syncSwitchButtons();
    }
  }

  window.i18n = {
    t: t,
    setLanguage: setLanguage,
    getLanguage: getLanguage
  };

  /* This file is loaded as the last <script> before </body>, so every
     element it needs to translate already exists in the DOM by the time
     this line runs — no need to wait for DOMContentLoaded. */
  init();
})();
