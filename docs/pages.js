(function () {
  'use strict';

  var CFG = window.SITE_CONFIG || {};
  var REPO_URL = 'https://github.com/omidmasumi740-dev/sortiva';

  var common = {
    fa: {
      skip: 'پرش به محتوا',
      navFeatures: 'قابلیت‌ها',
      navPlans: 'رایگان و Pro',
      navHow: 'چطور کار می‌کند',
      navDownload: 'دانلود',
      navFaq: 'سوالات',
      downloadShort: 'دانلود',
      backHome: 'بازگشت به صفحهٔ اصلی',
      footerTag: 'فایل‌هایت را مرتب کن. بی‌نظمی را فراموش کن.',
      footerNote: 'ساخته‌شده برای ویندوز ۱۰ و ۱۱ · مجوز MIT',
      footerLinks: 'لینک‌ها',
      footerReleases: 'انتشارها',
      footerNotes: 'راهنما و پلن‌ها',
      footerPrivacy: 'حریم خصوصی',
      footerContact: 'تماس با ما',
      footerSazora: 'SAZORA',
      footerSupport: 'حمایت',
      footerDonate: 'صفحهٔ دونیت',
      footerAuthor: 'سایر پروژه‌ها',
      footerLicense: 'مجوز MIT',
      footerRights: 'همهٔ حقوق محفوظ است',
      footerMade: 'ساختهٔ Omid Masomi',
      langAria: 'تغییر زبان به انگلیسی'
    },
    en: {
      skip: 'Skip to content',
      navFeatures: 'Features',
      navPlans: 'Free & Pro',
      navHow: 'How it works',
      navDownload: 'Download',
      navFaq: 'FAQ',
      downloadShort: 'Download',
      backHome: 'Back to home',
      footerTag: 'Your files. Perfectly organized.',
      footerNote: 'Built for Windows 10 and 11 · MIT license',
      footerLinks: 'Links',
      footerReleases: 'Releases',
      footerNotes: 'Guide & plans',
      footerPrivacy: 'Privacy',
      footerContact: 'Contact us',
      footerSazora: 'SAZORA',
      footerSupport: 'Support',
      footerDonate: 'Donate page',
      footerAuthor: 'More projects',
      footerLicense: 'MIT license',
      footerRights: 'All rights reserved',
      footerMade: 'Built by Omid Masomi',
      langAria: 'Switch to Persian'
    }
  };

  var pages = {
    privacy: {
      fa: {
        title: 'Sortiva — حریم خصوصی',
        kicker: 'حریم خصوصی',
        heading: 'حریم خصوصی Sortiva',
        lead: 'Sortiva فایل‌ها را روی همان رایانه مرتب می‌کند. این صفحه می‌گوید چه داده‌ای جابه‌جا می‌شود، چه چیزی به اینترنت می‌رود و چه چیزی نمی‌رود.',
        updated: 'آخرین به‌روزرسانی: آبان ۱۴۰۵',
        s1t: 'مرتب‌سازی روی دستگاه شما',
        s1b: 'فایل‌ها و پوشه‌ها روی همان ویندوز شما خوانده و جابه‌جا می‌شوند. Sortiva فایل‌ها، عکس‌ها یا ویدیوها را به سرور خودش آپلود نمی‌کند و محتوای آن‌ها را نمی‌خواند؛ فقط نام، نوع، تاریخ و در صورت نیاز فرادادهٔ عکس (EXIF) را برای مرتب‌سازی می‌خواند.',
        s2t: 'حساب، دورهٔ آزمایشی و پرداخت',
        s2b: 'برای دورهٔ آزمایشی Pro و خرید، یک حساب رایگان با ایمیل یا GitHub لازم است. ایمیل حساب برای ورود، بازیابی رمز و ثبت اینکه دورهٔ آزمایشی هر شخص یک‌بار استفاده شود روی سرور نگه‌داری می‌شود. اطلاعات پرداخت را فروشندهٔ پرداخت پردازش می‌کند و Sortiva شمارهٔ کارت را نمی‌بیند و ذخیره نمی‌کند.',
        s3t: 'اینترنت چه زمانی استفاده می‌شود؟',
        s3b: 'فقط برای بررسی به‌روزرسانی، ورود به حساب و خرید Pro. اگر از حساب استفاده نکنید، مرتب‌سازی کاملاً آفلاین کار می‌کند.',
        s4t: 'این وب‌سایت',
        s4b: 'سایت Sortiva هیچ تبلیغ، ردیاب یا ابزار تحلیلی شخص ثالث ندارد. فونت و تصاویر از همان دامنه بارگذاری می‌شوند. فرم آنلاین نداریم؛ ارتباط از طریق ایمیل است.',
        s5t: 'حذف حساب و داده',
        s5b1: 'برای حذف حساب و اطلاعات مرتبط با دورهٔ آزمایشی، از همان ایمیل حساب به',
        s5b2: 'پیام بدهید. فایل‌های شما روی دستگاهتان هستند و حذف حساب به آن‌ها کاری ندارد.',
        s6t: 'تغییرات این سیاست',
        s6b: 'اگر این سیاست تغییر کند، همین صفحه به‌روزرسانی می‌شود و تاریخ بالای صفحه عوض می‌شود.'
      },
      en: {
        title: 'Sortiva — Privacy',
        kicker: 'Privacy',
        heading: 'Sortiva privacy',
        lead: 'Sortiva organizes files on your own computer. This page explains what data moves, what goes to the internet and what never does.',
        updated: 'Last updated: November 2026',
        s1t: 'Sorting happens on your device',
        s1b: 'Files and folders are read and moved on your own Windows machine. Sortiva does not upload your files, photos or videos to its servers and does not read their contents; it only reads names, types, dates and, where needed, photo metadata (EXIF) to sort them.',
        s2t: 'Account, trial and payment',
        s2b: 'A free account with email or GitHub is needed for the Pro trial and for buying Pro. The account email is kept on the server for sign-in, password recovery and recording that each person’s trial is used once. Payment details are processed by the payment provider; Sortiva never sees or stores your card number.',
        s3t: 'When is the internet used?',
        s3b: 'Only for update checks, account sign-in and buying Pro. If you don’t use an account, sorting works fully offline.',
        s4t: 'This website',
        s4b: 'The Sortiva site has no ads, trackers or third-party analytics. Fonts and images load from the same domain. There is no online form; contact happens by email.',
        s5t: 'Deleting accounts and data',
        s5b1: 'To delete your account and trial-related information, email',
        s5b2: 'from the account’s address. Your files stay on your device and are not affected by deleting the account.',
        s6t: 'Changes to this policy',
        s6b: 'If this policy changes, this page is updated and the date at the top changes.'
      }
    },
    contact: {
      fa: {
        title: 'Sortiva — تماس با ما',
        kicker: 'پشتیبانی',
        heading: 'با Sortiva در تماس باشید',
        lead: 'پرسش، گزارش خطا یا درخواست حذف حساب را از طریق ایمیل بفرستید. فرم آنلاین نداریم و ایمیل شما جای دیگری استفاده نمی‌شود.',
        emailLabel: 'ایمیل پشتیبانی',
        responseLabel: 'زمان پاسخ',
        responseBody: 'معمولاً تا ۲ روز کاری.',
        issuesLabel: 'برای گزارش خطا',
        issuesBody: 'نسخهٔ برنامه (مثلاً ۴٫۱۱٫۳)، نسخهٔ ویندوز و مسیر پوشه‌ای که مرتب می‌کردید را بنویسید. اگر پیام خطایی دیدید، متن آن را هم بفرستید.',
        accountLabel: 'حساب و دورهٔ آزمایشی',
        accountBody: 'اگر ورود یا دورهٔ آزمایشی درست کار نکرد، ایمیل حساب و نسخهٔ برنامه را بنویسید؛ رمز عبور را هرگز در ایمیل نفرستید.',
        home: 'بازگشت به صفحهٔ اصلی'
      },
      en: {
        title: 'Sortiva — Contact us',
        kicker: 'Support',
        heading: 'Get in touch with Sortiva',
        lead: 'Send questions, bug reports or account-deletion requests by email. There is no online form, and your email is not used anywhere else.',
        emailLabel: 'Support email',
        responseLabel: 'Response time',
        responseBody: 'Usually within 2 business days.',
        issuesLabel: 'Reporting a bug',
        issuesBody: 'Include the app version (for example 4.11.3), your Windows version and the folder you were sorting. If you saw an error message, paste its text too.',
        accountLabel: 'Account and trial',
        accountBody: 'If signing in or the trial isn’t working, include the account email and app version; never send your password by email.',
        home: 'Back to home'
      }
    },
    notfound: {
      fa: {
        title: 'Sortiva — صفحه پیدا نشد',
        kicker: 'خطای ۴۰۴',
        heading: 'این صفحه پیدا نشد',
        body: 'نشانی اشتباه است یا صفحه جابه‌جا شده است.',
        home: 'بازگشت به صفحهٔ اصلی',
        download: 'دانلود Sortiva'
      },
      en: {
        title: 'Sortiva — Page not found',
        kicker: 'Error 404',
        heading: 'This page was not found',
        body: 'The address is wrong or the page has moved.',
        home: 'Back to home',
        download: 'Download Sortiva'
      }
    }
  };

  var state = {
    lang: document.documentElement.lang === 'en' ? 'en' : 'fa',
    page: document.body.getAttribute('data-page') || ''
  };

  function mergeDict(lang) {
    var t = {};
    var base = common[lang] || common.fa;
    Object.keys(base).forEach(function (k) { t[k] = base[k]; });
    var extra = (pages[state.page] || {})[lang] || (pages[state.page] || {}).fa || {};
    Object.keys(extra).forEach(function (k) { t[k] = extra[k]; });
    return t;
  }

  function applyLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    var t = mergeDict(lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });

    document.title = t.title || document.title;

    var toggle = document.getElementById('langToggle');
    if (toggle) toggle.setAttribute('aria-label', t.langAria);

    if (CFG.CONTACT_EMAIL) {
      document.querySelectorAll('[data-email]').forEach(function (el) {
        el.setAttribute('href', 'mailto:' + CFG.CONTACT_EMAIL);
        el.textContent = CFG.CONTACT_EMAIL;
      });
    }

    var version = CFG.VERSION || '4.11.3';
    var download = CFG.DOWNLOAD_URL || REPO_URL + '/releases/download/v' + version + '/Sortiva_Setup_V' + version + '.exe';
    document.querySelectorAll('[data-download="sortiva"]').forEach(function (el) {
      el.setAttribute('href', download);
    });
    document.querySelectorAll('[data-version]').forEach(function (el) {
      el.textContent = version;
    });

    try {
      localStorage.setItem('sortiva-lang', lang);
    } catch (e) {}
  }

  function initLanguage() {
    var param = null;
    try {
      param = new URLSearchParams(window.location.search).get('lang');
    } catch (e) {}
    if (param === 'fa' || param === 'en') {
      state.lang = param;
      return;
    }
    try {
      var stored = localStorage.getItem('sortiva-lang');
      if (stored === 'fa' || stored === 'en') state.lang = stored;
    } catch (e) {}
  }

  function syncUrl() {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', state.lang);
      history.replaceState(null, '', url.pathname + '?' + url.searchParams.toString() + url.hash);
    } catch (e) {}
  }

  function init() {
    initLanguage();
    applyLanguage(state.lang);

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        applyLanguage(state.lang === 'fa' ? 'en' : 'fa');
        syncUrl();
      });
    }

    var header = document.getElementById('siteHeader');
    function onScroll() {
      if (header) header.classList.toggle('scrolled', window.scrollY > 12);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  init();
})();
