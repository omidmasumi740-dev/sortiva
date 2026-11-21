(function () {
  'use strict';

  var dict = {
    fa: {
      pageTitle: 'Sortiva — فایل‌هایت را مرتب کن',
      pageDesc: 'Sortiva فایل‌های ویندوز را بر اساس نوع و تاریخ مرتب می‌کند، تاریخ واقعی عکس و ویدیو را می‌خواند، تکراری‌ها را با SHA-256 پیدا می‌کند، نصب‌کننده‌های قدیمی را پاک می‌کند و با Task Scheduler خودکار اجرا می‌شود.',
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
      heroLede: 'Sortiva پوشه‌های ویندوز را بر اساس نوع و تاریخ مرتب می‌کند، تاریخ واقعی عکس و ویدیو را از خود فایل می‌خواند، قبل از هر جابه‌جایی پیش‌نمایش و هشدار می‌دهد و می‌تواند طبق برنامه و حتی با برنامهٔ بسته اجرا شود.',
      heroCta: 'دانلود نسخهٔ ویندوز',
      heroSecondary: 'دیدن قابلیت‌ها',
      heroNote: 'نسخهٔ',
      heroPoint1: 'پلن رایگان بدون انقضا، بدون کارت بانکی',
      heroPoint2: 'پیش‌نمایش و هشدار قبل از جابه‌جایی فایل‌ها',
      heroPoint3: 'تاریخچهٔ کامل با بازگردانی و پوشهٔ شمسی',
      windowHome: 'مرتب‌سازی',
      floatA: '۲۳ فایل → ۳ پوشه',
      floatASub: 'پیش‌نمایش قبل از اجرا',
      floatB: '۴ هشدار تداخل',
      floatBSub: 'قبل از جابه‌جایی می‌بینی',
      trust1: 'جابه‌جایی امن با پیش‌نمایش',
      trust2: 'شمسی و میلادی',
      trust3: 'فارسی RTL و English',
      quoteKicker: 'چرا مهم است',
      quote: 'فایل‌های مرتب یعنی ذهن آزاد برای کارِ مهم‌تر.',
      quoteSub: 'هر بار که دنبال «آن یکی فایل» می‌گردی، چند دقیقه از روزت رفته است. Sortiva روی همان ویندوز خودت کار می‌کند — بدون آپلود، با تاریخ شمسی، و هر جابه‌جایی با یک کلیک برمی‌گردد.',
      featuresKicker: 'تصویر واقعی از خود برنامه',
      featuresTitle: 'هر قابلیت، یک تصویر واقعی با دادهٔ نمونه',
      featuresSub: 'این تصاویر از خود برنامه گرفته شده‌اند. چیزهایی را می‌بینی که در مرتب‌کننده‌های ساده نیست: هشدار تداخل، قوانین، تکراری‌ها، پاک‌سازی و اجرای زمان‌بندی‌شده.',
      sampleNote: 'تصویر واقعی از خود برنامه با دادهٔ نمونه',
      winOrganize: 'Sortiva — مرتب‌سازی',
      winPreview: 'Sortiva — پیش‌نمایش',
      winRules: 'Sortiva — قوانین',
      winDups: 'Sortiva — تکراری‌ها',
      winCleanup: 'Sortiva — پاک‌سازی',
      winAuto: 'Sortiva — خودکارسازی',
      winHistory: 'Sortiva — تاریخچه',
      r1k: 'مرتب‌سازی',
      r1t: 'از پوشهٔ شلوغ تا ساختار روشن',
      r1d: 'نوع، تاریخ، تاریخ واقعی عکس یا نام فایل — ساختار دلخواه را انتخاب کن و همان‌جا ببین هر فایل کجا می‌رود. پوشه‌ها شمسی یا میلادی ساخته می‌شوند.',
      r1a: 'صفحه‌های آماده: تصاویر، ویدیو، اسناد، آرشیو، موسیقی، نرم‌افزار',
      r1b: 'گروه‌بندی فیلم و سریال، GPS، Artist/Album',
      r1c: 'مسیرهای طولانی و جابه‌جایی بین درایوها با Cancel',
      r2k: 'پیش‌نمایش',
      r2t: 'قبل از هر حرکت، همه‌چیز را ببین',
      r2d: 'در همین تصویر: ۲۳ فایل به ۳ پوشه می‌روند و ۴ هشدار «مقصد از قبل وجود دارد» نشان داده شده. چیزی پنهان نمی‌ماند و هیچ فایلی بی‌خبر جابه‌جا نمی‌شود.',
      r2a: 'جدول کامل مبدأ → مقصد برای هر فایل',
      r2b: 'هشدار برخورد مقصد، تداخل قانون و فایل موجود',
      r2c: 'اجرای انتخابی یا لغو پیش از شروع',
      r3k: 'قوانین هوشمند',
      r3t: 'فاکتور، رسید، نصب‌کننده، اسکرین‌شات…',
      r3d: 'یک قانون بساز که با نام، پسوند، Regex یا حجم فایل تطبیق کند و مقصد پویا بگیرد — مثل «اسناد مالی/{سال}». پریست‌های آماده هم هست.',
      r3a: 'تطبیق با پسوند، نام، Regex و حجم',
      r3b: 'مقصد پویا مثل «اسناد مالی/{سال}»',
      r3c: 'پریست‌های فاکتور، نصب‌کننده و اسکرین‌شات',
      r4k: 'تکراری‌ها',
      r4t: 'تکراری‌ها را با محتوا پیدا کن، نه با نام',
      r4d: 'مقایسهٔ بایت‌به‌بایت با SHA-256؛ گروه‌ها با حجم و تعداد و انتخاب هوشمند نسخهٔ اصلی. در این نمونه ۲ گروه و ۴ فایل با ۶٫۱ مگابایت فضای اضافی پیدا شده.',
      r4a: 'مقایسهٔ محتوا با SHA-256، نه فقط نام',
      r4b: 'انتخاب خودکار نسخهٔ اصلی در هر گروه',
      r4c: 'حذف امن به Recycle Bin',
      r5k: 'پاک‌سازی',
      r5t: 'نصب‌کننده‌های قدیمی و Temp را دور بریز',
      r5d: 'Sortiva نسخه‌های قدیمی یک برنامه را می‌شناسد و کنار فایل‌های موقت نشان می‌دهد؛ در این نمونه ۳ فایل و ۱۳۴٫۹ مگابایت قابل آزادسازی — با نگه‌داشتن جدیدترین نسخه.',
      r5a: 'تشخیص نسخه‌های قدیمی یک نصب‌کننده',
      r5b: 'ارسال به Recycle Bin، نه حذف قطعی',
      r5c: 'فیلتر سن فایل برای پوشهٔ Temp',
      r6k: 'خودکارسازی',
      r6t: 'حتی وقتی برنامه بسته است',
      r6d: 'Auto Organize وقتی اپ باز است کار می‌کند؛ در Pro اجرای روزانه به Windows Task Scheduler سپرده می‌شود و ساعت و ساختار را خودت انتخاب می‌کنی.',
      r6a: 'زمان‌بندی روزانه با Windows Task Scheduler',
      r6b: 'Folder Watch برای پوشه‌های فعال',
      r6c: 'شروع با ویندوز و کوچک شدن به Tray',
      r7k: 'تاریخچه',
      r7t: 'هر جابه‌جایی، قابل بازگشت',
      r7d: 'هر اجرا با تعداد فایل، ساختار، تقویم و مبدأها ثبت می‌شود؛ Undo همان جابه‌جایی را برمی‌گرداند — بدون اینکه فایل‌های جدید را هم جابه‌جا کند.',
      r7a: 'بازگردانی کل یک اجرا با یک کلیک',
      r7b: 'جزئیات هر فایل تا مقصد نهایی',
      r7c: 'خروجی CSV/JSON با حساب رایگان',
      m1t: 'ظاهر و زبان دلخواه',
      m1d: 'تم روشن، تیره یا سیستم، ۸ رنگ تاکیدی، مقیاس رابط، فارسی راست‌چین و English.',
      m2t: 'پوشه‌های شمسی',
      m2d: 'تاریخ عکس و پروژه به شمسی؛ پوشه‌های ۱۴۰۵-۰۸ بدون تبدیل دستی، یا میلادی اگر بخواهی.',
      m3t: 'حساب اختیاری',
      m3d: 'مرتب‌سازی و Undo بدون حساب؛ حساب رایگان فقط برای خروجی CSV/JSON و شروع ۳۰ روز Pro.',
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
      step1t: 'نصب کن',
      step1d: 'فایل Setup را اجرا کنید. تنظیمات، تاریخچه و لایسنس نسخهٔ قبلی حفظ می‌شود.',
      step2t: 'پوشه را انتخاب کن',
      step2d: 'ساختار دلخواه را ببین، هشدارها را بررسی کن و مقصد هر فایل را قبل از تأیید بدان.',
      step3t: 'مرتب کن',
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
      crossTitle: 'SAZORA — پروژهٔ ساختمانی، کارگر و مالی',
      crossSub: 'مدیریت قرارداد، مراحل اجرا با تاریخ شمسی، کارکرد و مزد کارگر، صورت‌وضعیت متراژ و مالی — آفلاین روی ویندوز.',
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
      pageDesc: 'Sortiva organizes Windows files by type and date, reads real photo and video dates, warns before every move, finds duplicates with SHA-256, cleans old installers and runs on a Task Scheduler schedule.',
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
      heroLede: 'Sortiva organizes Windows folders by type and date, reads the real capture date of photos and videos, shows a preview with warnings before anything moves, and can run on a schedule — even with the app closed.',
      heroCta: 'Download for Windows',
      heroSecondary: 'See features',
      heroNote: 'Version',
      heroPoint1: 'Free plan with no expiry, no credit card',
      heroPoint2: 'Preview and conflict warnings before anything moves',
      heroPoint3: 'Full history with Undo and Jalali folders',
      windowHome: 'Organize',
      floatA: '23 files → 3 folders',
      floatASub: 'Preview before running',
      floatB: '4 conflict warnings',
      floatBSub: 'You see them before the move',
      trust1: 'Safe moves with preview',
      trust2: 'Jalali & Gregorian',
      trust3: 'Persian RTL & English',
      quoteKicker: 'Why it matters',
      quote: 'Organized files mean a mind free for the work that matters.',
      quoteSub: 'Every time you hunt for “that one file”, minutes leak out of your day. Sortiva runs on your own Windows machine — no uploads, Jalali dates, and every move is one click away from being undone.',
      featuresKicker: 'Real screenshots from the app',
      featuresTitle: 'Every feature, shown with real sample data',
      featuresSub: 'These screenshots come from the app itself. You can see what simple organizers do not have: conflict warnings, rules, duplicates, cleanup and scheduled runs.',
      sampleNote: 'A real screenshot from the app with sample data',
      winOrganize: 'Sortiva — Organize',
      winPreview: 'Sortiva — Preview',
      winRules: 'Sortiva — Rules',
      winDups: 'Sortiva — Duplicates',
      winCleanup: 'Sortiva — Cleanup',
      winAuto: 'Sortiva — Automation',
      winHistory: 'Sortiva — History',
      r1k: 'Organizing',
      r1t: 'From a messy folder to a clear structure',
      r1d: 'Type, date, real photo date or filename — pick the structure and see exactly where each file goes. Folders can be Jalali or Gregorian.',
      r1a: 'Ready screens: Images, Videos, Documents, Archives, Music, Software',
      r1b: 'Movies and series grouping, GPS, Artist/Album',
      r1c: 'Long paths and cross-drive moves with Cancel',
      r2k: 'Preview',
      r2t: 'See everything before anything moves',
      r2d: 'In this screenshot 23 files are going to 3 folders, with 4 “target already exists” warnings shown up front. Nothing is hidden and no file moves without you knowing.',
      r2a: 'A full source → destination table for every file',
      r2b: 'Destination collision, rule overlap and existing-file warnings',
      r2c: 'Run selected rows or cancel before it starts',
      r3k: 'Smart rules',
      r3t: 'Invoices, receipts, installers, screenshots…',
      r3d: 'Create a rule that matches on name, extension, regex or file size and use a dynamic destination such as “Finance/{year}”. Ready-made presets included.',
      r3a: 'Match by extension, name, regex and size',
      r3b: 'Dynamic destinations like “Finance/{year}”',
      r3c: 'Presets for invoices, installers and screenshots',
      r4k: 'Duplicates',
      r4t: 'Find duplicates by content, not by name',
      r4d: 'Byte-for-byte comparison with SHA-256; groups show size and count, and the original is picked smartly. This sample found 2 groups and 4 files with 6.1 MB of extra space.',
      r4a: 'SHA-256 content comparison, not just filenames',
      r4b: 'Automatic original selection in each group',
      r4c: 'Safe removal via the Recycle Bin',
      r5k: 'Cleanup',
      r5t: 'Clear old installers and Temp files',
      r5d: 'Sortiva recognises older versions of the same installer and lists them next to temp files; this sample shows 3 files and 134.9 MB to reclaim — while keeping the newest version.',
      r5a: 'Detects older versions of the same installer',
      r5b: 'Sends to the Recycle Bin, never a hard delete',
      r5c: 'Age filter for Temp cleanup',
      r6k: 'Automation',
      r6t: 'Even when the app is closed',
      r6d: 'Auto Organize works while the app is open; Pro hands daily runs to Windows Task Scheduler, with the time and structure you choose.',
      r6a: 'Daily scheduling with Windows Task Scheduler',
      r6b: 'Folder Watch for active folders',
      r6c: 'Start with Windows and minimize to the tray',
      r7k: 'History',
      r7t: 'Every move can be undone',
      r7d: 'Each run is logged with file count, structure, calendar and sources; Undo reverses that exact run — without dragging newer files along.',
      r7a: 'Undo a whole run in one click',
      r7b: 'Per-file detail down to the final destination',
      r7c: 'CSV/JSON export with a free account',
      m1t: 'Your look and language',
      m1d: 'Light, dark or system theme, 8 accent colors, UI scale, Persian RTL and English.',
      m2t: 'Jalali folders',
      m2d: 'Photo and project dates in Jalali; 1405-08 folders with no manual conversion — or Gregorian if you prefer.',
      m3t: 'Optional account',
      m3d: 'Organizing and Undo work without an account; a free account is only for CSV/JSON export and the 30-day Pro trial.',
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
      crossTitle: 'SAZORA — construction projects, workers and finance',
      crossSub: 'Contracts, build stages with Jalali dates, worker attendance and wages, measured statements and finance — offline on Windows.',
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

  var SHOTS = {
    fa: {
      home: 'sortiva-fa-home.png',
      organize: 'sortiva-fa-organize.png',
      preview: 'sortiva-fa-preview.png',
      rules: 'sortiva-fa-rules.png',
      duplicates: 'sortiva-fa-duplicates.png',
      cleanup: 'sortiva-fa-cleanup.png',
      auto: 'sortiva-fa-auto.png',
      history: 'sortiva-fa-history.png'
    },
    en: {
      home: 'sortiva-en-home.png',
      organize: 'sortiva-en-organize.png',
      preview: 'sortiva-en-preview.png',
      rules: 'sortiva-en-rules.png',
      duplicates: 'sortiva-en-duplicates.png',
      cleanup: 'sortiva-en-cleanup.png',
      auto: 'sortiva-en-auto.png',
      history: 'sortiva-en-history.png'
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

  function applyScreenshots() {
    var map = SHOTS[state.lang] || SHOTS.fa;
    document.querySelectorAll('img[data-shot]').forEach(function (img) {
      var file = map[img.getAttribute('data-shot')];
      if (!file) return;
      var next = 'assets/img/shots/' + file;
      if (img.getAttribute('src') !== next) img.setAttribute('src', next);
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

    applyScreenshots();

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
