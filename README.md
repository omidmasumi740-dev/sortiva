# Sortiva 4.12.0 — [omidmasumi740-dev.github.io/sortiva](https://omidmasumi740-dev.github.io/sortiva/)

Windows desktop file organizer. *Your Files. Perfectly Organized.* — by Omid Masomi. English is the default language; Persian is available as the secondary language.

> 🎁 **Sortiva is now completely free** — every feature is unlocked with **no license, no account and no trial**. Just download and use it. An account is optional: you can sign in to keep your profile across devices, but nothing is locked behind it.

## ✨ Features

- 🗂️ One-click organization by file type and date
- 🧩 **A start page per file type** — clicking Simple, Images, Videos, Documents, Archives, Music or Software opens its own page with its own options and folder list
- 🎬 **Movies and series** — title/year folders, `Season 01` folders, subtitles moved next to their video; or group videos **by name, format or date** instead
- 🖼️ **Photo grouping** — month, year, or **location from EXIF GPS** (`35.7N 51.4E`), readable offline
- 📄 **Documents** — year → format (`2025/PDF`), month → format, format only, or year only
- 🗜️ **Archives and Software** — year → type, month → type, type only, or year only (`ZIP`, `EXE`, …)
- 🎵 **Music grouping** — Artist, Artist / Album, Album, year/month or year (ID3 + FLAC tags with folder fallback)
- 📁 **Folders right in the start page** — add, remove and review the exact folders that will be organized before running; the Home list is display-only
- 📅 Jalali (شمسی) and Gregorian date folders (`1404-06` / `2024-09`)
- 📷 Real shooting date from EXIF (photos) and `mvhd` metadata (videos), with file-date fallback
- 🪟 **Opens the folder when a run finishes** — Explorer shows where the files landed
- 💙 **Like on GitHub** — the Done dialog links straight to the project page
- 🔄 **Auto Organize** — pick folders + interval/daily schedule, it runs on its own; "Run Now" button for immediate execution. Every auto-organize mode is available
- 🗓️ **Windows Task Scheduler mode** — organize even when the app is closed, with a daily time, weekday picker and retry-safe headless `--auto-run`
- 👁️ **Folder watch** — picks up new files in the selected folders within ~20 seconds
- 🧠 **Rules engine** — extension, name contains/regex, content search, size range, age, destination template, rename template and optional command
- 📄 **Read values from documents** — content conditions and `{doc_date}` / `{doc_num}` tokens read text files, DOCX and PDFs, with Windows OCR for scanned PDFs and images
- 👁️ **Preview with warnings** — full plan table plus rule-overlap, target-collision and existing-file warnings before anything moves
- ♻️ **Duplicate finder** — SHA-256 duplicate groups with checkboxes, Open / Show folder, horizontal scrolling paths and one-click **Check duplicates** that pre-selects the copies (keeping one per group, and only one folder's content when two folders are identical), safe Recycle Bin cleanup; after each organize run you get the same select-and-delete list for any copies that became duplicates
- 🧹 **Installer & Temp cleanup** — keeps the newest installer of each app, selects older versions/duplicate copies and stale Temp files, then recycles them safely
- 📦 Cross-drive safe moves with byte-accurate percent progress and a working **Cancel** button
- ⏳ **Live wait indicator while scanning** — the type pages show an animated bar and elapsed seconds while heavy files are scanned, then switch to "Moving files…" during the run
- 🛣️ Long path (>260 chars) support: `\\?\` handling plus an optional one-time Windows long-path toggle
- 🕓 History of the last N operations (default 30, configurable), per-operation undo, and CSV/JSON export
- 🎨 Custom themes: Light / Dark / System, 8 accent colors or a custom color, UI scale, glass effect
- ⚙️ Configurable file-count threshold (default 20) in Settings and on the Rules page
- 🌐 Full Persian (Tahoma) and English (Segoe UI) interface, larger fonts for readability
- 🖱️ Every page opens **inside the main window** — no popups, no separate windows
- 🔗 **About** page with the app info and links plus the **Help** guide underneath: version, Website / GitHub / Email / Telegram / Instagram / Donate
- ⬆️ Update check against GitHub Releases
- 🔒 Single instance — launching the app again only raises the existing window
- ⏱️ Optional run at Windows startup (background mode, auto-organizes the selected folders)
- 🧺 System-tray icon with quick actions (Open / Auto organize / Check update / Quit)
- 📱 Sidebar navigation with a gradient panel: Home, History, Rules, Duplicates, Cleanup, Automatic, Settings, About
- 👤 **Optional account** — a dedicated account page with email/password or GitHub sign-in, kept separate from every feature: Sortiva works fully without it. Sessions are encrypted with Windows DPAPI and GitHub sign-in uses PKCE on a loopback callback (no client secret in the app)

## 🆓 Completely free

Sortiva is a complete organizer with every feature unlocked — there is no license, no trial and no paid plan:

- **Organize by type and date** — Simple, Images, Videos, Documents, Archives, Music and Software pages, with every grouping option (Movies & Series, photo dates/EXIF location, Artist/Album, format, year…)
- **Jalali or Gregorian** folders, EXIF/mvhd shooting dates, cross-drive moves with progress and Cancel, long-path support
- **Preview before moving** with rule-overlap, collision and existing-file warnings
- **Auto Organize** — folders, interval or daily schedule, every structure, **Run Now**, Windows Task Scheduler and folder watch
- **Rules engine, duplicate finder and installer/Temp cleanup** — with previews and Recycle Bin safety
- **Full history with undo** plus CSV/JSON export
- **Light / Dark / System themes**, 8 accent colors, UI scale, English and Persian RTL
- **Optional account** — sign in only if you want to; no feature depends on it

## 🚀 Download & Install

1. Go to the [Releases](../../releases) page or open the app website — https://omidmasumi740-dev.github.io/sortiva/
2. Download `Sortiva_Setup_V4.12.0.exe`
3. Run the installer — it installs to `Program Files` (per-user where permitted), creates a Start Menu shortcut and an optional Desktop shortcut
4. Open Sortiva and start organizing — nothing else is needed

The installed application does not require a separate Python installation.

## 🖥️ Usage

1. **Home** — pick a file type (or **Start Organizing** for the general page), then add the folder(s) and press **Start Organizing**. The banner under the hero confirms that every feature is free
2. **Account (optional)** — sign in or create an account with email or GitHub if you want to; no feature is locked behind it
3. **Type pages** — Simple (default), Images, Videos, Documents, Archives, Music and Software each open their own start page with the matching grouping options (the recommended one is marked and remembered) and folder list; Videos can be grouped as Movies & Series, by name, by format or by date
4. **Preview** — see the planned moves and any rule-overlap, collision or existing-target warnings
5. **History** — view, undo, export or delete past operations
6. **Automatic Management** — add folders, choose interval or a daily time, structure, then Run Now or let it run; enable Task Scheduler to keep organizing while the app is closed
7. **Rules** — create reusable rules with content/OCR conditions and destination/rename templates, with ready presets
8. **Duplicates** — scan the selected folders for identical files and recycle the extras
9. **Cleanup** — scan for older duplicate installers and stale Temp files, review what is selected, then recycle
10. **Settings** — theme, accent color, UI scale, file-count threshold, history limit, exclusions, long paths, language
11. **About** — app info and the help guide, plus Website, GitHub, Email, Telegram, Instagram and Donate links

> 💡 Simple mode: up to 20 files in the same date stay together; more than 20 are split into video/photo/document subfolders. Change the count on the **Rules** page or under **Settings → Split by type when a date has more than N files** (0 = never split).

## 🛠️ Build the Windows installer

Requirements: Windows 10/11, Python 3.10+, Inno Setup 6 or 7.

1. Install Python and Inno Setup.
2. Run `build.bat`.
3. The installer is created at `installer\Sortiva_Setup_V<version>.exe` and a complete package (installer + full source) at `..\Sortiva_V<version>_Complete.zip`.

The version exists **only** in `core.py` (`VERSION`). `build.bat` reads it and passes it to Inno Setup, so bumping the version is one edit — or `python release.py bump 4.6.1`.

Manual steps:

```bat
pyinstaller --noconfirm --clean --onedir --windowed --icon icon.ico --manifest longpath.manifest --name Sortiva --add-data "icon.png;." --add-data "icon.ico;." --add-data "ocr_win.ps1;." --add-data "assets;assets" file_organizer.py
"%ProgramFiles(x86)%\Inno Setup 7\ISCC.exe" /DMyAppVersion=4.12.0 installer.iss
python release.py package
```

Run straight from source: `run.bat` (or `python file_organizer.py`).

Requires Python 3.10+ on Windows. UI uses only the standard library (`tkinter`); `pystray` + `pillow` are optional (system-tray icon).

## 👤 Accounts (Supabase, optional)

Sortiva is fully usable without an account. Accounts exist only for people who
want a profile in the cloud across devices.

The app talks to Supabase Auth + REST with the **publishable** key only; the
`service_role` key is never shipped. The project URL and publishable key live in
`supabase_auth.py`.

One-time dashboard setup:

1. **SQL Editor** → run [`supabase_setup.sql`](supabase_setup.sql): creates
   `profiles` (read-own RLS) and the account trigger used by the app.
2. **Authentication → Providers → Email**: enable it. With *Confirm email*
   on, the app tells the user to confirm before signing in.
3. **Authentication → Providers → GitHub**: paste the GitHub OAuth client
   id/secret and set the callback to
   `https://<project>.supabase.co/auth/v1/callback`.
4. **Authentication → URL Configuration → Redirect URLs**: add
   `http://127.0.0.1:17517/callback` and `http://127.0.0.1:17517/recover`.

## 📂 Project Structure

```
file_organizer.py   # desktop app: tkinter UI, in-app pages, auto-organize, tray
core.py             # engine: rules, content/OCR, planning, conflicts, cleanup, moves
supabase_auth.py    # accounts: email/GitHub sign-in, DPAPI session, trial status
supabase_setup.sql  # run once in Supabase: profiles + account trigger
ocr_win.ps1         # Windows OCR + PDF renderer bridge (PowerShell/WinRT)
make_license.py     # legacy: generate license keys (unused — Sortiva is free)
make_license.bat    # legacy license maker
store/              # legacy self-hosted checkout (unused — Sortiva is free)
store/store.py      # pricing page, callback, key generation, email (stdlib only)
store/config.example.json  # plans, merchant_id, SMTP, base_url
store/README.md     # deploy and test the store
installer.iss       # Inno Setup script (version passed in from core.py)
build.bat           # build the installer + complete zip
release.py          # package / publish / bump helpers
publish_release.bat # publish the built installer to GitHub Releases
sign.bat            # Authenticode-sign the exe and setup
longpath.manifest   # exe manifest: long-path aware + per-monitor DPI
.github/workflows/release-cleanup.yml  # latest-only release hygiene
RELEASE_NOTES_V4.12.0.md
RELEASE_NOTES_V4.11.3.md
RELEASE_NOTES_V4.11.2.md
RELEASE_NOTES_V4.11.1.md
RELEASE_NOTES_V4.11.0.md
RELEASE_NOTES_V4.10.7.md
RELEASE_NOTES_V4.10.6.md
RELEASE_NOTES_V4.10.5.md
RELEASE_NOTES_V4.10.4.md
RELEASE_NOTES_V4.10.3.md
RELEASE_NOTES_V4.10.2.md
RELEASE_NOTES_V4.9.0.md
RELEASE_NOTES_V4.8.0.md
RELEASE_NOTES_V4.7.1.md
RELEASE_NOTES_V4.7.0.md
RELEASE_NOTES_V4.6.1.md
RELEASE_NOTES_V4.6.0.md
RELEASE_NOTES_V4.5.1.md
RELEASE_NOTES_V4.5.0.md
run.bat             # launcher for running from source
requirements.txt    # dependencies
DESIGN.md           # design system (colors, fonts, components)
README.md           # this file
icon.ico / icon.png # app + tray icon
logo.png            # source brand image
assets/             # category artwork (hero folder + file-type icons)
```

Data written at runtime (per user, never shipped). The folder keeps the
`FileOrganizer` name so existing settings, history and licenses survive the
rename to Sortiva:

```
%USERPROFILE%\FileOrganizer\
├── history.json
├── settings.json
├── sources.json
├── rules.json
├── auto.json
├── auto_folders.json
├── last_run.json
└── account.dat          # encrypted optional session (Windows DPAPI)
```

## 🔐 Code signing (SmartScreen)

Unsigned installers trigger "Windows protected your PC". To remove it:

1. Buy an OV/EV code-signing certificate (DigiCert, Sectigo, SSL.com) or use **Azure Trusted Signing** (cheaper, monthly).
2. Export it as a `.pfx` and run after `build.bat`:

```bat
set SIGN_PFX=C:\certs\omid.pfx
set SIGN_PASS=your-password
sign.bat
```

`sign.bat` signs both `dist\Sortiva\Sortiva.exe` and the setup with SHA-256 + an RFC3161 timestamp. EV certificates get SmartScreen reputation immediately; OV builds reputation over downloads. Keep the same certificate for every release.

## 🚀 Publishing a release (enables in-app updates)

The app checks `api.github.com/repos/omidmasumi740-dev/sortiva/releases/latest`.

1. Sign in once: `gh auth login` (GitHub.com → HTTPS → browser).
2. Run `publish_release.bat`. It creates or updates tag `v<version>`, uploads the setup, marks it as the latest release and deletes older releases and tags.
3. In the app: **Settings → Check for updates** or the About page → Check updates. The dialog offers download + install in one step.

A new version is one edit: `python release.py bump 4.6.1`, then `build.bat` (which also produces `..\Sortiva_V4.6.1_Complete.zip`), then `publish_release.bat` after approval. The repo workflow `.github/workflows/release-cleanup.yml` repeats the latest-only cleanup on every published release.

## 🛣️ Long paths

The engine prefixes long paths with `\\?\` and the exe manifest is long-path aware. NTFS still needs the machine-wide switch once: **Settings → Enable long paths** (UAC prompt) or

```bat
reg add "HKLM\SYSTEM\CurrentControlSet\Control\FileSystem" /v LongPathsEnabled /t REG_DWORD /d 1 /f
```

## 🔗 Links

- Website: https://omidmasumi740-dev.github.io/sortiva/
- GitHub: https://github.com/omidmasumi740-dev/sortiva
- Email: sortivasupport@gmail.com
- Telegram: https://t.me/omidlabs
- Instagram: https://instagram.com/omidamdev
- Donate: https://omidmasumi740-dev.github.io/donate-page/
- Releases: https://github.com/omidmasumi740-dev/sortiva/releases

## 👤 Author

**Omid Masomi** — sortivasupport@gmail.com

## 📄 License

MIT — see [LICENSE](LICENSE).

## Version History

### 4.12.0
- **Sortiva is completely free** — every feature is unlocked: rules, duplicates, scheduling, folder watch, cleanup, history export and all auto-organize modes. No license, no trial, no account required
- **The Pro page is now an optional account page** — sign in with email or GitHub only if you want to; nothing is gated, and the sidebar entry is simply **Account**
- **Home and Settings announce it** — a free-forever notice on the start page and in Settings, and the About/Help pages say every feature is free
- **Trial and purchase flows removed** — plan cards, prices, checkout buttons and trial notices are gone from the app
- Website: https://omidmasumi740-dev.github.io/sortiva/ · Support: sortivasupport@gmail.com

### 4.11.3
- **App website in About** — the App website link (`https://omidmasumi740-dev.github.io/sortiva/`) is now the first row in the About page links and is also listed in the Help guide; the installer’s publisher/support links point to the site
- **New support email** — the app and README use `sortivasupport@gmail.com`

### 4.11.2
- **History export needs a free account** — CSV/JSON export from History now asks to create or sign in to a free account (one click opens **Pro & account**); undo, delete and viewing history stay available to everyone
- **README for the GitHub page** — a new **Free plan** section lists exactly what the free plan can do (organize by type/date, previews, auto organize while open, history with undo, themes, Persian/English) and what Pro adds; the download steps now highlight the free account with **30 days of Pro**

### 4.11.1
- **One combined page** — “My account” and “Pro & License” are now a single **Pro & account** sidebar entry (with the same icon style as the other entries): account, trial status, license activation and plans live on one page, and `Buy Pro` from Home or a locked feature opens it
- **One plan per email and computer** — the app stores the linked email locally (DPAPI) and refuses to sign in, sign up or activate a license belonging to another email on the same PC; the trial ledger now identifies the machine by hardware id (MachineGuid + MAC) instead of an app file, so reinstalling, clearing data or a new email cannot claim a second free period
- **Plan picker only when no plan is active** — while a trial or license is active the Free/Pro/Team comparison is replaced by the current status and a single upgrade path (Pro and Team cards only when nothing is active)
- **Email confirmation notice** — when “Confirm email” is on in Supabase, creating an account now shows a notification telling the user to check their inbox and confirm the address before signing in; trying to sign in before confirming shows the same notice
- Backend checked against the live project: `profiles` and `trial_claims` exist with client access locked (RLS), the publishable key is accepted, and bad credentials map to the friendly error

### 4.11.0
- **My account page** — sign up or sign in with **email + password** or **GitHub**; the page shows the plan, the trial end date, days left, the signed-in email and method, with **Buy Pro**, **Refresh status** and **Sign out**
- **30-day Pro trial** — granted automatically the first time an account is created and enforced by the database (one trial per email, GitHub identity and computer); while it runs every Pro feature is unlocked
- **Trial end** — Pro features lock again after 30 days; Home and the Pro page show the upgrade banner and a one-time prompt offers the plans page
- **Password recovery** — “Forgot password?” sends a recovery email and opens a set-password form in the app (PKCE, loopback callback)
- **Secure by design** — session tokens are encrypted with Windows DPAPI, GitHub uses PKCE on `127.0.0.1:17517`, only the Supabase publishable key ships, and profiles are read-only for clients
- **Account status on Home** — a banner under the hero offers sign-in, shows the trial countdown, or switches to the trial-ended upgrade call
- Settings for the server: run `supabase_setup.sql` once in Supabase and add the two loopback redirect URLs (see the Accounts section)

### 4.10.7
- **Delete is always on screen** — the duplicate dialog and the Duplicates page reserve their action bar before the table, so **Delete selected copies** can no longer be pushed below the window edge on shorter windows
- The post-run dialog starts slightly taller and its table shows nine rows; the window can still be resized
- The hint text next to the check buttons wraps instead of being cut off

### 4.10.6
- **Header actions never disappear** — page titles pack the action buttons (Home, etc.) first and wrap the subtitle, so Home stays visible on Videos and every other type page even in a narrow window
- **Window buttons moved off the corner** — minimize / maximize / close now sit slightly inward from the window edge
- **Duplicate screen rebuilt** — checkbox column, click-to-tick rows, **Check all**, **Check duplicates** and **Clear** buttons, plus **Open file** (or double-click) and **Show folder**
- **Full path always readable** — the duplicate table has a horizontal scrollbar in addition to the vertical one
- **Copies are pre-selected** — scanning checks the duplicate copies automatically, keeping one file of each group
- **One folder wins** — when two folders hold identical content, the whole content of only one of them is checked; the kept copy stays in the folder with the most matches
- **Same behavior in the post-run dialog** — the Pro duplicate offer after organizing uses the same checkbox table, buttons and pre-selection

### 4.10.5
- **Waiting indicator while scanning** — the type pages now show an animated bar plus elapsed seconds while heavy files are scanned, then "Moving files…" during the run, so the app never looks frozen
- **Video grouping choices** — group videos as Movies & Series (default), by name, by format or by date; subtitles always travel with their video
- **"And More" is now Simple** — renamed and moved to the first tile on Home; the Simple layout stays the default when you press Start Organizing
- **Count-based simple mode** — a date folder with more than N files (default 20) is split into video/photo/document subfolders; fewer files stay together in one folder
- **Count option on the Rules page** — set the file threshold directly there (also in Settings) instead of editing it elsewhere
- **Duplicate cleanup after a run (Pro)** — when the organized files include identical copies, a select-and-delete list appears so you can send the extra copies to the Recycle Bin, keeping at least one of each

### 4.10.4
- **New pricing in USD** — Monthly, Yearly (main plan) and Lifetime for both 1-PC and 3-PC plans: $2.99 / $14.99 / $39.99 and $4.99 / $24.99 / $59.99; a period selector switches the prices, and the yearly option shows its per-month equivalent
- **Main features stay free** — organizing by type and date from Home, auto organize and the full history with undo are listed as Free plan features; History has no Pro gate
- **Buy** passes the chosen plan and billing period to the checkout (`plan` + `period` query parameters)
- The Pro card lists "Everything in the Free plan" above the Pro-only features, and the Team card adds "Works on 3 computers"

### 4.10.3
- **Three-plan comparison** — the Pro & License page now shows Free, Pro and Team side by side, with the features of the free plan listed next to the paid ones; your current plan is marked instead of showing a buy button
- **Pro sits directly above Settings** in the sidebar
- **Maximizing keeps the taskbar visible** — the window fills the desktop work area instead of covering the taskbar strip
- **About page order** — About, then Contact, then the help guide
- **Update check is resilient** — three attempts with backoff, and a fallback to the GitHub releases feed when the API is rate-limited; downloads are retried and validated by size and PE header before running
- **The app reopens automatically after an update** — a detached helper waits for the window to close, runs the silent installer and starts the new version

### 4.10.2
- **No empty folders** — a move that fails, is cancelled or skips a file no longer leaves the destination folder behind; folders are only kept once a file actually lands in them
- **Subtitles always follow their video** — pairing uses the file name, episode identity, sibling folders and same-folder context; orphan subtitles stay where they are instead of getting a folder of their own
- **Series detection from season folders** — episode files named like `Show - 05.mkv` inside `Season 2` are grouped under `Series/<Show>/Season 02` instead of `Movies`
- **Minimum files per group now applies to type layouts too** — a handful of documents/archives/programs stays in the date folder instead of creating an extra format subfolder
- Subtitle extensions count as video files in the simple/type structures, so they never land in `Documents`/`Others`

### 4.10.1
- **Pro and Licenses merged into one page** — a single **Pro & License** sidebar entry with the license status, key activation/removal and both lifetime plans on the same screen
- About's license button and the locked-feature prompts now open the merged page

### 4.10.0
- **Pro page** in the sidebar: two lifetime plans (Pro — 1 PC, Team — 3 PCs) with prices, features and a **Buy Pro** button; Pro users see their license here instead
- **Buy Pro** opens the checkout page; the key is generated automatically after payment, shown on the page, downloadable as a `.txt` and emailed
- **Self-hosted store** (`store/store.py`, stdlib only): Zarinpal v4 payments, SQLite order log, demo mode, SMTP delivery — see `store/README.md`
- **Licenses** and the locked-feature dialogs now lead to the Pro page
- Point the app at your store with `STORE_URL` in `core.py` (or `SORTIVA_STORE_URL` for testing)

### 4.9.0
- **Grouping per file type**, with the recommended option marked in each page's list and remembered per type:
  - Photos: month, year, or **location from EXIF GPS** (`35.7N 51.4E`, `No location` for photos without GPS)
  - Documents: year → format (`2025/PDF`), month → format, format only, year only
  - Archives: year → type, month → type, type only, year only
  - Software: file type, year → type, month → type, year only
  - Music: Artist (recommended), Artist / Album, Album, year/month, year or one folder — fewer nested folders
- **Opens the organized folder** in Explorer when a run finishes (skipped for scheduled/auto runs)
- **Done dialog** gains **Like on GitHub**, which opens the project page and remembers the click
- **Dashboard removed** — Home is the start page; **History** sits directly under Home
- **Help moved into About** — one menu entry, About on top and the guide underneath
- Fa/En strings updated to describe the recommended grouping of each type

### 4.8.0
- **Start Organizing opens a page**, not a popup: the folders to organize, Add/Remove, output location, calendar and subfolder switch are all on it; Preview and Start are pinned at the bottom
- **A dedicated start page per file type**: Images, Videos, Documents, Archives, Music, Software and And More are clickable tiles on Home
- **Music** page groups by Artist / Album, Artist, Album or a single folder; ID3 and FLAC tags are read, with Artist/Album folder names as fallback
- **Videos** page keeps the movie/series layout (title+year folders, seasons, subtitles next to the video)
- **And More** offers type, date, type→date, date→type and date-only layouts
- Folder selection now happens inside each type page, after choosing the type; the Home folder list is display-only
- Removed **Quick Run** and **Quick Organize**, which duplicated the start flow without showing the target folders

### 4.7.1
- **Redesigned completion dialog** after an operation: themed background (light/dark), success badge, title and the real number of organized files (Persian digits in فارسی), support card with **Buy me a coffee** / **Close**, RTL-mirrored layout, auto-sized and centered, Esc to close
- Fixes the old dialog rendering as unstyled white Tk boxes with a fixed size

### 4.7.0
- New organize mode **Movies, series, photos, music**: `Movies/<Title (Year)>`, `Series/<Show>/Season 01`, `Photos/<year-month>`, `Music/`
- Series detection: `S01E02`, `S01E02-E03`, `S01E02E03`, `1x02`, show name from the file name or parent folder
- Subtitle pairing: `.fa/.en/Farsi/Persian/forced/SDH` tags ignored; each subtitle moves next to its video
- Movie title parsing strips quality, codec, release group and language tags and extracts the year
- **Quick Organize** button on the Dashboard: one pass into `Photos/`, `Movies/`, `Series/`, `Music/`, `Files/` (orphan subtitles → `Files/Subtitles`)
- Moves only, no renaming; re-running skips files already in place

### 4.6.1
- Maintenance build: version bump only, no functional changes
- Release tooling: `sign.bat` now reads the version from `core.py` (like `build.bat`) instead of a hard-coded setup name
- Not published to GitHub — the latest public release stays 4.6.0 until a real fix or important change ships

### 4.6.0 — Sortiva
- **New name and identity**: the app is now **Sortiva** (*Your Files. Perfectly Organized.*) by **Omid Masomi**, with a new folder-S logo, icon and installer. Existing settings, history and Pro license are preserved (the data folder keeps its old path)
- **New theme**: Fluent-style blue palette (`#0078D7` / `#00C6FF` / `#6C63FF`) for both light and dark modes, gradient **sidebar** that tints every nav item to the color behind it, and the real logo in the title bar and About page
- **Auto Organize is Pro** except the free *Simple* structure; picking another mode on the free plan shows the upgrade prompt and falls back to Simple
- Title-bar **close and minimize** buttons are reliable again: the hover tooltip no longer sits under the cursor and is click-through, so it can never swallow the click
- **In-app updates from the new repo** (`github.com/omidmasumi740-dev/sortiva`): the app finds the latest release, shows the size, and downloads + launches the installer itself
- Installer upgrades in place over File Organizer 4.5.x (same AppId) and removes the old `FileOrganizer.exe`
- **One-command releases**: the version lives only in `core.py`, every build also produces `Sortiva_V<version>_Complete.zip` (installer + source), and a published release is automatically marked latest while older releases and tags are removed

### 4.5.1
- Organizing Settings dialog redesigned: fixed, centered, scrollable content with a confirm bar that is always visible, even spacing between options, and an in-dialog **? Help** panel that explains every structure mode, calendar and output option
- Dashboard **Quick Run** now organizes your saved folders with the last used options (asks before moving) and explains itself with a one-line hint; if no folder is saved it points you to Home instead of doing nothing
- **Duplicate Files** keeps scanning when you leave the page: results, progress and the scan button state are still there when you come back
- Help added to the sidebar next to About; the title-bar **?** opens the same page
- Dialogs no longer jump to the top-left corner on some Windows setups (window transparency is applied only to the main window)

### 4.5.0
- **Read values from PDFs and scans**: rules can filter by `content_contains` / `content_regex`, and destination/rename templates accept `{doc_date}` and `{doc_num}`. Text files, DOCX and text-based PDFs are read natively; scanned PDFs and images use Windows OCR (`ocr_win.ps1`, WinRT) with the installed OCR language pack
- **Preview dialog with warnings**: full file → destination → new-name table, plus warnings for files matching more than one rule, two files targeting the same name, and targets that already exist (a numbered copy is created on move)
- **Cleanup page**: scans chosen folders for installers and groups them by app name; keeps the newest version, selects older versions and extra copies, and lists stale Temp files older than N days (default 7). Nothing is deleted directly — everything goes to the Recycle Bin after review
- Rules editor shows content conditions and document tokens; license page lists the new cleanup feature
- Windows-standard UI: Segoe UI typography, Fluent-style buttons, slimmer cards, scrollbars that appear only when a table overflows, and mirrored layouts for the Persian interface (tables, dashboards, grids, dialogs)
- License fix: keys whose signature starts with `-` are now accepted; `make_license.bat` added to issue keys
- Dashboard quick actions work again (Start Organizing opens the preview; Run Now explains when no auto folder is set); the preview window is fixed, centered and keeps its Start/Cancel bar visible
- Duplicate Finder scans the folder or drive you enter with live progress and never deletes the last copy of a group; Cleanup scans only the folders you add instead of falling back to Downloads
- History gets visible Undo This Item / Delete Selected buttons; Settings and Advanced fields are consistently sized with no clipped labels
- Rules page includes a full "How rules work" tutorial (EN/FA); contact buttons open a single tab; donate link points to the GitHub Pages donate page
- Installer and source packages for 4.5.0; OCR bridge shipped inside the app bundle

### 4.4.0
- **New engine**: rule-based planner (`extension`, `name contains`, `regex`, size and age filters), destination/rename templates (`{date}`, `{ym}`, `{type}`, `{ext}`, `{name}`), optional per-rule command, safe dedupe and never-delete user folders
- **Dashboard**: KPI cards (files organized, data moved, active days, history entries), 7-day activity, recent operations and quick actions
- **Auto Organize**: interval or daily schedule with weekday picker, next-run countdown, Windows Task Scheduler integration (runs with the app closed) and folder watch
- **Rules page** with one-click presets (Images, Documents, Screenshots, Large files, Installers) and full rule editor
- **Duplicate Finder** (SHA-256) with group view and Recycle Bin cleanup
- **Licensing**: offline signed Pro keys, Licenses page, free/pro comparison; Pro is required for rules, duplicates, Task Scheduler and folder watch. Generate keys with `python make_license.py buyer@example.com`
- **History**: limit is configurable (default 30), export to CSV/JSON, undo per entry
- **Progress**: byte-accurate percent, current/total counter and a working Cancel that stops mid-run
- **Long paths**: `\\?\` handling in the engine plus a one-time Windows long-path toggle from Settings (UAC); exe manifest marks the app long-path aware
- **Redesign**: sidebar navigation with pill highlight, new color system, 8 accent colors + custom color, UI scale, theme-aware Treeviews/scrollbars, redesigned About page with feature chips
- Minimum files per group is now configurable (Settings → Minimum files per group)
- Task Scheduler entry and autostart registry value are removed automatically by the uninstaller
- Fix weekday schedules: the next-run calculation now advances to the next matching weekday correctly
- `--auto-run` headless mode for Task Scheduler with silent failure logging

### 4.3.1
- Automatic Management actually runs: adding a folder (or turning the switch on) saves every option immediately and starts organizing right away, then repeats at the chosen interval; the schedule runs on the Tk main thread instead of a background timer
- Auto status bar shows the live state: On/Off, folder count, interval, and the next run time
- Window now appears in Alt+Tab and the taskbar for real: the frameless `overrideredirect` hack was replaced by a normal top-level window whose caption is removed with Win32 style flags (`WS_EX_APPWINDOW`), so minimize, maximize, Snap and the taskbar button all work
- Cross-thread UI updates go through a queue, removing random freezes and "main thread is not in main loop" errors
- Empty-folder cleanup now only removes folders that became empty because their files were moved; user-created empty folders are kept (organize and undo)
- Fix App startup when automatic mode is enabled: no more traceback when the app is launched with `--startup`
- Robustness: a failure while moving can no longer leave the app stuck in "busy" state; history and auto settings now share one data folder
- Windows-startup command fixed for source runs (uses `pythonw.exe` with the script path instead of a bare `python.exe`); manual update check now says when GitHub could not be reached instead of claiming you are up to date
- Author name corrected to "Omid Masomi" in the app, About page, README and LICENSE

### 4.3.0
- Single-instance app: a second launch never opens a new window — it shows and raises the running one (named mutex + local IPC)
- Run at Windows startup: background launch (`--startup`) with a Settings toggle and registry Run key; auto-organizes the selected folders
- System-tray icon (pystray) with Open / Auto organize / Check update / Quit
- Scan fixed: no more freeze on folders containing junctions/symlinks; safe recursive walk with live file-count progress
- Faster organizing: destination folders computed from the already-read date/category (no second EXIF read)
- Home and Auto folder lists show 5 rows with a scrollbar; Auto page fits the minimum window size (1040×720)
- Taskbar button and Alt+Tab entry always visible for the frameless window

### 4.2.0
- All pages (Settings, Automatic Management, History, About, Help) open inside the main app window — no popups or separate windows
- Home page matches the reference design: hero panel, prominent Start Organizing button, folder illustration, Supported File Types card
- About page shows GitHub, Email, Telegram, Instagram and Donate addresses, each with its own icon
- Cleaner sidebar (Home, History, Automatic Management, Settings, About) and a slim auto-organize status bar at the bottom
- Updated URLs: GitHub @omidmasumi740-dev, Telegram @omidlabs, Instagram @omidamdev, Donate at github.com/omidmasumi740-dev/donate-page
- Installer-only distribution; clean state (no personal data) in packaged builds

### 4.1.1
- Reference-matched Home UI, visible folder bar, larger fonts
- Auto Organize single-screen layout with Run Now button
- Updated GitHub / Telegram / Donate URLs

MIT License.
