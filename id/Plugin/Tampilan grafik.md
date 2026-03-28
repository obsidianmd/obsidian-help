---
permalink: plugins/graph
publish: true
mobile: true
description: Graph view adalah plugin inti yang memungkinkan Anda memvisualisasikan hubungan antara catatan-catatan di dalam vault Anda.
aliases:
  - Plugin/Tampilan grafik
---
Tampilan grafik adalah [[Plugin inti|plugin inti]] yang memungkinkan Anda memvisualisasikan hubungan antar catatan di brankas Anda.

Untuk membuka Tampilan grafik, klik **Buka tampilan grafik** di [[Bilah alat]].

- Lingkaran mewakili catatan, atau _titik_.
- Garis mewakili [[Tautan internal]] antara dua titik.

Semakin banyak titik yang merujuk ke suatu titik tertentu, semakin besar ukurannya.

Untuk berinteraksi dengan catatan di grafik:

- Arahkan kursor ke setiap lingkaran untuk menyorot koneksi catatan tersebut.
- Klik catatan di grafik untuk membuka catatan tersebut.
- Klik kanan catatan untuk membuka menu konteks dengan tindakan yang tersedia untuk catatan tersebut.

Untuk menavigasi grafik:

- Perbesar dan perkecil menggunakan roda gulir pada mouse Anda, atau menggunakan tombol `+` dan `-`.
- Geser grafik dengan menyeretnya menggunakan kursor mouse, atau menggunakan tombol panah.

Anda dapat menahan Shift saat menggunakan keyboard untuk mempercepat pergerakan.

## Pengaturan

Untuk membuka pengaturan grafik, klik ikon roda gigi di sudut kanan atas tampilan grafik.

Klik **Pulihkan pengaturan bawaan** di sudut kanan atas kotak pengaturan untuk mengatur ulang perubahan yang Anda buat.

### Filter

Bagian ini mengontrol titik mana yang ditampilkan di grafik.

- **Cari file** memungkinkan Anda memfilter catatan berdasarkan istilah pencarian. Untuk mempelajari cara menulis istilah pencarian yang lebih lanjut, lihat [[Cari]].
- **Tag** mengaktifkan/menonaktifkan apakah tag ditampilkan di grafik.
- **Lampiran** mengaktifkan/menonaktifkan apakah lampiran ditampilkan di grafik.
- **Hanya berkas yang ada** mengaktifkan/menonaktifkan apakah hanya catatan yang ada di brankas Anda yang ditampilkan. Karena sebuah catatan tidak harus ada untuk ditautkan, ini dapat membantu membatasi grafik Anda hanya pada catatan yang benar-benar ada di brankas Anda.
- **Tanpa induk** mengaktifkan/menonaktifkan apakah catatan tanpa tautan ditampilkan.

> [!info] Berkas yang dikecualikan
> File yang cocok dengan pola [[Pengaturan#Berkas yang dikecualikan|Berkas yang dikecualikan]] Anda tidak akan muncul di Tampilan grafik.

### Grup

Buat grup catatan untuk membedakannya satu sama lain menggunakan warna.

Untuk membuat grup baru:

1. Klik **Grup penanda baru**.
2. Di kotak pencarian, ketik istilah pencarian untuk catatan yang ingin Anda tambahkan ke grup.
3. Klik lingkaran berwarna untuk memberikan warna pada grup.

Untuk mempelajari cara menulis istilah pencarian yang lebih lanjut, lihat [[Cari]].

### Tampilan

Bagian ini mengontrol cara memvisualisasikan titik dan tautan di grafik.

- **Panah** mengaktifkan/menonaktifkan apakah arah setiap tautan ditampilkan.
- **Ambang pudar teks** mengontrol transparansi teks untuk nama setiap catatan.
- **Ukuran titik** mengontrol ukuran lingkaran yang mewakili setiap catatan.
- **Ketebalan tautan** mengontrol lebar garis untuk setiap tautan.
- **Animasikan** memulai [[#Memulai animasi timelapse|animasi timelapse]].

### Gaya

Bagian ini mengontrol gaya yang bekerja pada setiap titik di grafik.

- **Gaya pusat** mengontrol seberapa kompak grafik tersebut. Nilai yang lebih tinggi menghasilkan grafik yang lebih melingkar.
- **Gaya tolak** mengontrol seberapa besar suatu titik mendorong titik lain menjauh darinya.
- **Gaya tautan** mengontrol tarikan pada setiap tautan. Jika tautan adalah karet gelang, gaya tautan mengontrol seberapa ketat atau longgar karet tersebut.
- **Jarak tautan** mengontrol panjang garis antara setiap catatan.

## Memulai animasi timelapse

Catatan dan lampiran muncul dalam urutan kronologis berdasarkan waktu pembuatannya.

![[obsidian-graph-view.png#interface]]

## Grafik Lokal

Untuk membuka tampilan Grafik lokal, gunakan perintah **Buka grafik lokal**. Sementara Tampilan grafik menampilkan semua catatan di brankas Anda, tampilan Grafik lokal menampilkan catatan yang terhubung ke catatan yang aktif.

Tampilan Grafik lokal dapat menggunakan semua [[#Pengaturan]] yang tersedia untuk Tampilan grafik global. Selain itu, Anda dapat mengubah kedalaman grafik lokal. Setiap tingkat kedalaman akan menampilkan catatan yang terhubung ke catatan yang terungkap pada kedalaman sebelumnya. Untuk mengontrol kedalaman Grafik lokal, gunakan penggeser di bagian atas panel Pengaturan Filter Grafik lokal.
