(function () {
  'use strict';

  var dict = {
    fa: {
      pageTitle: 'Sortiva — فایل‌هایت را مرتب کن',
      pageDesc: 'Sortiva فایل‌های ویندوز را بر اساس نوع و تاریخ مرتب می‌کند، تاریخ واقعی عکس و ویدیو را می‌خواند، تکراری‌ها را پیدا می‌کند و می‌تواند خودکار و زمان‌بندی‌شده اجرا شود.',
      skip: 'پرش به محتوا',
      navFeatures: 'قابلیت‌ها',
      navPlans: 'رایگان و Pro',
      navHow: 'چطور کار می‌کند',
      navDownload: 'دانلود',
      navFaq: 'سوالات',
      downloadShort: 'دانلود',
      heroBadgePrefix: 'نسخهٔ',
      heroBadgeSuffix: 'منتشر شد',
      heroTitle: 'فایل‌هایت را مرتب کن. <span class="grad">بی‌نظمی را فراموش کن.</span>',
      heroLede: 'Sortiva پوشه‌های ویندوز را بر اساس نوع و تاریخ مرتب می‌کند، تاریخ واقعی عکس و ویدیو را از خود فایل می‌خواند، تکراری‌ها را پیدا می‌کند و می‌تواند طبق برنامه اجرا شود.',
      heroCta: 'دانلود نسخهٔ ویندوز',
      heroSecondary: 'دیدن قابلیت‌ها',
      heroNote: 'نسخهٔ',
      heroPoint1: 'پلن رایگان بدون انقضا، بدون کارت بانکی',
      heroPoint2: 'پیش‌نمایش و هشدار قبل از جابه‌جایی فایل‌ها',
      heroPoint3: 'تاریخچهٔ کامل با بازگردانی و پوشهٔ شمسی',
      appTag: 'مرتب‌سازی خودکار',
      appReady: 'آماده',
      appPath: 'پوشهٔ دانلود',
      tileImages: 'تصاویر',
      tileDocs: 'اسناد',
      tileVideos: 'ویدیو',
      tileArchives: 'آرشیو',
      tileMore: 'و بقیه',
      appResult: 'مرتب‌سازی با موفقیت انجام شد',
      appUndo: 'بازگردانی',
      chipExif: 'تاریخ واقعی عکس',
      chipUndo: 'همه‌چیز قابل بازگشت',
      chipUndoSub: 'تاریخچه + Undo',
      trust1: 'جابه‌جایی امن با پیش‌نمایش',
      trust2: 'شمسی و میلادی',
      trust3: 'فارسی RTL و English',
      featuresKicker: 'یک مرتب‌کنندهٔ کامل',
      featuresTitle: 'هر چیزی سر جای خودش',
      featuresSub: 'از دانلودهای آشفته و عکس‌های بدون نام تا فایل‌های پراکنده در چند درایو؛ Sortiva قبل از هر جابه‌جایی نشان می‌دهد چه اتفاقی می‌افتد.',
      f1t: 'مرتب‌سازی نوع و تاریخ',
      f1d: 'صفحه‌های Simple، Images، Videos، Documents، Archives، Music و Software با همهٔ حالت‌های گروه‌بندی.',
      f2t: 'تاریخ واقعی عکس و ویدیو',
      f2d: 'خواندن EXIF و تاریخ فیلم‌برداری؛ گروه‌بندی فیلم و سریال، تاریخ عکس یا موقعیت GPS و Artist/Album.',
      f3t: 'پیش‌نمایش و هشدار تداخل',
      f3d: 'قبل از جابه‌جایی ببین چه فایلی کجا می‌رود؛ هشدار تداخل قانون، برخورد مقصد و فایل موجود.',
      f4t: 'خودکار و زمان‌بندی‌شده',
      f4d: 'Auto Organize وقتی اپ باز است و Run Now؛ در Pro اجرای روزانه با Task Scheduler حتی وقتی برنامه بسته است.',
      f5t: 'تاریخچه و بازگردانی',
      f5d: 'هر جابه‌جایی ثبت می‌شود و با یک کلیک برمی‌گردد. خروجی CSV و JSON با حساب رایگان.',
      f6t: 'ظاهر و زبان دلخواه',
      f6d: 'تم روشن، تیره یا سیستم، ۸ رنگ، مقیاس رابط، فارسی راست‌چین و English؛ مسیرهای طولانی و بین‌درایوی.',
      baKicker: 'قبل و بعد',
      baTitle: 'از یک پوشهٔ شلوغ، به یک ساختار روشن',
      baSub: 'نمونهٔ نمایشی از اینکه Sortiva فایل‌های پراکنده را چطور دسته‌بندی می‌کند. قبل از اجرا، مقصد هر فایل را می‌بینید.',
      baBefore: 'قبل',
      baBeforeSub: 'همه‌چیز در یک پوشه',
      baAfter: 'بعد',
      baAfterSub: 'پوشه‌های قابل پیش‌بینی',
      folderImages: 'تصاویر',
      folderDocs: 'اسناد',
      folderVideos: 'ویدیو',
      folderArchives: 'آرشیو',
      plansKicker: 'شفاف، بدون قید پنهان',
      plansTitle: 'رایگان برای همیشه، Pro برای کارهای بیشتر',
      plansSub: 'مرتب‌سازی روزمره در پلن رایگان می‌ماند. قابلیت‌های حرفه‌ای را ۳۰ روز بدون کارت بانکی امتحان می‌کنید.',
      freeTitle: 'Free',
      freeBadge: 'همیشگی · رایگان',
      freeSub: 'یک مرتب‌کنندهٔ کامل برای استفادهٔ روزانه.',
      free1: 'مرتب‌سازی نوع و تاریخ با همهٔ حالت‌های گروه‌بندی',
      free2: 'پوشهٔ شمسی و میلادی، تاریخ واقعی EXIF و ویدیو',
      free3: 'جابه‌جایی بین درایوها با پیشرفت و Cancel، مسیرهای طولانی',
      free4: 'پیش‌نمایش و هشدار تداخل قبل از جابه‌جایی',
      free5: 'Auto Organize تا وقتی اپ باز است + Run Now',
      free6: 'تاریخچهٔ کامل با Undo',
      free7: 'خروجی CSV/JSON با حساب رایگان',
      free8: 'تم روشن/تیره/سیستم، ۸ رنگ، فارسی و English',
      freeCta: 'شروع رایگان',
      proTitle: 'Pro',
      proBadge: '۳۰ روز رایگان',
      proSub: 'همهٔ امکانات Free، به‌علاوهٔ ابزارهای خودکارسازی و پاک‌سازی.',
      pro1: 'قوانین هوشمند و پریست‌های آماده',
      pro2: 'پیدا کردن فایل‌های تکراری',
      pro3: 'اجرای روزانه با Windows Task Scheduler، حتی وقتی اپ بسته است',
      pro4: 'Folder Watch برای پوشه‌های فعال',
      pro5: 'رنگ تاکیدی سفارشی',
      pro6: 'پاک‌سازی نصب‌کننده‌ها و Temp با Recycle Bin',
      pro7: 'ساختارهای پیشرفتهٔ Auto Organize',
      proCta: 'شروع دورهٔ آزمایشی',
      planNote: 'برای فعال‌سازی دورهٔ آزمایشی و خروجی، یک حساب رایگان با ایمیل یا GitHub بسازید. کارت بانکی لازم نیست.',
      plansFoot: 'پس از پایان دورهٔ Pro، اپ متوقف نمی‌شود؛ روی پلن Free ادامه می‌دهد. هر دورهٔ آزمایشی یک‌بار برای هر حساب، ایمیل، هویت GitHub و دستگاه داده می‌شود.',
      howKicker: 'سه قدم ساده',
      howTitle: 'از نصب تا پوشهٔ مرتب',
      howSub: 'هیچ فایلی بدون دیدن پیش‌نمایش جابه‌جا نمی‌شود.',
      step1t: 'نصب کنید',
      step1d: 'فایل Setup را اجرا کنید. تنظیمات، تاریخچه و لایسنس نسخهٔ قبلی حفظ می‌شود.',
      step2t: 'پوشه را انتخاب کنید',
      step2d: 'ساختار دلخواه را ببین، هشدارها را بررسی کن و مقصد هر فایل را قبل از تأیید بدان.',
      step3t: 'مرتب کنید',
      step3d: 'یک‌بار اجرا کن یا خودکار بساز؛ اگر پشیمان شدی، با Undo همه‌چیز برمی‌گردد.',
      downloadKicker: 'نصب روی ویندوز',
      downloadTitle: 'Sortiva را نصب کنید',
      downloadSub: 'نصب‌کننده نسخهٔ قبلی را در جای خود ارتقا می‌دهد. بعد از نصب، اگر بخواهید از قابلیت‌های Pro استفاده کنید، حساب رایگان بسازید و دورهٔ ۳۰ روزه را شروع کنید.',
      downloadSetup: 'دانلود Setup',
      downloadReleases: 'صفحهٔ انتشارها',
      downloadReadme: 'راهنمای کامل و پلن رایگان',
      accountNote: 'مرتب‌سازی رایگان است. حساب رایگان فقط برای خروجی CSV/JSON و فعال‌سازی ۳۰ روز Pro لازم می‌شود.',
      reqTitle: 'نیازمندی‌ها',
      reqWin: 'ویندوز',
      reqSize: 'حجم نصب‌کننده',
      reqLicense: 'مجوز',
      reqVersion: 'نسخه',
      shaTitle: 'SHA-256 نصب‌کننده',
      downloadNote: 'Sortiva روی خود ویندوز اجرا می‌شود؛ فایل‌ها از دستگاه شما بیرون نمی‌روند.',
      faqKicker: 'پرسش‌های رایج',
      faqTitle: 'قبل از مرتب‌کردن بدانید',
      q1: 'آیا Sortiva رایگان است؟',
      a1: 'بله. پلن Free هیچ انقضایی ندارد و مرتب‌سازی نوع و تاریخ، پیش‌نمایش، Auto Organize و تاریخچه با Undo را شامل می‌شود. قابلیت‌های Pro را ۳۰ روز رایگان امتحان می‌کنید و بعد از آن اپ روی Free ادامه می‌دهد.',
      q2: 'برای حساب کاربری باید پول بدهم؟',
      a2: 'نه. حساب رایگان با ایمیل یا GitHub ساخته می‌شود و کارت بانکی نمی‌خواهد. این حساب برای خروجی CSV/JSON و شروع دورهٔ آزمایشی Pro است؛ خودِ مرتب‌سازی رایگان است.',
      q3: 'چه فایل‌هایی را مرتب می‌کند؟',
      a3: 'تصاویر، ویدیو، اسناد، آرشیو، موسیقی و نرم‌افزار. عکس و ویدیو با تاریخ واقعی EXIF یا فیلم‌برداری گروه‌بندی می‌شوند و می‌توانید پوشهٔ شمسی یا میلادی بسازید.',
      q4: 'آیا فایل‌ها حذف یا خراب می‌شوند؟',
      a4: 'مرتب‌سازی جابه‌جایی است، نه حذف. قبل از اجرا پیش‌نمایش و هشدار برخورد مقصد را می‌بینید و همهٔ جابه‌جایی‌ها با Undo برمی‌گردند. پاک‌سازی نصب‌کننده و Temp در Pro از Recycle Bin استفاده می‌کند.',
      q5: 'برنامه باید همیشه باز باشد؟',
      a5: 'در پلن Free، Auto Organize تا وقتی اپ باز است کار می‌کند. در Pro می‌توانید اجرای روزانه را به Windows Task Scheduler بسپارید تا حتی وقتی برنامه بسته است انجام شود.',
      q6: 'تقویم شمسی پشتیبانی می‌شود؟',
      a6: 'بله. پوشه‌ها را می‌توانید بر اساس تاریخ شمسی یا میلادی بسازید و رابط فارسی به‌صورت کامل راست‌چین است.',
      crossKicker: 'از همین سازنده',
      crossTitle: 'SAZORA — کار، پروژه، مالی و اهداف',
      crossSub: 'یک دستیار آفلاین ویندوز برای کارهای روزانه، پروژه‌های ساختمانی، کارگران، مالی، اهداف و کتاب‌خوانی.',
      crossCta: 'دیدن سایت SAZORA',
      footerTag: 'فایل‌هایت را مرتب کن. بی‌نظمی را فراموش کن.',
      footerNote: 'ساخته‌شده برای ویندوز ۱۰ و ۱۱ · مجوز MIT',
      footerLinks: 'لینک‌ها',
      footerReleases: 'انتشارها',
      footerNotes: 'راهنما و پلن‌ها',
      footerSazora: 'SAZORA',
      footerSupport: 'حمایت',
      footerDonate: 'صفحهٔ دونیت',
      footerAuthor: 'سایر پروژه‌ها',
      footerLicense: 'مجوز MIT',
      footerRights: 'همهٔ حقوق محفوظ است',
      footerMade: 'ساختهٔ Omid Masomi',
      langLabel: 'Switch to English'
    },
    en: {
      pageTitle: 'Sortiva — Organize your files',
      pageDesc: 'Sortiva organizes Windows files by type and date, reads the real capture date of photos and videos, finds duplicates and can run on a schedule.',
      skip: 'Skip to content',
      navFeatures: 'Features',
      navPlans: 'Free & Pro',
      navHow: 'How it works',
      navDownload: 'Download',
      navFaq: 'FAQ',
      downloadShort: 'Download',
      heroBadgePrefix: 'Version',
      heroBadgeSuffix: 'is out',
      heroTitle: 'Your files. <span class="grad">Perfectly organized.</span>',
      heroLede: 'Sortiva organizes Windows folders by type and date, reads the real capture date of photos and videos, finds duplicates, and can run on a schedule.',
      heroCta: 'Download for Windows',
      heroSecondary: 'See features',
      heroNote: 'Version',
      heroPoint1: 'Free plan with no expiry, no credit card',
      heroPoint2: 'Preview and conflict warnings before anything moves',
      heroPoint3: 'Full history with Undo and Jalali folders',
      appTag: 'Auto organize',
      appReady: 'Ready',
      appPath: 'Downloads folder',
      tileImages: 'Images',
      tileDocs: 'Documents',
      tileVideos: 'Videos',
      tileArchives: 'Archives',
      tileMore: 'And more',
      appResult: 'Organize completed',
      appUndo: 'Undo',
      chipExif: 'Real photo date',
      chipUndo: 'Fully reversible',
      chipUndoSub: 'History + Undo',
      trust1: 'Safe moves with preview',
      trust2: 'Jalali & Gregorian',
      trust3: 'Persian RTL & English',
      featuresKicker: 'A complete organizer',
      featuresTitle: 'Everything in its place',
      featuresSub: 'From messy downloads and unnamed photos to files scattered across drives; Sortiva shows you exactly what will happen before anything moves.',
      f1t: 'Type and date sorting',
      f1d: 'Simple, Images, Videos, Documents, Archives, Music and Software screens with every grouping option.',
      f2t: 'Real photo and video dates',
      f2d: 'Reads EXIF and capture dates; movies and series grouping, photo-date or GPS folders, Artist/Album.',
      f3t: 'Preview and conflict warnings',
      f3d: 'See where every file goes before the move; rule-overlap, destination collision and existing-file warnings.',
      f4t: 'Automatic and scheduled',
      f4d: 'Auto Organize while the app is open and Run Now; Pro adds daily runs with Task Scheduler, even when the app is closed.',
      f5t: 'History and undo',
      f5d: 'Every move is logged and reversible in one click. CSV and JSON export with a free account.',
      f6t: 'Your look and language',
      f6d: 'Light, dark or system theme, 8 accent colors, UI scale, Persian RTL and English; long paths and cross-drive moves.',
      baKicker: 'Before & after',
      baTitle: 'From a messy folder to a clear structure',
      baSub: 'An illustrative example of how Sortiva groups scattered files. You see every destination before you run it.',
      baBefore: 'Before',
      baBeforeSub: 'Everything in one folder',
      baAfter: 'After',
      baAfterSub: 'Predictable folders',
      folderImages: 'Images',
      folderDocs: 'Documents',
      folderVideos: 'Videos',
      folderArchives: 'Archives',
      plansKicker: 'Clear, no hidden strings',
      plansTitle: 'Free forever, Pro for more',
      plansSub: 'Everyday organizing stays free. Try the pro tools for 30 days with no credit card.',
      freeTitle: 'Free',
      freeBadge: 'Forever · $0',
      freeSub: 'A complete organizer for daily use.',
      free1: 'Type and date sorting with every grouping option',
      free2: 'Jalali and Gregorian folders, real EXIF and video dates',
      free3: 'Cross-drive moves with progress and cancel, long path support',
      free4: 'Preview and conflict warnings before moving',
      free5: 'Auto Organize while the app is open + Run Now',
      free6: 'Full history with Undo',
      free7: 'CSV/JSON export with a free account',
      free8: 'Light/dark/system theme, 8 accents, Persian and English',
      freeCta: 'Start free',
      proTitle: 'Pro',
      proBadge: '30 days free',
      proSub: 'Everything in Free, plus automation and cleanup tools.',
      pro1: 'Smart rules and ready-made presets',
      pro2: 'Duplicate file finder',
      pro3: 'Daily runs with Windows Task Scheduler, even when the app is closed',
      pro4: 'Folder Watch for active folders',
      pro5: 'Custom accent color',
      pro6: 'Installer and Temp cleanup via Recycle Bin',
      pro7: 'Advanced Auto Organize structures',
      proCta: 'Start free trial',
      planNote: 'Create a free account with email or GitHub to start the trial and export. No credit card required.',
      plansFoot: 'After the Pro trial ends, the app keeps working on Free. The trial is granted once per account, email, GitHub identity and machine.',
      howKicker: 'Three simple steps',
      howTitle: 'From install to organized',
      howSub: 'No file moves without a preview.',
      step1t: 'Install',
      step1d: 'Run the Setup. Settings, history and license from the previous install are kept.',
      step2t: 'Pick a folder',
      step2d: 'Inspect the structure, review warnings and know every destination before you confirm.',
      step3t: 'Organize',
      step3d: 'Run once or automate it; if you change your mind, Undo restores everything.',
      downloadKicker: 'Windows installer',
      downloadTitle: 'Install Sortiva',
      downloadSub: 'The installer upgrades the previous version in place. To use Pro features, create a free account and start the 30-day trial.',
      downloadSetup: 'Download Setup',
      downloadReleases: 'All releases',
      downloadReadme: 'Full guide and plans',
      accountNote: 'Organizing is free. A free account is only needed for CSV/JSON export and the 30-day Pro trial.',
      reqTitle: 'Requirements',
      reqWin: 'Windows',
      reqSize: 'Installer size',
      reqLicense: 'License',
      reqVersion: 'Version',
      shaTitle: 'Installer SHA-256',
      downloadNote: 'Sortiva runs locally on Windows; your files never leave your machine.',
      faqKicker: 'Common questions',
      faqTitle: 'Know before you organize',
      q1: 'Is Sortiva free?',
      a1: 'Yes. The Free plan never expires and includes type and date sorting, preview, Auto Organize and history with Undo. You can try Pro features for 30 days, then the app continues on Free.',
      q2: 'Do I have to pay for an account?',
      a2: 'No. A free account with email or GitHub requires no credit card. It is used for CSV/JSON export and starting the Pro trial; organizing itself is free.',
      q3: 'Which files can it organize?',
      a3: 'Images, videos, documents, archives, music and software. Photos and videos are grouped by real EXIF or capture dates, and you can build Jalali or Gregorian folders.',
      q4: 'Will my files be deleted or damaged?',
      a4: 'Organizing is a move, not a delete. You see a preview and destination-collision warnings before running, and every move is reversible with Undo. Pro cleanup uses the Recycle Bin.',
      q5: 'Does the app have to stay open?',
      a5: 'On Free, Auto Organize works while the app is open. On Pro you can schedule daily runs with Windows Task Scheduler so it works even when the app is closed.',
      q6: 'Is the Jalali calendar supported?',
      a6: 'Yes. You can build folders by Jalali or Gregorian dates, and the Persian interface is fully right-to-left.',
      crossKicker: 'From the same maker',
      crossTitle: 'SAZORA — work, projects, finance and goals',
      crossSub: 'An offline Windows companion for daily tasks, construction projects, workers, finance, goals and reading.',
      crossCta: 'Visit SAZORA',
      footerTag: 'Your files. Perfectly organized.',
      footerNote: 'Built for Windows 10 and 11 · MIT License',
      footerLinks: 'Links',
      footerReleases: 'Releases',
      footerNotes: 'Guide & plans',
      footerSazora: 'SAZORA',
      footerSupport: 'Support',
      footerDonate: 'Donate page',
      footerAuthor: 'More projects',
      footerLicense: 'MIT License',
      footerRights: 'All rights reserved',
      footerMade: 'Made by Omid Masomi',
      langLabel: 'تغییر به فارسی'
    }
  };

  var state = {
    lang: 'fa',
    version: '4.11.2',
    size: 18129188
  };

  var API_URL = 'https://api.github.com/repos/omidmasumi740-dev/sortiva/releases/latest';
  var CACHE_KEY = 'sortiva-release-v1';
  var CACHE_TTL = 6 * 60 * 60 * 1000;

  function toFa(value) {
    return String(value).replace(/[0-9]/g, function (d) {
      return '۰۱۲۳۴۵۶۷۸۹'[+d];
    });
  }

  function formatVersion(v) {
    if (!v) return '';
    v = String(v).replace(/^v/i, '');
    return state.lang === 'fa' ? toFa(v).replace(/\./g, '٫') : v;
  }

  function formatSize(bytes) {
    var mb = (bytes / 1048576).toFixed(1);
    return state.lang === 'fa' ? toFa(mb).replace('.', '٫') + ' مگابایت' : mb + ' MB';
  }

  function renderNumbers() {
    document.querySelectorAll('[data-version]').forEach(function (el) {
      el.textContent = formatVersion(state.version);
    });
    document.querySelectorAll('[data-size]').forEach(function (el) {
      el.textContent = formatSize(state.size);
    });
  }

  function setMeta(selector, attr, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }

  function applyLanguage(lang) {
    state.lang = lang === 'en' ? 'en' : 'fa';
    var t = dict[state.lang];

    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'fa' ? 'rtl' : 'ltr';
    document.title = t.pageTitle;
    setMeta('meta[name="description"]', 'content', t.pageDesc);
    setMeta('meta[property="og:title"]', 'content', t.pageTitle);
    setMeta('meta[property="og:description"]', 'content', t.pageDesc);
    setMeta('meta[property="og:locale"]', 'content', state.lang === 'fa' ? 'fa_IR' : 'en_US');
    setMeta('meta[name="twitter:title"]', 'content', t.pageTitle);
    setMeta('meta[name="twitter:description"]', 'content', t.pageDesc);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    var toggle = document.getElementById('langToggle');
    if (toggle) toggle.setAttribute('aria-label', t.langLabel);

    try {
      localStorage.setItem('sortiva-lang', state.lang);
    } catch (e) {}

    renderNumbers();
  }

  function applyRelease(release) {
    if (!release || !release.tag_name) return;
    var version = String(release.tag_name).replace(/^v/i, '');
    var setup = null;
    (release.assets || []).forEach(function (asset) {
      if (!setup && /\.exe$/i.test(asset.name) && /setup/i.test(asset.name)) setup = asset;
    });
    if (!setup) {
      (release.assets || []).forEach(function (asset) {
        if (!setup && /\.exe$/i.test(asset.name)) setup = asset;
      });
    }
    state.version = version;
    if (setup) {
      state.size = setup.size;
      document.querySelectorAll('[data-download="sortiva"]').forEach(function (el) {
        el.href = setup.browser_download_url;
      });
    }
    renderNumbers();
  }

  function fromCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var cached = JSON.parse(raw);
      if (!cached || !cached.at || Date.now() - cached.at > CACHE_TTL) return null;
      return cached.release;
    } catch (e) {
      return null;
    }
  }

  function saveCache(release) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), release: release }));
    } catch (e) {}
  }

  function loadLatestRelease() {
    var cached = fromCache();
    if (cached) {
      applyRelease(cached);
      return;
    }
    if (typeof fetch !== 'function') return;

    var controller = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, 5000) : null;

    fetch(API_URL, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller ? controller.signal : undefined
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (release) {
        applyRelease(release);
        saveCache(release);
      })
      .catch(function () {})
      .then(function () {
        if (timer) clearTimeout(timer);
      });
  }

  function initHeader() {
    var header = document.getElementById('siteHeader');
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 8) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initLanguage() {
    var stored = 'fa';
    try { stored = localStorage.getItem('sortiva-lang') === 'en' ? 'en' : 'fa'; } catch (e) {}
    applyLanguage(stored);

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        applyLanguage(state.lang === 'fa' ? 'en' : 'fa');
      });
    }
  }

  function init() {
    initLanguage();
    initHeader();

    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());

    setTimeout(loadLatestRelease, 900);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
