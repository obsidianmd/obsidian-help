---
permalink: plugins/file-explorer
publish: true
mobile: true
description: File explorer adalah plugin inti yang memungkinkan Anda mengelola file dan folder di dalam vault Anda.
aliases:
  - Plugin/Penjelajah berkas
---
Penjelajah berkas adalah [[Plugin inti|plugin inti]] yang memungkinkan Anda mengelola file dan folder di dalam brankas Anda. Anda dapat menelusuri catatan dan [[Format file yang diterima]] lainnya di brankas Anda serta melakukan berbagai operasi file umum:

- Membuat, menghapus, dan mengganti nama file dan folder.
- Memindahkan file dan folder dengan seret dan lepas.
- Menggunakan [[#Menggunakan menu konteks|menu konteks]] untuk mengakses semua operasi yang tersedia.

> [!tip]- Seret dan lepas file
> Anda dapat menyeret file dari Penjelajah berkas ke catatan Anda untuk membuat tautan ke file tersebut, atau menyeret file ke folder di Penjelajah berkas untuk menyalinnya.

## Membuat catatan baru

Untuk membuat catatan baru di lokasi bawaan untuk catatan baru:

1. Pilih **Catatan baru** ![[lucide-pen-line.svg#icon]] di bagian atas Penjelajah berkas.
2. Ketik nama catatan, lalu tekan `Enter`.

> [!tip]- Mengubah lokasi bawaan
> Anda dapat mengubah lokasi bawaan untuk catatan baru di **[[Pengaturan]] → [[Pengaturan#Berkas dan Tautan|Berkas & Tautan]] → [[Pengaturan#Lokasi bawaan untuk catatan baru|Lokasi bawaan untuk catatan baru]]**.

Untuk membuat catatan baru di folder tertentu:

1. Klik kanan pada folder lalu pilih **Catatan baru**.
2. Ketik nama catatan, lalu tekan `Enter`.

## Membuat folder baru

Untuk membuat folder baru di root brankas Anda:

1. Pilih **Folder baru** ![[lucide-folder-plus.svg#icon]] di bagian atas Penjelajah berkas.
2. Ketik nama folder, lalu tekan `Enter`.

Untuk membuat subfolder:

1. Klik kanan pada folder tempat Anda ingin membuat subfolder, lalu pilih **Folder baru**.
2. Ketik nama folder, lalu tekan `Enter`.

## Mengubah urutan sortir

Untuk mengubah urutan sortir file Anda:

1.  Pilih **Ubah urutan sortir** ![[lucide-arrow-up-narrow-wide.svg#icon]] di bagian atas Penjelajah berkas.
2. Pilih cara Anda ingin mengurutkan file. Anda dapat mengurutkan secara menaik atau menurun berdasarkan nama file, waktu modifikasi, atau waktu dibuat.

## Tampilkan otomatis file aktif

Saat Anda membuka catatan, Penjelajah berkas dapat secara otomatis menggulir ke dan menyorot catatan tersebut di pohon folder. Ini membantu Anda melacak di mana catatan aktif Anda berada di dalam brankas.

Untuk mengaktifkan/menonaktifkan tampilan otomatis:

- Pilih **Tampilkan otomatis file aktif** ![[lucide-gallery-vertical.svg#icon]] di bagian atas Penjelajah berkas.

Saat diaktifkan, Penjelajah berkas akan secara otomatis mengikuti dan menampilkan catatan aktif.

## Bentangkan atau lipat semua folder

Anda dapat membentangkan atau melipat semua folder di Penjelajah berkas sekaligus.

Untuk membentangkan semua folder:

- Pilih **Bentangkan Semua** ![[lucide-chevrons-up-down.svg#icon]] di bagian atas Penjelajah berkas.

Untuk melipat semua folder:

- Pilih **Lipat semua** ![[lucide-chevrons-down-up.svg#icon]] di bagian atas Penjelajah berkas.

## Menghapus file atau folder

1. Klik kanan pada file yang ingin Anda hapus, lalu pilih **Hapus**.
2. Jika diminta untuk mengonfirmasi bahwa Anda ingin menghapus file, pilih **Hapus**.

Untuk informasi lebih lanjut, lihat [[Kelola catatan#Menghapus catatan|Menghapus catatan]].

## Mengganti nama file atau folder

1. Klik kanan pada file yang ingin Anda ganti namanya, lalu pilih **Ubah judul berkas**.
2. Ketik nama baru, lalu tekan `Enter`.

Untuk informasi lebih lanjut, lihat [[Kelola catatan#Mengganti nama catatan|Mengganti nama catatan]].

## Memindahkan file atau folder

Untuk memindahkan file atau folder, Anda dapat menggunakan seret dan lepas atau menu konteks.

**Seret dan lepas:**

- Seret file atau folder ke folder tujuan pemindahan.
- Dengan `Alt-Klik` (Windows/Linux) atau `Opt-Klik` (macOS) Anda dapat memilih beberapa file individual dan menyeretnya ke folder lain. Jika semuanya berurutan, Anda dapat menggunakan `Shift-Klik` untuk itu.

**Menu konteks:**

1. Klik kanan pada file, lalu pilih **Pindahkan berkas ke...**.
2. Cari nama folder tujuan pemindahan file, lalu pilih dari daftar.

## Menggunakan menu konteks

Menu konteks mencantumkan tindakan yang tersedia untuk file atau folder. Banyak item file juga muncul di [[Menu opsi lainnya]].

### Desktop

Klik kanan pada file atau folder di Penjelajah berkas.

**File**

- **Buka di tab baru** dan **Buka di kanan** membuka file di tab baru atau di panel di sebelah kanan.
- **Buka di jendela baru** membuka file di jendelanya sendiri. Lihat [[Jendela pop-out]].
- **Duplikasi** membuat salinan file.
- **Pindahkan berkas ke...** memindahkan file ke folder lain. Lihat [[#Memindahkan file atau folder]].
- **Tandai...** menambahkan file ke bookmark Anda. Memerlukan plugin Bookmark. Lihat [[Penanda#Menambahkan bookmark]].
- **Gabungkan kesemua berkas dengan...** menggabungkan catatan dengan catatan lain. Memerlukan plugin Komposer catatan. Lihat [[Komposer catatan#Menggabungkan catatan]].
- **Publikasikan file saat ini** mempublikasikan catatan ke situs Anda. Memerlukan Obsidian Publish. Lihat [[Pengantar Obsidian Publish|Publish]].
- **Salin path** menyalin lokasi file sebagai URL Obsidian, dari folder brankas, atau dari root sistem.
- **Buka riwayat versi** menampilkan versi file sebelumnya. Memerlukan langganan Obsidian Sync yang aktif. Lihat [[Riwayat versi]].
- **Buka di aplikasi bawaan** membuka file di aplikasi yang digunakan komputer Anda untuk jenis file tersebut.
- **Tampilkan di Filesystem** menampilkan file di pengelola file Anda. Di macOS, item tersebut bertuliskan **Tampilkan di Finder**. Di Windows dan Linux, bertuliskan **Tampilkan dalam folder**.
- **Ubah nama...** mengubah nama file. Lihat [[#Mengganti nama file atau folder]].
- **Hapus** menghapus file. Lihat [[#Menghapus file atau folder]].

**Folder**

- **Catatan baru** dan **Folder baru** membuat catatan atau folder di dalam folder. Lihat [[#Membuat catatan baru]] dan [[#Membuat folder baru]].
- **Kanvas baru** membuat kanvas di dalam folder. Lihat [[Canvas]].
- **Basis baru** membuat basis di dalam folder. Lihat [[Pengenalan Basis]].
- **Duplikasi** membuat salinan folder.
- **Pindahkan folder ke...** memindahkan folder ke dalam folder lain.
- **Cari di folder** mencari hanya file di dalam folder. Lihat [[Cari]].
- **Tandai...** menambahkan folder ke bookmark Anda.
- **Salin path** menyalin lokasi folder dari folder brankas atau dari root sistem.
- **Tampilkan di Filesystem** menampilkan folder di pengelola file Anda, dan bertuliskan sama seperti untuk file.
- **Ubah nama...** dan **Hapus** mengubah nama folder atau menghapus folder.

### Seluler

Tekan dan tahan folder di Penjelajah berkas. Menu memiliki item yang sama dengan menu folder desktop, kecuali **Tandai...** dan **Tampilkan di Filesystem**.
