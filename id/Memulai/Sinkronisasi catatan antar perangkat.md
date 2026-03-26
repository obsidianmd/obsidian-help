---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Cara menyinkronkan catatan Obsidian Anda di berbagai perangkat dan platform.
aliases:
  - Memulai/Menyinkronkan catatan Anda antar perangkat
---
Obsidian menyimpan catatan secara lokal di perangkat Anda sehingga Anda selalu dapat mengaksesnya, bahkan saat offline. Untuk mengakses catatan di beberapa perangkat, Anda perlu menyiapkan metode sinkronisasi.

Panduan ini mencakup metode sinkronisasi umum, termasuk tips untuk menghindari kehilangan data dan memastikan pengalaman yang lancar.

Kami juga menyarankan untuk membaca [[Cadangkan file Obsidian Anda|panduan pencadangan]] kami untuk melindungi data Anda.

## Metode sinkronisasi

Dengan Obsidian, data Anda hanya disimpan sebagai file dalam folder yang disebut [[Vault lokal dan remote|brankas]]. Ini berarti ada banyak cara untuk menyinkronkan data Anda.

Berikut beberapa metode sinkronisasi yang umum digunakan dan dilaporkan oleh anggota [Komunitas Obsidian](https://obsidian.md/community):

1. **Sinkronisasi pihak pertama**: [[#Obsidian Sync]]
2. **Sinkronisasi cloud pihak ketiga**: [[#iCloud]], [[#OneDrive]], dan [[#Google Drive]]
3. **Sinkronisasi lokal**: [[#Syncthing]]
4. **Kontrol versi**: [[#Git]] dan [[#Working Copy]]

## Obsidian Sync

**Sistem yang direkomendasikan**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Metode sinkronisasi yang paling mudah dan didukung secara resmi adalah solusi pihak pertama kami: [[Pengantar Obsidian Sync|Obsidian Sync]].

Obsidian Sync menjaga brankas Anda tetap tersinkronkan di semua perangkat dengan menggunakan brankas jarak jauh di luar lokasi untuk membuat salinan data Anda. Salinan lokal tetap ada di perangkat Anda setiap saat.

Ikuti [[Menyiapkan Obsidian Sync|panduan penyiapan]] untuk mengonfigurasi Obsidian Sync.

## iCloud

**Sistem yang direkomendasikan**: `macOS`, `iOS`, `iPadOS`

iCloud dapat digunakan untuk menyinkronkan brankas antara iOS dan macOS. Namun, **iCloud Drive di Windows** dapat menyebabkan duplikasi atau kerusakan file.

**Cara membuat dan menyimpan brankas Anda di iCloud Drive**:

- **Aktifkan iCloud Drive**:
    - Di macOS: Buka **System Preferences → Apple ID → iCloud → iCloud Drive**.
    - Di iOS: Buka **Settings → [Nama Anda] → iCloud → iCloud Drive**.
- **Buat brankas baru di iCloud**:
    - Di macOS:
        1. Buka **Obsidian** dan pilih **Buat vault baru**.
        2. Di pemilih file, navigasikan ke **iCloud Drive → Obsidian**.
        3. Buat folder untuk brankas Anda dan beri nama.
        4. Pilih **Buat** untuk menyelesaikan.
    - Di iOS:
        1. Buka **Obsidian** dan ketuk **Buat vault baru**.
        2. Masukkan nama untuk brankas Anda.
        3. Aktifkan **Store in iCloud**.
        4. Ketuk **Buat**.
- **Buka brankas di perangkat Apple lain**: 
    - Di perangkat macOS atau iOS lainnya, buka **Obsidian**, buka [[Kelola brankas|Peralih brankas]], dan pilih **Buka folder sebagai vault**. Navigasikan ke **iCloud Drive → Obsidian**.

> [!warning]+ Lokasi folder iOS dan iPadOS
> Saat menggunakan iCloud di perangkat seluler, pastikan brankas Anda disimpan di lokasi yang benar: `iCloud Drive/Obsidian/[Nama Brankas Anda]`.
> 
> Brankas harus berada di dalam folder **Obsidian** di iCloud Drive. Folder di sebelah kanan dengan ikon Obsidian adalah yang benar. Jangan gunakan folder biasa tanpa ikon aplikasi.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Untuk memverifikasi lokasi brankas Anda, buka aplikasi **Files**, ketuk **Telusuri**, pilih **iCloud Drive** di bawah **Locations**, dan konfirmasi brankas Anda berada di dalam folder **Obsidian**. Jika brankas Anda berada di lokasi yang berbeda, Anda mungkin mengalami masalah sinkronisasi.

> [!tip] Praktik terbaik
> - Untuk **macOS 14 (Sonoma) dan sebelumnya**: Nonaktifkan **Optimize Mac Storage** di pengaturan iCloud untuk mencegah file dipindahkan. Pengaturan ini memengaruhi semua penyimpanan iCloud di perangkat, bukan hanya Obsidian.
> - Untuk **macOS 15 (Sequoia)**: Klik kanan folder **Obsidian** di iCloud Drive dan pilih **Keep Downloaded**.

## OneDrive

**Sistem yang direkomendasikan**: `Windows`, `macOS` (fungsionalitas terbatas di Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) adalah opsi penyimpanan cloud populer untuk pengguna Windows dan macOS. Namun, ia memiliki keterbatasan di Android dan tidak didukung secara resmi untuk menyinkronkan brankas Obsidian di iOS.

> [!info] Simpan file agar tersedia offline
> Sebelum menggunakan OneDrive untuk sinkronisasi, pastikan folder brankas Anda ditandai sebagai **Always keep on this device**. Ini mencegah OneDrive memindahkan file dan menyebabkan Obsidian menganggap file tersebut hilang.

**Cara membuat dan menyimpan brankas Anda di OneDrive**:

1. **Siapkan OneDrive**:
   - Di Windows: Masuk melalui aplikasi OneDrive atau akun Microsoft Anda.
   - Di macOS: Unduh aplikasi OneDrive dan masuk.
2. **Buat brankas baru di OneDrive**:
   - Di Windows/macOS:
     1. Buka **File Explorer** (Windows) atau **Finder** (macOS) dan navigasikan ke **OneDrive → Documents**.
     2. Buat folder baru (misalnya, \"Obsidian Vault\").
     3. Buka **Obsidian**, pilih **Buat vault baru**, dan pilih folder OneDrive.
3. **Buka brankas di perangkat lain**:
   - Di perangkat lain, buka **Obsidian**, buka [[Kelola brankas|Peralih brankas]], dan pilih **Buka folder sebagai vault**. Navigasikan ke **OneDrive → Documents**.

> [!info] Sinkronisasi Android
> OneDrive mungkin tidak berfungsi dengan baik untuk sinkronisasi Android. Pertimbangkan untuk menggunakan aplikasi seperti [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) atau [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Praktik terbaik
> - Selalu simpan file brankas Anda **Available Offline** dengan mengklik kanan folder dan memilih **Always keep on this device**.
> - Hindari menggunakan fitur **Files On-Demand** OneDrive untuk brankas guna mencegah masalah sinkronisasi.

## Google Drive

**Sistem yang direkomendasikan**: `Windows`, `macOS`, `Android` (fungsionalitas terbatas di iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) adalah solusi penyimpanan cloud populer lainnya. Meskipun tidak didukung secara resmi untuk menyinkronkan brankas Obsidian, Anda dapat menggunakan aplikasi dan plugin pihak ketiga untuk sinkronisasi antar perangkat.

> [!info] Dukungan iOS
> Google Drive tidak didukung secara resmi untuk menyinkronkan brankas Obsidian di iOS. Pertimbangkan untuk menggunakan solusi atau plugin pihak ketiga untuk sinkronisasi di iOS.

**Cara membuat dan menyimpan brankas Anda di Google Drive**:

1. **Siapkan Google Drive**:
    - Di Windows atau macOS: Unduh aplikasi Google Drive dan masuk.
    - Di Android: Pastikan Google Drive diaktifkan dan sudah masuk.
2. **Buat brankas baru di Google Drive**:
    - Di Windows/macOS:
        1. Buka **File Explorer** (Windows) atau **Finder** (macOS) dan navigasikan ke **Google Drive**.
        2. Buat folder baru (misalnya, \"Obsidian Vault\").
        3. Buka **Obsidian**, pilih **Buat vault baru**, dan pilih folder Google Drive.
3. **Buka brankas di perangkat lain**:
    - Di perangkat lain, buka **Obsidian**, buka [[Kelola brankas|Peralih brankas]], dan pilih **Buka folder sebagai vault**. Navigasikan ke folder Google Drive Anda.

> [!tip] Praktik terbaik
> - Atur file brankas ke **Available Offline** di Google Drive untuk menghindari masalah sinkronisasi akibat pemindahan file.
> - Untuk iOS, pertimbangkan metode alternatif seperti [[Pengantar Obsidian Sync|Obsidian Sync]], [[#iCloud]], atau gunakan plugin **Remotely Save**.

## Syncthing

**Sistem yang direkomendasikan**: `Windows`, `macOS`, `Linux`

Syncthing adalah alat sinkronisasi file terdesentralisasi yang tidak bergantung pada penyimpanan cloud. Alat ini menyinkronkan brankas Anda secara langsung antar perangkat melalui jaringan atau internet.

> [!info]+ Dukungan Android
> Aplikasi Android resmi Syncthing tidak lagi dikelola. Namun, fork komunitas bernama [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) terus dikembangkan secara aktif dan dapat digunakan di perangkat Android.

**Cara membuat dan menyimpan brankas Anda menggunakan Syncthing**:

1. **Siapkan Syncthing**:
   - Pasang Syncthing di setiap perangkat. Lihat [situs web Syncthing](https://syncthing.net/) untuk panduan pemasangan.
   - Di Android, pasang [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) dari rilis GitHub atau F-Droid.
2. **Buat dan konfigurasi folder bersama**:
   - Di semua perangkat:
     1. Buka Syncthing dan buat folder bersama. Atur jalur folder ke brankas Obsidian Anda.
     2. Pastikan folder yang sama dipilih di semua perangkat.
     3. Konfigurasi preferensi sinkronisasi folder (misalnya, **Send & Receive** untuk sinkronisasi dua arah).
3. **Buka brankas di Obsidian**:
   - Setelah folder tersinkronkan di semua perangkat, buka **Obsidian**, buka [[Kelola brankas|Peralih brankas]], dan pilih **Buka folder sebagai vault**.

> [!info] Ketersediaan perangkat
> Syncthing bekerja paling baik ketika setidaknya satu perangkat selalu menyala untuk memastikan sinkronisasi berkelanjutan.

> [!tip] Praktik terbaik
> - Untuk sinkronisasi lokal, pastikan semua perangkat terhubung ke jaringan yang sama.
> - Kecualikan `.obsidian` dari sinkronisasi jika Anda menginginkan pengaturan terpisah di setiap perangkat.
> - Gunakan pola pengabaian untuk menghindari sinkronisasi file sementara atau cadangan.

## Git

**Sistem yang direkomendasikan**: `Windows`, `macOS`, `Linux`

**Git** adalah sistem kontrol versi yang memungkinkan Anda melacak perubahan, berkolaborasi dengan orang lain, dan menyinkronkan brankas melalui repositori seperti GitHub, GitLab, atau server yang dihosting sendiri.

**Cara menyinkronkan brankas Anda menggunakan Git**:

1. **Siapkan repositori jarak jauh**:
    - Buat repositori di platform hosting Git (misalnya, GitHub, GitLab, atau server yang dihosting sendiri).
2. **Sinkronkan brankas Anda**:
    1. Buka terminal atau GUI Git (misalnya, GitKraken, Sourcetree).
    2. Inisialisasi repositori Git di folder brankas Anda menggunakan `git init`.
    3. Tambahkan repositori jarak jauh: `git remote add origin [URL]`.
    4. Commit perubahan Anda: `git add .` dan `git commit -m "Pesan Anda"`.
    5. Push perubahan: `git push origin main`.
3. **Pull perubahan di perangkat lain**:
    - Clone repositori di perangkat lain dan pull perubahan menggunakan `git pull origin main`.

> [!info] Sinkronisasi manual diperlukan
> Git menyediakan kontrol versi yang kuat, tetapi sinkronisasi tidak otomatis. Anda harus secara manual melakukan push dan pull perubahan.

## Sinkronisasi iPhone dan iPad

**Opsi yang direkomendasikan**:
- [[Pengantar Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Hindari mencampur layanan sinkronisasi
> Hindari menyinkronkan brankas yang sama melalui beberapa layanan (misalnya, menggunakan Obsidian Sync dan iCloud secara bersamaan) untuk mencegah konflik data atau kerusakan.

**Opsi yang tidak didukung**:
Layanan berikut tidak didukung secara resmi di iOS, tetapi pengguna telah menemukan solusi menggunakan alat atau plugin pihak ketiga:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Beberapa pengguna berhasil menggunakan plugin seperti **Remotely Save** atau **LiveSync** untuk menyinkronkan brankas di iOS. Namun, metode ini tidak didukung secara resmi, dan hasilnya dapat bervariasi.

### Working Copy

**Sistem yang direkomendasikan**: `iOS`
**Memerlukan**: [[#Git]]

**Working Copy** adalah klien Git untuk iOS yang memungkinkan Anda melakukan clone, commit, dan push perubahan ke repositori Git. Alat ini bekerja dengan baik untuk menyinkronkan brankas Obsidian melalui Git, meskipun beberapa fitur memerlukan pembelian dalam aplikasi.

**Cara menyinkronkan brankas Anda menggunakan Working Copy**:

1. **Pasang Working Copy**:
    - Unduh aplikasi **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** di iPhone atau iPad Anda.
2. **Clone repositori Git Anda**:
    - Buka Working Copy, ketuk **Add Repository**, dan masukkan URL repositori Anda (misalnya, GitHub, GitLab).
3. **Hubungkan repositori ke Obsidian**:
    - Hubungkan folder repositori yang telah di-clone ke brankas kosong di **Obsidian**.
4. **Commit dan push perubahan**:
    - Setelah mengedit catatan di Obsidian, gunakan Working Copy untuk **Commit** dan **Push** perubahan ke repositori jarak jauh.
    - Di perangkat lain, pull perubahan menggunakan Git untuk menyinkronkan brankas.

> [!info] Penggunaan komunitas
> Meskipun Working Copy tidak didukung secara resmi, banyak pengguna berhasil menggunakannya untuk menyinkronkan brankas dengan Git.

## Pertanyaan yang sering diajukan

**Mengapa layanan sinkronisasi pilihan saya tidak didukung secara resmi?**

Tidak seperti beberapa aplikasi pencatat yang mengakses satu file pada satu waktu, Obsidian memerlukan akses ke seluruh brankas untuk fitur-fiturnya (misalnya, memperbarui tautan saat mengganti nama file). Ini membuat beberapa layanan sulit berfungsi secara andal dengan Obsidian.

**Mengapa saya perlu menyimpan file "Available Offline"?**

Jika layanan seperti OneDrive atau iCloud memindahkan file (misalnya, menggunakan **Files On-Demand** atau **Optimize Mac Storage**), Obsidian tidak dapat mengaksesnya, menyebabkan masalah sinkronisasi. Tandai folder brankas Anda sebagai **Always keep on this device** (OneDrive) atau pastikan **Keep Downloaded** diaktifkan (iCloud).

**Bagaimana cara mengelola konfigurasi yang berbeda untuk brankas saya?**

Obsidian memungkinkan Anda menyesuaikan folder konfigurasi per perangkat menggunakan fitur [[Folder konfigurasi|Folder konfigurasi]].
