(function () {
  'use strict';

  var dict = {
    fa: {
      pageTitle: 'Sortiva — فایل‌هایت را مرتب کن',
      pageDesc: 'Sortiva فایل‌های ویندوز را بر اساس نوع و تاریخ مرتب می‌کند، تاریخ واقعی عکس و ویدیو را می‌خواند، تکراری‌ها را با SHA-256 پیدا می‌کند، نصب‌کننده‌های قدیمی را پاک می‌کند و با Task Scheduler خودکار اجرا می‌شود.',
      skip: 'پرش به محتوا',
      navFeatures: 'قابلیت‌ها',
      navPlans: 'رایگان',
      navHow: 'چطور کار می‌کند',
      navDownload: 'دانلود',
      navFaq: 'سوالات',
      downloadShort: 'دانلود',
      heroBadgePrefix: 'نسخهٔ',
      heroBadgeSuffix: 'منتشر شد',
      heroTitleA: 'فایل‌هایت را مرتب کن.',
      heroTitleB: 'بی‌نظمی را فراموش کن.',
      heroLede: 'Sortiva پوشه‌های ویندوز را بر اساس نوع و تاریخ مرتب می‌کند، تاریخ واقعی عکس و ویدیو را از خود فایل می‌خواند، قبل از هر جابه‌جایی پیش‌نمایش و هشدار می‌دهد و می‌تواند طبق برنامه و حتی با برنامهٔ بسته اجرا شود.',
      heroCta: 'دانلود نسخهٔ ویندوز',
      heroSecondary: 'دیدن قابلیت‌ها',
      heroNote: 'نسخهٔ',
      heroPoint1: 'کاملاً رایگان — بدون لایسنس و بدون حساب',
      heroPoint2: 'پیش‌نمایش و هشدار قبل از جابه‌جایی فایل‌ها',
      heroPoint3: 'تاریخچهٔ کامل با بازگردانی و پوشهٔ شمسی',
      heroPricePrefix: 'کاملاً رایگان · بدون لایسنس',
      heroPriceSuffix: '',
      heroPriceLink: '',
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
      r6d: 'زمان‌بندی روزانه با Windows Task Scheduler و رصد پوشه رایگان است؛ ساعت و ساختار را خودت انتخاب می‌کنی.',
      r6a: 'زمان‌بندی روزانه با Windows Task Scheduler',
      r6b: 'Folder Watch برای پوشه‌های فعال',
      r6c: 'شروع با ویندوز و کوچک شدن به Tray',
      r7k: 'تاریخچه',
      r7t: 'هر جابه‌جایی، قابل بازگشت',
      r7d: 'هر اجرا با تعداد فایل، ساختار، تقویم و مبدأها ثبت می‌شود؛ Undo همان جابه‌جایی را برمی‌گرداند — بدون اینکه فایل‌های جدید را هم جابه‌جا کند.',
      r7a: 'بازگردانی کل یک اجرا با یک کلیک',
      r7b: 'جزئیات هر فایل تا مقصد نهایی',
      r7c: 'خروجی CSV/JSON',
      m1t: 'ظاهر و زبان دلخواه',
      m1d: 'تم روشن، تیره یا سیستم، ۸ رنگ تاکیدی، مقیاس رابط، فارسی راست‌چین و English.',
      m2t: 'پوشه‌های شمسی',
      m2d: 'تاریخ عکس و پروژه به شمسی؛ پوشه‌های ۱۴۰۵-۰۸ بدون تبدیل دستی، یا میلادی اگر بخواهی.',
      m3t: 'حساب اختیاری',
      m3d: 'حساب اختیاری است؛ همهٔ امکانات بدون آن باز است.',
      plansKicker: 'رایگان برای همیشه',
      plansTitle: 'همهٔ امکانات، بدون لایسنس',
      plansSub: 'مرتب‌سازی، قوانین، تکراری‌ها، زمان‌بندی، رصد پوشه، پاک‌سازی و خروجی — همه رایگان و بدون نیاز به حساب.',
      freeTitle: 'Free',
      freeBadge: 'همیشگی · کاملاً رایگان',
      freeSub: 'همهٔ امکانات Sortiva، بدون لایسنس و بدون دورهٔ آزمایشی.',
      free1: 'مرتب‌سازی نوع و تاریخ با همهٔ حالت‌های گروه‌بندی',
      free2: 'پوشهٔ شمسی و میلادی، تاریخ واقعی EXIF و ویدیو',
      free3: 'جابه‌جایی بین درایوها با پیشرفت و Cancel، مسیرهای طولانی',
      free4: 'پیش‌نمایش و هشدار تداخل قبل از جابه‌جایی',
      free5: 'Auto Organize با زمان‌بندی، Run Now و Windows Task Scheduler',
      free6: 'Folder Watch برای پوشه‌های فعال',
      free7: 'قوانین هوشمند و پریست‌های آماده',
      free8: 'پیدا کردن فایل‌های تکراری با SHA-256',
      free9: 'پاک‌سازی نصب‌کننده‌ها و Temp با Recycle Bin',
      free10: 'تاریخچهٔ کامل با Undo و خروجی CSV/JSON',
      free11: 'تم روشن/تیره/سیستم، رنگ تاکیدی دلخواه، فارسی و English',
      freeCta: 'دانلود نسخهٔ ویندوز',
      planNote: 'حساب کاربری اختیاری است و هیچ قابلیتی به آن وابسته نیست.',
      plansFoot: 'بدون لایسنس، بدون کارت بانکی و بدون دورهٔ آزمایشی — برای همیشه رایگان.',
      howKicker: 'سه قدم ساده',
      howTitle: 'از نصب تا پوشهٔ مرتب',
      howSub: 'هیچ فایلی بدون دیدن پیش‌نمایش جابه‌جا نمی‌شود.',
      step1t: 'نصب کن',
      step1d: 'فایل Setup را اجرا کنید. تنظیمات، تاریخچه و قوانین نسخهٔ قبلی حفظ می‌شود.',
      step2t: 'پوشه را انتخاب کن',
      step2d: 'ساختار دلخواه را ببین، هشدارها را بررسی کن و مقصد هر فایل را قبل از تأیید بدان.',
      step3t: 'مرتب کن',
      step3d: 'یک‌بار اجرا کن یا خودکار بساز؛ اگر پشیمان شدی، با Undo همه‌چیز برمی‌گردد.',
      downloadKicker: 'نصب روی ویندوز',
      downloadTitle: 'Sortiva را نصب کنید',
      downloadSub: 'نصب‌کننده نسخهٔ قبلی را در جای خود ارتقا می‌دهد؛ تنظیمات، تاریخچه و قوانین حفظ می‌شوند.',
      downloadSetup: 'دانلود Setup',
      downloadReleases: 'صفحهٔ انتشارها',
      downloadReadme: 'راهنمای کامل',
      accountNote: 'Sortiva کاملاً رایگان است. حساب کاربری اختیاری است و هیچ قابلیتی به آن وابسته نیست.',
      reqTitle: 'نیازمندی‌ها',
      reqWin: 'ویندوز',
      reqSize: 'حجم نصب‌کننده',
      reqLicense: 'مجوز',
      reqVersion: 'نسخه',
      downloadNote: 'Sortiva روی خود ویندوز اجرا می‌شود؛ فایل‌ها از دستگاه شما بیرون نمی‌روند.',
      downloadPricePrefix: '',
      downloadPriceSuffix: '',
      downloadPriceLink: '',
      verifyTitle: 'قبل از اجرا، فایل را بررسی کنید',
      copySha: 'کپی هش',
      verifyHow: 'مقدار زیر را با PowerShell مقایسه کنید (در پوشهٔ دانلود):',
      verifyVt: 'اسکن VirusTotal این نسخه',
      copied: 'هش کپی شد',
      copyFailed: 'کپی نشد؛ خودتان انتخاب و کپی کنید',
      faqKicker: 'پرسش‌های رایج',
      faqTitle: 'قبل از مرتب‌کردن بدانید',
      q1: 'آیا Sortiva رایگان است؟',
      a1: 'بله. Sortiva کاملاً رایگان است؛ همهٔ امکانات از جمله قوانین، تکراری‌ها، Task Scheduler، رصد پوشه، پاک‌سازی و خروجی باز است — بدون لایسنس، بدون حساب و بدون دورهٔ آزمایشی.',
      q2: 'برای حساب کاربری باید پول بدهم؟',
      a2: 'نه. برای استفاده از Sortiva هیچ حسابی لازم نیست. حساب کاملاً اختیاری است و فقط برای نگه‌داشتن پروفایل در دستگاه‌های مختلف کاربرد دارد.',
      q3: 'چه فایل‌هایی را مرتب می‌کند؟',
      a3: 'تصاویر، ویدیو، اسناد، آرشیو، موسیقی و نرم‌افزار. عکس و ویدیو با تاریخ واقعی EXIF یا فیلم‌برداری گروه‌بندی می‌شوند و می‌توانید پوشهٔ شمسی یا میلادی بسازید.',
      q4: 'آیا فایل‌ها حذف یا خراب می‌شوند؟',
      a4: 'مرتب‌سازی جابه‌جایی است، نه حذف. قبل از اجرا پیش‌نمایش و هشدار برخورد مقصد را می‌بینید و همهٔ جابه‌جایی‌ها با Undo برمی‌گردند. پاک‌سازی نصب‌کننده و Temp هم از Recycle Bin استفاده می‌کند.',
      q5: 'برنامه باید همیشه باز باشد؟',
      a5: 'خیر. Auto Organize می‌تواند با Windows Task Scheduler حتی وقتی برنامه بسته است اجرا شود؛ این قابلیت هم رایگان است.',
      q6: 'تقویم شمسی پشتیبانی می‌شود؟',
      a6: 'بله. پوشه‌ها را می‌توانید بر اساس تاریخ شمسی یا میلادی بسازید و رابط فارسی به‌صورت کامل راست‌چین است.',
      q7: 'حساب کاربری چه فایده‌ای دارد؟',
      a7: 'هیچ قابلیتی به حساب وابسته نیست. حساب کاملاً اختیاری است و فقط برای ورود و نگه‌داشتن پروفایل در دستگاه‌های مختلف استفاده می‌شود. ایمیل برای ورود و بازیابی رمز استفاده می‌شود و هویت GitHub فقط اگر خودتان با GitHub وارد شوید ذخیره می‌شود.',
      q8: 'فایل‌های من کجا ذخیره می‌شوند؟ چه کسی آن‌ها را می‌بیند؟',
      a8: 'Sortiva هیچ فایلی را آپلود نمی‌کند و پشتیبان ابری ندارد. فایل‌ها همان‌جا روی ویندوز خودتان می‌مانند. سرور فقط وضعیت حساب اختیاری را نگه می‌دارد؛ کسی به محتوای فایل‌های شما دسترسی ندارد.',
      q9: 'چطور حساب و داده‌هایم را حذف کنم؟',
      a9a: 'کافی است به',
      a9b: 'ایمیل بزنید و حذف حساب را بخواهید. ایمیل حساب، هویت GitHub (اگر استفاده کرده‌اید) و شناسهٔ دستگاه از سرور حذف می‌شود؛ تنظیمات و تاریخچهٔ محلی روی خود رایانه می‌مانند تا خودتان پاک کنید.',
      q10: 'ویندوز هشدار SmartScreen می‌دهد؛ فایل امن است؟',
      a10: 'نصب‌کننده امضای دیجیتال تجاری ندارد، بنابراین SmartScreen ممکن است هشدار «ناشر ناشناس» بدهد. SHA-256 همین صفحه را با PowerShell مقایسه کنید؛ اگر یکی بود، فایل همان نسخهٔ رسمی است. برای اطمینان بیشتر، فایل را در VirusTotal هم اسکن کنید.',
      q11: 'اگر پوشهٔ دادهٔ برنامه را پاک کنم چه می‌شود؟',
      a11: 'تنظیمات، تاریخچه و وضعیت ورود از بین می‌رود اما فایل‌های شما دست‌نخورده می‌مانند. اگر حساب اختیاری داشته باشید و دوباره وارد شوید، پروفایل برمی‌گردد؛ همهٔ امکانات برنامه بدون حساب هم کار می‌کند.',
      crossKicker: 'از همین سازنده',
      crossTitle: 'SAZORA — پروژهٔ ساختمانی، کارگر و مالی',
      crossSub: 'مدیریت قرارداد، مراحل اجرا با تاریخ شمسی، کارکرد و مزد کارگر، صورت‌وضعیت متراژ و مالی — آفلاین روی ویندوز.',
      crossCta: 'دیدن سایت SAZORA',
      footerTag: 'فایل‌هایت را مرتب کن. بی‌نظمی را فراموش کن.',
      footerNote: 'ساخته‌شده برای ویندوز ۱۰ و ۱۱ · مجوز MIT',
      footerLinks: 'لینک‌ها',
      footerReleases: 'انتشارها',
      footerNotes: 'راهنما',
      footerSazora: 'SAZORA',
      footerPrivacy: 'حریم خصوصی',
      footerContact: 'تماس با ما',
      footerSupport: 'حمایت',
      footerDonate: 'صفحهٔ دونیت',
      footerAuthor: 'سایر پروژه‌ها',
      footerLicense: 'مجوز MIT',
      footerRights: 'همهٔ حقوق محفوظ است',
      footerMade: 'ساختهٔ Omid Masomi',
      newKicker: 'تازه در نسخهٔ ۴٫۱۲٫۲',
      newTitle: 'تماس روشن‌تر، بدون اینستاگرام',
      newSub: 'لینک اینستاگرام از کارت «تماس و حمایت» و راهنما حذف شد؛ بقیهٔ برنامه بدون تغییر و همچنان کاملاً رایگان است.',
      new1t: 'حذف اینستاگرام',
      new1d: 'آدرس اینستاگرام از کارت «تماس و حمایت» و از راهنمای گیت‌هاب برداشته شد.',
      new2t: 'کارت تماس مرتب',
      new2d: 'کارت تماس حالا سایت، گیت‌هاب، ایمیل، تلگرام و صفحهٔ حمایت را نشان می‌دهد.',
      new3t: 'بقیه بدون تغییر',
      new3d: 'مرتب‌سازی، قوانین، تکراری‌ها، پاک‌سازی و زمان‌بندی دقیقاً مثل قبل کار می‌کنند.',
      new4: 'حساب اختیاری هنوز فقط از تنظیمات است و نام شما بعد از ورود خودکار ذخیره می‌شود.',
      new5: 'همه‌چیز هنوز کاملاً رایگان است — بدون لایسنس، بدون دورهٔ آزمایشی و بدون نیاز به حساب.',
      newNotes: 'مشاهدهٔ انتشارها در GitHub',
      langLabel: 'Switch to English'
    },
    en: {
      pageTitle: 'Sortiva — Organize your files',
      pageDesc: 'Sortiva organizes Windows files by type and date, reads real photo and video dates, warns before every move, finds duplicates with SHA-256, cleans old installers and runs on a Task Scheduler schedule.',
      skip: 'Skip to content',
      navFeatures: 'Features',
      navPlans: 'Free',
      navHow: 'How it works',
      navDownload: 'Download',
      navFaq: 'FAQ',
      downloadShort: 'Download',
      heroBadgePrefix: 'Version',
      heroBadgeSuffix: 'is out',
      heroTitleA: 'Your files.',
      heroTitleB: 'Perfectly organized.',
      heroLede: 'Sortiva organizes Windows folders by type and date, reads the real capture date of photos and videos, shows a preview with warnings before anything moves, and can run on a schedule — even with the app closed.',
      heroCta: 'Download for Windows',
      heroSecondary: 'See features',
      heroNote: 'Version',
      heroPoint1: 'Completely free — no license, no account',
      heroPoint2: 'Preview and conflict warnings before anything moves',
      heroPoint3: 'Full history with Undo and Jalali folders',
      heroPricePrefix: 'Completely free · no license',
      heroPriceSuffix: '',
      heroPriceLink: '',
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
      r6d: 'Daily Windows Task Scheduler runs and folder watch are free too; you pick the time and structure.',
      r6a: 'Daily scheduling with Windows Task Scheduler',
      r6b: 'Folder Watch for active folders',
      r6c: 'Start with Windows and minimize to the tray',
      r7k: 'History',
      r7t: 'Every move can be undone',
      r7d: 'Each run is logged with file count, structure, calendar and sources; Undo reverses that exact run — without dragging newer files along.',
      r7a: 'Undo a whole run in one click',
      r7b: 'Per-file detail down to the final destination',
      r7c: 'CSV/JSON export',
      m1t: 'Your look and language',
      m1d: 'Light, dark or system theme, 8 accent colors, UI scale, Persian RTL and English.',
      m2t: 'Jalali folders',
      m2d: 'Photo and project dates in Jalali; 1405-08 folders with no manual conversion — or Gregorian if you prefer.',
      m3t: 'Optional account',
      m3d: 'The account is optional; every feature is unlocked without one.',
      plansKicker: 'Free forever',
      plansTitle: 'Every feature, no license',
      plansSub: 'Organizing, rules, duplicates, scheduling, folder watch, cleanup and export — all free and no account required.',
      freeTitle: 'Free',
      freeBadge: 'Forever · completely free',
      freeSub: 'Every Sortiva feature, with no license and no trial.',
      free1: 'Type and date sorting with every grouping option',
      free2: 'Jalali and Gregorian folders, real EXIF and video dates',
      free3: 'Cross-drive moves with progress and cancel, long path support',
      free4: 'Preview and conflict warnings before moving',
      free5: 'Auto Organize with scheduling, Run Now and Windows Task Scheduler',
      free6: 'Folder Watch for active folders',
      free7: 'Smart rules and ready-made presets',
      free8: 'Duplicate finder with SHA-256',
      free9: 'Installer and Temp cleanup via Recycle Bin',
      free10: 'Full history with Undo and CSV/JSON export',
      free11: 'Light/dark/system theme, custom accent, Persian and English',
      freeCta: 'Download for Windows',
      planNote: 'The account is optional; nothing is locked behind it.',
      plansFoot: 'No license, no credit card and no trial — free forever.',
      howKicker: 'Three simple steps',
      howTitle: 'From install to organized',
      howSub: 'No file moves without a preview.',
      step1t: 'Install',
      step1d: 'Run the Setup. Settings, history and rules from the previous install are kept.',
      step2t: 'Pick a folder',
      step2d: 'Inspect the structure, review warnings and know every destination before you confirm.',
      step3t: 'Organize',
      step3d: 'Run once or automate it; if you change your mind, Undo restores everything.',
      downloadKicker: 'Windows installer',
      downloadTitle: 'Install Sortiva',
      downloadSub: 'The installer upgrades the previous version in place; settings, history and rules are kept.',
      downloadSetup: 'Download Setup',
      downloadReleases: 'All releases',
      downloadReadme: 'Full guide',
      accountNote: 'Sortiva is completely free. An account is optional and no feature depends on it.',
      reqTitle: 'Requirements',
      reqWin: 'Windows',
      reqSize: 'Installer size',
      reqLicense: 'License',
      reqVersion: 'Version',
      downloadNote: 'Sortiva runs locally on Windows; your files never leave your machine.',
      downloadPricePrefix: '',
      downloadPriceSuffix: '',
      downloadPriceLink: '',
      verifyTitle: 'Verify the file before running it',
      copySha: 'Copy hash',
      verifyHow: 'Compare the value below in PowerShell (in your download folder):',
      verifyVt: 'VirusTotal scan for this version',
      copied: 'Hash copied',
      copyFailed: 'Copy failed — select and copy it manually',
      faqKicker: 'Common questions',
      faqTitle: 'Know before you organize',
      q1: 'Is Sortiva free?',
      a1: 'Yes. Sortiva is completely free; every feature — rules, duplicates, Task Scheduler, folder watch, cleanup and export — is unlocked with no license, no account and no trial.',
      q2: 'Do I have to pay for an account?',
      a2: 'No. You don’t need any account to use Sortiva. The account is optional and only keeps your profile across devices.',
      q3: 'Which files can it organize?',
      a3: 'Images, videos, documents, archives, music and software. Photos and videos are grouped by real EXIF or capture dates, and you can build Jalali or Gregorian folders.',
      q4: 'Will my files be deleted or damaged?',
      a4: 'Organizing is a move, not a delete. You see a preview and destination-collision warnings before running, and every move is reversible with Undo. Installer and Temp cleanup also uses the Recycle Bin.',
      q5: 'Does the app have to stay open?',
      a5: 'No. Auto Organize can run through Windows Task Scheduler even when the app is closed, and that feature is free too.',
      q6: 'Is the Jalali calendar supported?',
      a6: 'Yes. You can build folders by Jalali or Gregorian dates, and the Persian interface is fully right-to-left.',
      q7: 'What is the account for?',
      a7: 'No feature depends on it. The account is optional and only used to sign in and keep your profile across devices. Your email is used for sign-in and password recovery; a GitHub identity is stored only if you choose GitHub sign-in.',
      q8: 'Where are my files stored? Who can see them?',
      a8: 'Sortiva never uploads files and has no cloud backup. Your files stay on your own Windows machine. The server only keeps optional account status; nobody can access the contents of your files.',
      q9: 'How do I delete my account and data?',
      a9a: 'Email',
      a9b: 'and ask us to delete the account. The account email, GitHub identity (if used) and device identifier are removed from the server; local settings and history stay on your computer for you to clear.',
      q10: 'Windows SmartScreen warns about the installer. Is it safe?',
      a10: 'The installer has no commercial code-signing certificate, so SmartScreen may show an “unknown publisher” warning. Compare the SHA-256 on this page using PowerShell; if it matches, you have the official build. You can also scan the file on VirusTotal.',
      q11: 'What happens if I delete the app data folder?',
      a11: 'Settings, history and sign-in state are lost, but your files are untouched. If you have an optional account, signing in again restores your profile; every app feature works without an account anyway.',
      crossKicker: 'From the same maker',
      crossTitle: 'SAZORA — construction projects, workers and finance',
      crossSub: 'Contracts, build stages with Jalali dates, worker attendance and wages, measured statements and finance — offline on Windows.',
      crossCta: 'Visit SAZORA',
      footerTag: 'Your files. Perfectly organized.',
      footerNote: 'Built for Windows 10 and 11 · MIT License',
      footerLinks: 'Links',
      footerReleases: 'Releases',
      footerNotes: 'Guide',
      footerSazora: 'SAZORA',
      footerPrivacy: 'Privacy',
      footerContact: 'Contact',
      footerSupport: 'Support',
      footerDonate: 'Donate page',
      footerAuthor: 'More projects',
      footerLicense: 'MIT License',
      footerRights: 'All rights reserved',
      footerMade: 'Made by Omid Masomi',
      newKicker: 'New in 4.12.2',
      newTitle: 'Cleaner contact links, without Instagram',
      newSub: 'The Instagram link is removed from the Contact & Support card and the README; nothing else changes and everything is still completely free.',
      new1t: 'Instagram removed',
      new1d: 'The Instagram address is gone from the Contact & Support card and from the GitHub guide.',
      new2t: 'Tidy contact card',
      new2d: 'The contact card now lists Website, GitHub, Email, Telegram and Donate.',
      new3t: 'Everything else unchanged',
      new3d: 'Organizing, rules, duplicates, cleanup and scheduling work exactly as before.',
      new4: 'The optional account still lives only in Settings and your name is still saved automatically after sign-in.',
      new5: 'Everything is still completely free — no license, no trial and no account required.',
      newNotes: 'See releases on GitHub',
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

  var CFG = window.SITE_CONFIG || {};
  var REPO_URL = 'https://github.com/omidmasumi740-dev/sortiva';
  var state = {
    lang: 'fa',
    version: CFG.VERSION || '4.12.2',
    size: Number(CFG.FILE_SIZE) || 18116858
  };

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
    document.querySelectorAll('[data-version-raw]').forEach(function (el) {
      el.textContent = state.version;
    });
  }

  function downloadUrl() {
    if (CFG.DOWNLOAD_URL) return CFG.DOWNLOAD_URL;
    return REPO_URL + '/releases/download/v' + state.version + '/Sortiva_Setup_V' + state.version + '.exe';
  }

  function renderRelease() {
    renderNumbers();
    document.querySelectorAll('[data-download="sortiva"]').forEach(function (el) {
      el.setAttribute('href', downloadUrl());
    });
    document.querySelectorAll('[data-sha]').forEach(function (el) {
      el.textContent = CFG.SHA256 || '';
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

    var toggle = document.getElementById('langToggle');
    if (toggle) toggle.setAttribute('aria-label', t.langLabel);

    applyScreenshots();

    try {
      localStorage.setItem('sortiva-lang', state.lang);
    } catch (e) {}

    renderRelease();
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
    var fromUrl = '';
    try { fromUrl = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (fromUrl === 'en' || fromUrl === 'fa') stored = fromUrl;
    applyLanguage(stored);

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        applyLanguage(state.lang === 'fa' ? 'en' : 'fa');
        try {
          var url = new URL(location.href);
          url.searchParams.set('lang', state.lang);
          history.replaceState(null, '', url.pathname + '?lang=' + state.lang + url.hash);
        } catch (e) {}
      });
    }
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return Promise.reject(new Error('clipboard unavailable'));
  }

  function initVerify() {
    var btn = document.getElementById('copySha');
    var msg = document.getElementById('copyMsg');
    if (btn) {
      btn.addEventListener('click', function () {
        var t = dict[state.lang];
        copyText(CFG.SHA256 || '').then(function () {
          if (msg) { msg.textContent = t.copied; msg.hidden = false; }
        }).catch(function () {
          if (msg) { msg.textContent = t.copyFailed; msg.hidden = false; }
        });
      });
    }
    var vt = document.getElementById('vtLink');
    if (vt) {
      if (CFG.VIRUSTOTAL_URL) {
        vt.setAttribute('href', CFG.VIRUSTOTAL_URL);
        vt.hidden = false;
      } else {
        vt.remove();
      }
    }
  }

  function init() {
    initLanguage();
    initHeader();
    initVerify();

    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
