---
permalink: sync/settings
publish: true
mobile: true
description: Halaman ini menjelaskan pengaturan Sync dan memandu Anda dalam memilih file mana yang akan disinkronkan.
aliases:
  - Obsidian Sync/Memilih berkas dan pengaturan untuk disinkronkan
---
Ketika Anda [[Paket dan batas penyimpanan#Buat brankas jarak jauh baru|membuat brankas jarak jauh]] dan [[Menyiapkan Obsidian Sync#Menghubungkan ke brankas jarak jauh|menghubungkannya]], plugin inti Sync menjadi tempat untuk mengelola brankas jarak jauh Anda.

## Pengaturan Sync

**Brankas jarak jauh**
Bagian ini menampilkan brankas jarak jauh yang sedang terhubung. Ini mencakup tombol **Putuskan** untuk memutuskan koneksi dari brankas jarak jauh dan tombol **Kelola** untuk melihat semua brankas jarak jauh yang dapat diakses akun Anda (termasuk brankas bersama melalui [[Berkolaborasi di vault bersama|kolaborasi]]).

> [!warning]+ Brankas jarak jauh di layanan sinkronisasi pihak ketiga
> Jika brankas jarak jauh Anda berada di layanan sinkronisasi pihak ketiga, Anda akan melihat pesan kesalahan berwarna merah. Ikuti langkah-langkah di [[Beralih ke Obsidian Sync]] untuk menyelesaikan masalah ini.

**Status sinkronisasi**
Menampilkan status sinkronisasi saat ini dari brankas jarak jauh. Bagian ini mencakup tombol **Jeda** atau **Lanjutkan**, tergantung pada statusnya.

**Nama perangkat**
Berikan nama unik pada perangkat yang sedang melakukan sinkronisasi. Ini membantu melacak aktivitas di [[Ikon status dan pesan#Log aktivitas Sync|log sinkronisasi]]. Pengaturan ini bersifat spesifik per perangkat, sama seperti [[#Sinkronisasi selektif]].

**[[#Resolusi konflik]]**
Pilih cara menyelesaikan konflik ketika Anda memodifikasi file di beberapa perangkat. Pengaturan ini bersifat spesifik per perangkat, sama seperti [[#Sinkronisasi selektif]].

**Berkas terhapus**
Berisi tombol untuk **Tampilan** atau **Pulihkan** file yang dihapus. Untuk detail lebih lanjut, lihat [[Riwayat versi]].

**Vault size**
Menampilkan bilah progres yang menunjukkan seberapa banyak penyimpanan sinkronisasi Anda yang telah digunakan.

> [!tip]- Waktu pemrosesan server
> Mungkin diperlukan hingga 30 menit agar penggunaan saat ini diperbarui karena pemrosesan di sisi server.

**Hubungi bantuan**
Menyediakan petunjuk tentang cara [[Bantuan dan dukungan#Menghubungi dukungan Obsidian|menghubungi dukungan Obsidian]], termasuk opsi untuk **Salin info debug** dan **Surel bantuan**.

### Resolusi konflik

Pilih cara menyelesaikan konflik ketika Anda memodifikasi file di beberapa perangkat sebelum sinkronisasi. Anda dapat menggabungkan perubahan secara otomatis atau membuat file konflik terpisah untuk ditinjau secara manual. Lihat [[Pemecahan masalah Obsidian Sync#Resolusi konflik|Resolusi konflik]] untuk detail tentang cara kerja konflik dan cara mengonfigurasi pengaturan ini.

> [!warning]+ Konfigurasi di setiap perangkat
> Pengaturan ini harus dikonfigurasi secara terpisah di setiap perangkat.

---

Anda juga dapat memilih apa yang akan disinkronkan di pengaturan plugin inti Sync. Bagian ini mencakup **sinkronisasi selektif** dan **sinkronisasi konfigurasi vault**, beserta peringatan terkaitnya.

## Sinkronisasi selektif

File yang disinkronkan ke [[Vault lokal dan remote|brankas jarak jauh]] Anda berkontribusi pada [[Pertanyaan yang sering diajukan#Seberapa besar kapasitas setiap brankas jarak jauh|batas penyimpanan]] Anda. Secara bawaan, Obsidian Sync mengaktifkan **sinkronisasi selektif** untuk jenis file berikut:
- Gambar
- Audio
- Video
- PDF

Untuk menyinkronkan jenis file tambahan, aktifkan opsi `Sinkronkan semua jenis lainnya`.

Pengaturan bawaan **sinkronisasi konfigurasi vault** mencakup:
- Jenis file lainnya
- Pengaturan utama
- Tampilan
- Tema dan cuplikan
- Pintasan keyboard
- Daftar plugin inti aktif
- Pengaturan plugin inti

Untuk menyinkronkan plugin komunitas, aktifkan secara manual **Daftar plugin komunitas aktif** dan **Daftar plugin komunitas terpasang**.

### Mengubah jenis file yang ingin disinkronkan

1. Buka **[[Pengaturan]] → Sync**.
2. Di bawah **Sinkronisasi selektif**, aktifkan jenis file yang ingin Anda sinkronkan.
3. Mulai ulang aplikasi untuk menerapkan pengaturan baru. Di perangkat seluler atau tablet, ini mungkin memerlukan force-quit.

Perhatikan bahwa [[Paket dan batas penyimpanan|paket Sync]] Anda menentukan ukuran file maksimum yang dapat disinkronkan. Paket Standard memungkinkan sinkronisasi file hingga 5 MB, sementara paket Plus mendukung file hingga 200 MB.

> [!info]+ File yang dikecualikan tetap ada di brankas jarak jauh
> Menambahkan file ke daftar **Berkas yang dikecualikan** tidak menghapusnya dari brankas jarak jauh jika sudah disinkronkan. Konfigurasikan pengaturan Sync Anda sebelum menyinkronkan untuk menghindari penggunaan penyimpanan yang tidak perlu.

### Mengecualikan folder dari sinkronisasi

Secara bawaan, Obsidian menyinkronkan semua file dan folder di brankas Anda. Untuk mengecualikan folder tertentu dari sinkronisasi:
1. Buka **[[Pengaturan]] → Sync**.
2. Di samping **Folder yang dikecualikan**, pilih **Kelola**.
3. Pilih folder yang ingin Anda kecualikan dari daftar.
4. Pilih **Selesai**.

Untuk menghapus folder dari daftar pengecualian, pilih tombol ![[lucide-x.svg#icon]] di samping nama folder.

#### Selalu dikecualikan dari sinkronisasi

##### Snapshot pemulihan file

Snapshot di plugin [[Pemulih berkas]] tidak disinkronkan melalui Obsidian Sync, karena snapshot disimpan di [[Cara Obsidian menyimpan data#Pengaturan global|Pengaturan global]].

##### File dan folder tersembunyi

File dan folder yang diawali dengan `.` dianggap tersembunyi dan dikecualikan dari sinkronisasi. Satu-satunya pengecualian adalah [[Folder konfigurasi|folder konfigurasi]] brankas (`.obsidian`), yang tetap disinkronkan.

Contoh umum file dan folder tersembunyi yang tidak disinkronkan:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Pengaturan Sync

Pengaturan Sync tidak disinkronkan antar perangkat. Anda perlu mengonfigurasinya secara terpisah di setiap perangkat sesuai kebutuhan.

## Memperbarui pengaturan brankas yang disinkronkan

Untuk mengubah pengaturan sinkronisasi di beberapa perangkat, ikuti langkah-langkah berikut:

> [!tip]- Perangkat utama dan sekunder
> Istilah "utama" dan "sekunder" hanya untuk kejelasan. Sync tidak membedakan keduanya.

### Perangkat utama

Perangkat utama bertindak sebagai sumber kebenaran. Perubahan yang dibuat di sini disinkronkan ke semua perangkat lainnya.

1. Buka **[[Pengaturan]] → Sync**.
2. Aktifkan pengaturan yang diinginkan di bawah **Sinkronkan konfigurasi vault**.
3. Muat ulang atau mulai ulang Obsidian. Di perangkat seluler atau tablet, force-quit mungkin diperlukan.
4. Tunggu beberapa saat agar pengaturan disinkronkan dengan brankas jarak jauh Anda.

### Perangkat sekunder

Perangkat sekunder (seperti ponsel Anda) menerima pembaruan dari perangkat utama.

1. Buka **[[Pengaturan]] → Sync**.
2. Aktifkan pengaturan yang diperlukan di bawah **Sinkronkan konfigurasi vault**.
3. Tunggu perubahan diunduh dari brankas jarak jauh.
4. Muat ulang atau mulai ulang aplikasi untuk menerapkan pengaturan yang disinkronkan. Di perangkat seluler atau tablet, force-quit mungkin diperlukan.

### Memuat ulang pengaturan

Pengaturan tertentu dapat dimuat ulang secara langsung (hot reload), sementara yang lain memerlukan mulai ulang:

- **Dapat dimuat ulang langsung**: Sebagian besar konfigurasi Obsidian, termasuk pintasan keyboard dan properti, pengaturan tampilan, dan konfigurasi untuk plugin inti yang sudah diaktifkan.
- **Memerlukan mulai ulang**: Perubahan CSS (misalnya, [[Cuplikan CSS]], [[Tema]]), konfigurasi tampilan grafik, dan status plugin inti (misalnya, mengaktifkan/menonaktifkan Catatan Harian).

Plugin komunitas umumnya tidak mendukung pemuatan ulang langsung dan memerlukan mulai ulang saat pengaturan baru diterapkan.

> [!info]+ Untuk pengembang plugin
> Pelajari cara [mengintegrasikan fungsionalitas hot-reload dengan Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Profil pengaturan

Obsidian Sync dapat menyinkronkan beberapa [[Folder konfigurasi|folder konfigurasi]] ke brankas jarak jauh yang sama, memungkinkan Anda membuat profil terpisah (misalnya, satu untuk seluler, satu lagi untuk laptop Anda).

### Membuat profil pengaturan

Untuk membuat profil pengaturan baru:

1. Buka **[[Pengaturan]] → Berkas & Tautan**.
2. Di bawah **Timpa folder konfigurasi**, masukkan nama untuk profil Anda, diawali dengan titik (`.`), misalnya `.obsidian-mobile`.
3. Mulai ulang Obsidian untuk menerapkan perubahan.

> [!info]+ Hindari mengunduh ulang plugin dan tema
> Mengubah profil pengaturan akan memerlukan konfigurasi ulang pengaturan sinkronisasi Anda. Untuk menghindari mengunduh ulang plugin dan tema, salin folder `.obsidian` yang ada dan ubah namanya agar sesuai dengan profil baru Anda (misalnya, `.obsidian-mobile`) sebelum melakukan perubahan.
