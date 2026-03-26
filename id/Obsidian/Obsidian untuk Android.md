---
permalink: android
aliases:
  - Obsidian/Aplikasi Android
---
Aplikasi seluler Obsidian untuk Android menghadirkan kemampuan pencatatan yang powerful ke perangkat Android Anda. Anda dapat mengunduhnya dari [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) atau sebagai [file APK](https://obsidian.md/download).
Aplikasi ini mendukung Android versi 5.1 ke atas.

Halaman ini mencakup fitur-fitur khusus Android termasuk widget, integrasi Quick Settings, dan pintasan.

## Sinkronisasi

Untuk menyinkronkan catatan Anda dengan Obsidian di Android, lihat [[Sinkronisasi catatan antar perangkat]].

## Lokasi brankas

Saat Anda meluncurkan Obsidian di Android, Anda akan diminta memilih di mana data brankas Anda harus disimpan. Anda dapat memilih **penyimpanan perangkat** (direkomendasikan) atau **penyimpanan aplikasi**.

### Penyimpanan perangkat

Dengan opsi **penyimpanan perangkat**, data Anda disimpan di lokasi bersama pada perangkat Anda. Ini memungkinkan brankas Obsidian Anda diakses oleh aplikasi dan layanan lain, seperti alat [[Sinkronisasi catatan antar perangkat|sinkronisasi]] pihak ketiga.

Ini adalah opsi yang direkomendasikan karena menawarkan kompatibilitas yang lebih baik dengan alat sinkronisasi dan memastikan data Anda tetap ada meskipun Anda menghapus pemasangan aplikasi. Namun, opsi ini memerlukan izin tambahan untuk mengakses file perangkat Anda.

Karena keterbatasan Android, Obsidian akan meminta akses "Semua file" agar dapat berfungsi dengan andal. Google merekomendasikan ini untuk aplikasi seperti Obsidian yang dianggap sebagai "aplikasi pengelola dokumen". [Pelajari lebih lanjut](https://developer.android.com/training/data-storage/manage-all-files).

Aplikasi hanya menggunakan izin ini untuk membantu Anda mengakses data di perangkat Anda. Data Anda tidak pernah dapat diakses oleh kami. Untuk mempelajari lebih lanjut tentang cara kami melindungi data Anda dan memastikan privasi Anda, kunjungi [halaman Keamanan](https://obsidian.md/security) kami.

### Penyimpanan aplikasi

Dengan opsi **penyimpanan aplikasi**, data Anda disimpan di penyimpanan aplikasi privat Obsidian. Ini menjaga data Anda terisolasi dari aplikasi lain untuk privasi tambahan.

Ini adalah opsi yang baik jika Anda tidak menggunakan alat sinkronisasi eksternal dan lebih memilih sandboxing tingkat aplikasi yang lebih ketat untuk catatan Anda.

Dengan opsi ini Anda dapat menggunakan [[Pengantar Obsidian Sync|Obsidian Sync]] dan plugin sinkronisasi pihak ketiga yang tersedia melalui [[Plugin komunitas]], tetapi Anda tidak dapat menggunakan alat seperti Syncthing yang bergantung pada penyimpanan bersama.

> [!warning] Menghapus pemasangan Obsidian akan menghapus catatan lokal Anda jika Anda menggunakan penyimpanan aplikasi
> Jika Anda menggunakan opsi **Penyimpanan aplikasi**, data brankas lokal Anda akan dihapus jika Anda menghapus pemasangan aplikasi. Data brankas Obsidian Anda di perangkat lain tidak akan dihapus.

## Widget

Obsidian untuk Android menawarkan beberapa opsi widget untuk mengakses brankas dan catatan Anda dengan cepat dari layar beranda. Widget yang tersedia meliputi:

- **Open Note** — Buka catatan tertentu
- **New Note** — Buat catatan baru
- **Search** — Jalankan kueri pencarian
- **Daily Note** — Buka catatan harian Anda
- **Open Obsidian** — Luncurkan aplikasi

> [!note] Catatan
> Widget ini bersifat statis, dan tidak menampilkan pratinjau catatan atau brankas yang dipilih.

Untuk menambahkan widget ke layar beranda Anda:
1. Ketuk dan tahan di mana saja pada layar beranda Anda
2. Pilih "Widget"
3. Temukan Obsidian, lalu pilih widget yang ingin Anda gunakan.

> [!note] Catatan
> Widget Obsidian dapat diubah ukurannya. Untuk mengubah ukuran widget, ketuk dan tahan widget tersebut, lalu seret gagang pengubah ukuran.

Anda dapat menambahkan beberapa widget dengan tipe yang sama untuk membuka file berbeda atau memicu kueri pencarian yang berbeda.

Untuk mengonfigurasi widget, tekan lama widget tersebut di layar beranda Anda, lalu temukan opsi "Ubah" atau "Konfigurasi". Ini memungkinkan Anda menentukan parameter spesifik yang diperlukan agar aksi ketuk widget tersebut berfungsi, seperti File atau Alur, Kueri Pencarian, dan Nama Vault.

Lihat [artikel Dukungan Google](https://support.google.com/android/answer/9450271?hl=en) ini untuk informasi lebih lanjut tentang Widget Android.

## Ubin Quick Settings

Memerlukan Android 7.0 atau lebih tinggi.

Tambahkan ubin Quick Settings Obsidian untuk akses cepat ke aplikasi dari panel notifikasi Anda. Berfungsi di Layar Beranda dan Layar Kunci.

> [!note] Catatan
> Berbeda dengan widget aplikasi, Anda hanya dapat menambahkan satu ubin Quick Settings dengan tipe yang sama.

Untuk menambahkan ubin Quick Settings ke panel notifikasi Anda:

1. Akses panel notifikasi Anda, biasanya dengan mengusap ke bawah dari bilah status. Catatan: Anda mungkin perlu mengusap sekali lagi untuk melihat opsi lebih banyak.
2. Di ubin Quick Settings, pilih "Ubah" - ini biasanya di bagian yang sama di mana tombol seperti Wi-Fi, Bluetooth, dan Kunci Orientasi berada.
3. Temukan dan pilih ubin Quick Settings Obsidian, lalu atur ulang sesuai keinginan Anda.
4. Untuk mengonfigurasi ubin Quick Settings, ketuk dan tahan untuk memunculkan layar konfigurasi.

Lihat [artikel Dukungan Google](https://support.google.com/android/answer/9083864?hl=en) ini untuk informasi lebih lanjut tentang Quick Settings Android.

## Pintasan

Memerlukan Android 7.1 atau lebih tinggi.

Obsidian menyediakan pintasan aplikasi yang dapat diakses dengan beberapa cara:

- Tekan lama ikon aplikasi Obsidian
- Seret ikon pintasan ke layar beranda Anda
- Akses melalui bilah pencarian di launcher Anda (tersedia di sebagian besar vendor perangkat)

Pintasan yang tersedia:

- **Buka catatan** — Buka catatan tertentu di brankas Anda
- **Catatan harian** — Langsung menuju catatan harian hari ini

> [!note] Catatan
> Pintasan di Obsidian 1.11 tidak dapat dikonfigurasi dan akan diperbarui di versi mendatang untuk menawarkan opsi yang lebih dinamis yang disesuaikan dengan catatan spesifik Anda.
