---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Anda telah membeli Obsidian Sync dan siap untuk memulai. Panduan ini akan membantu Anda menyiapkan dan menyesuaikan pengaturan Obsidian Sync untuk penggunaan sehari-hari.
aliases:
  - Obsidian Sync/Menambahkan perangkat lain
  - Obsidian Sync/Mengatur Obsidian Sync
---
Anda telah membeli Obsidian Sync dan siap untuk memulai. Panduan ini akan membantu Anda menyiapkan dan menyesuaikan pengaturan Obsidian Sync untuk penggunaan sehari-hari.

- **Baru mengenal Obsidian Sync?** Lihat: [[#Menyiapkan Obsidian Sync untuk pertama kalinya]]
- **Menghubungkan perangkat kedua?** Lihat: [[#Sinkronisasi brankas jarak jauh di perangkat lain]]
- **Perlu melakukan perubahan?** Lihat: [[#Kelola brankas jarak jauh Anda]]

## Menyiapkan Obsidian Sync untuk pertama kalinya

Di bagian ini, Anda akan membuat [[Vault lokal dan remote|brankas jarak jauh]] baru dan menghubungkannya ke brankas lokal yang sudah ada. Anda tidak perlu membuat brankas lokal baru yang kosong untuk menggunakan Obsidian Sync untuk tujuan ini.

> [!info] Apakah brankas Anda saat ini berada di folder iCloud, OneDrive, Dropbox, atau layanan sinkronisasi lainnya? Jika **ya**, atau Anda **tidak yakin**, silakan baca [[Pertanyaan yang sering diajukan#Bisakah saya menggunakan sinkronisasi pihak ketiga bersama Obsidian Sync?|ini]] dan [[Beralih ke Obsidian Sync]] sebelum melanjutkan.

**Prasyarat**

- Akun Obsidian. Jika Anda belum memilikinya, [daftar sekarang](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- [[Paket dan batas penyimpanan|Langganan]] Obsidian Sync yang aktif. Jika Anda belum memilikinya, berlangganan dari [dasbor akun Anda](https://obsidian.md/account/sync).
- **Direkomendasikan**: [[Cadangkan file Obsidian Anda|Sistem pencadangan]] yang sudah disiapkan untuk file Obsidian Anda. Layanan sinkronisasi bukanlah pencadangan.

### Masuk dengan akun Obsidian Anda

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, pilih **Umum**.
3. Di bawah **Akun → Akun Anda**, pilih **Masuk**.
4. Di **Email**, masukkan email Anda.
5. Di **Kata sandi**, masukkan kata sandi Anda.
6. Pilih **Masuk**.

### Aktifkan Obsidian Sync

1. Buka **[[Pengaturan]]**.
2. Di bilah samping di bawah **Pengaturan**, pilih **Plugin inti**.
3. Aktifkan **Sync**.

### Buat brankas jarak jauh baru

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, pilih **Sync**.
3. Di sebelah **Vault remote**, pilih **Pilih**.
4. Pilih **Buat vault baru**.
5. Di **Nama vault**, masukkan nama brankas jarak jauh.
6. Di **Wilayah**, pilih [[Menyiapkan Obsidian Sync#Server sinkronisasi regional|wilayah]] server untuk brankas jarak jauh Anda.
7. Di **Kata sandi enkripsi**, pilih kata sandi untuk brankas Anda. Ini akan membuat brankas dengan enkripsi ujung-ke-ujung. Kata sandi brankas terpisah dari akun Obsidian Anda dan dapat berbeda untuk setiap brankas Anda. Untuk informasi lebih lanjut, lihat [[Keamanan dan privasi]].
8. Pilih **Buat**.

### Hubungkan ke brankas jarak jauh

1. Pilih **Hubungkan** di sebelah brankas yang baru Anda buat.
2. Masukkan kata sandi yang Anda konfigurasikan untuk brankas di kolom **Kata sandi enkripsi** jika Anda memilih [[Obsidian Sync/Keamanan dan privasi#Apa yang dimaksud dengan enkripsi ujung-ke-ujung?|enkripsi ujung-ke-ujung]].
3. Pilih **Buka vault**.
4. **Jangan mulai menyinkronkan dulu.** Periksa pengaturan sinkronisasi Anda di [[#Sesuaikan pengaturan Obsidian Sync|sesuaikan pengaturan Obsidian Sync]].
    - Jika Anda ingin langsung mulai menyinkronkan, lanjutkan ke [[#Mulai menyinkronkan dengan Obsidian Sync|mulai menyinkronkan dengan Obsidian Sync]].
5. Jika Anda belum melakukannya, tutup jendela pop-up yang meminta Anda untuk **Kecualikan Folder** dan **Mulai Menyinkronkan**. Lanjutkan ke langkah berikutnya.

#### Sesuaikan pengaturan Obsidian Sync

1. Navigasi ke **[[Pengaturan]]** → **Sync** jika diperlukan.
2. Jika nama perangkat belum ditambahkan, tambahkan satu agar membaca log Sync Anda lebih mudah!
3. Aktifkan/nonaktifkan pengaturan di bawah **Sinkronisasi selektif** dan **Sinkronkan konfigurasi vault** untuk menentukan item mana yang harus disinkronkan ke dan dari brankas jarak jauh.
    - **Catatan**: Jika Anda baru saja memutuskan koneksi dari brankas jarak jauh dan menghubungkan kembali tanpa memulai ulang aplikasi, beberapa pengaturan mungkin sudah diaktifkan.
4. Jika Anda mengubah pengaturan apa pun, mulai ulang Obsidian sepenuhnya.
5. Setelah Obsidian dimulai ulang, kembali ke **[[Pengaturan]]** → **Sync**.

#### Mulai menyinkronkan dengan Obsidian Sync

Jika Anda memulai sinkronisasi setelah terhubung ke brankas jarak jauh, Anda akan melihat tombol **Mulai menyinkronkan**. Pilih tombol ini untuk mulai menyinkronkan.

Jika Anda memulai sinkronisasi setelah menyesuaikan pengaturan Obsidian Sync dan memulai ulang aplikasi, Anda akan melihat tombol **Lanjutkan** di dalam pengaturan Sync. Pilih tombol ini untuk mulai menyinkronkan.

> [!done] Status sinkronisasi
> Ketika Obsidian Sync selesai, lingkaran hijau dengan tanda centang ![[obsidian-icon-sync-synced.svg#icon]] muncul di pojok kanan bawah (desktop) atau di bilah samping kanan (seluler). Log Sync juga akan menampilkan "Fully Synced" sebagai salah satu pesan terbarunya.
>
> Untuk detail lebih lanjut tentang status sinkronisasi, lihat [[Ikon status dan pesan]].
^obsidian-sync-status

Untuk menghubungkan perangkat lain ke brankas jarak jauh yang baru dibuat dan disinkronkan, lanjutkan ke [[Menyiapkan Obsidian Sync#Sinkronisasi brankas jarak jauh di perangkat lain|Sinkronisasi brankas jarak jauh di perangkat lain]].

Untuk mempelajari lebih lanjut tentang pengaturan dan file, lanjutkan ke [[Pengaturan Sync dan sinkronisasi selektif]].

## Sinkronisasi brankas jarak jauh di perangkat lain

Di bagian ini, Anda sudah membuat brankas jarak jauh dan mengunggah data ke dalamnya. Sekarang, Anda ingin menghubungkan perangkat lain Anda ke brankas tersebut.

**Prasyarat**
- Akun Obsidian. Jika Anda belum memilikinya, [daftar sekarang](https://obsidian.md/account#mode=signup).
- Langganan Obsidian Sync yang aktif. Jika Anda belum memilikinya, berlangganan dari [dasbor akun Anda](https://obsidian.md/account).
- Sync diaktifkan di pengaturan [[Plugin inti]].
- Brankas jarak jauh yang aktif. Jika Anda belum membuatnya, silakan buat [[Menyiapkan Obsidian Sync#Buat brankas jarak jauh baru|brankas jarak jauh]] terlebih dahulu.
- **Direkomendasikan**: [[Cadangkan file Obsidian Anda|Sistem pencadangan]] yang sudah disiapkan untuk file Obsidian Anda di perangkat yang paling sering digunakan. Layanan sinkronisasi bukanlah pencadangan.

### Sinkronkan brankas Anda dari pengalih brankas

Jika Anda baru saja menginstal Obsidian, saat Anda membuka program Anda akan disajikan [[Kelola brankas|Pengalih brankas]]. Untuk membuat brankas lokal baru dari konten brankas jarak jauh, Anda perlu melakukan langkah-langkah berikut.

1. Buka Obsidian (dengan asumsi ini pertama kalinya Anda membukanya)
2. Pilih salah satu opsi tergantung pada instalasi Anda:
	1. **Desktop**: Di bagian yang bertuliskan Hubungkan ke Obsidian Sync, pilih **Mengatur**
	2. **Seluler/Tablet**: **Mengatur Obsidian Sync**
3. Masuk dengan akun pengguna Obsidian Anda
	1. Jika [[Autentikasi 2 faktor|2FA]] sudah disiapkan, masukkan kode 2FA Anda.
4. Anda akan diminta untuk memilih brankas jarak jauh mana yang ingin Anda sinkronkan ke perangkat ini. Pilih **Hubungkan**.
5. Anda akan diminta untuk memilih nama untuk brankas lokal yang akan dibuat di perangkat untuk menyimpan data ini. Masukkan nama pilihan Anda.
	1. Jika Anda menggunakan [[Obsidian URI]], Anda sebaiknya menggunakan nama yang sama dengan brankas lokal di perangkat lain Anda.
6. Pilih **Buat**.
7. Jendela vault remote akan muncul sejenak saat Obsidian Sync terhubung ke server Anda dan memvalidasi langganan. Kemudian akan menampilkan jendela *Setelan koneksi*.
	1. Sangat disarankan agar Anda menutup atau menggeser ke bawah dari jendela ini, dan [[#Sesuaikan pengaturan Obsidian Sync|sesuaikan pengaturan Obsidian Sync]] terlebih dahulu.
	2. Jika Anda mengubah Pengaturan Sync apa pun, silakan muat ulang atau mulai ulang Obsidian.

### Sinkronkan brankas Anda dari Pengaturan Obsidian

Jika Anda sudah membuat brankas lokal di perangkat ini, dan Anda ingin menghubungkan brankas lokal ini ke brankas jarak jauh, instruksinya sangat mirip dengan [[#Menyiapkan Obsidian Sync untuk pertama kalinya]].

![[Menyiapkan Obsidian Sync#Masuk dengan akun Obsidian Anda]]

![[Menyiapkan Obsidian Sync#Aktifkan Obsidian Sync]]

#### Hubungkan ke brankas jarak jauh

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, pilih **Sync**.
3. Di sebelah **Pilih vault remote**, klik **Pilih**.
4. Klik **Hubungkan** di sebelah brankas jarak jauh yang ingin Anda hubungkan.
5. Di **Kata sandi enkripsi**, masukkan kata sandi untuk brankas Anda, jika ada.
6. Anda akan diminta untuk mulai Menyinkronkan. Disarankan untuk menunggu dan menyesuaikan pengaturan sinkronisasi Anda terlebih dahulu. Jika Anda ingin menyinkronkan seluruh brankas ke perangkat apa adanya, Anda dapat **Mulai Menyinkronkan**.

> [!warning] Jika brankas di perangkat Anda sudah berisi beberapa catatan (tidak disarankan), Anda akan diperingatkan bahwa catatan-catatan tersebut akan digabungkan sebelum melanjutkan. Konflik akan diselesaikan melalui [[Pemecahan masalah Obsidian Sync#Resolusi konflik|resolusi konflik Sync]].

![[Menyiapkan Obsidian Sync#Sesuaikan pengaturan Obsidian Sync]]

![[Menyiapkan Obsidian Sync#Mulai menyinkronkan dengan Obsidian Sync]]

## Kelola brankas jarak jauh Anda

Anda telah membuat dan terhubung ke brankas jarak jauh. Anda mungkin juga telah menyinkronkan brankas jarak jauh ini ke beberapa perangkat. Bagian ini membahas beberapa instruksi umum lainnya yang mungkin Anda perlukan dalam mengelola brankas jarak jauh ini.

### Putuskan koneksi dari brankas jarak jauh

1. Buka **[[Pengaturan]]** Obsidian.
2. Pilih **Sync** di bilah samping.
3. Klik tombol **Putuskan** di sebelah Vault remote.

Anda sekarang telah terputus dari brankas jarak jauh dan tidak lagi menyinkronkan di perangkat ini.

### Hapus brankas jarak jauh

> [!tip] Menghapus brankas jarak jauh tidak akan menghapus data lokal Anda di perangkat.

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, pilih **Sync**.
3. Pilih **Kelola** di sebelah Vault remote. Jendela akan terbuka dengan daftar brankas jarak jauh Anda.
4. Pilih ikon tempat sampah ![[lucide-trash-2.svg#icon]] di sebelah brankas jarak jauh yang ingin Anda hapus.
5. Konfirmasi penghapusan dengan memilih tombol merah **Hapus**.
6. Brankas jarak jauh Anda telah dihapus.

> [!info] Jika tidak ada ikon tempat sampah yang terlihat, Anda mungkin perlu memutuskan koneksi dari brankas jarak jauh terlebih dahulu. Setelah terputus, pilih tombol **Pilih** untuk membuka daftar brankas jarak jauh.

### Server sinkronisasi regional

Obsidian Sync memungkinkan Anda memilih lokasi hosting untuk brankas jarak jauh Anda. Jika Anda menggunakan Obsidian versi `1.4.16` atau lebih lama, lokasi akan dipilih secara otomatis untuk Anda.

Jika Anda tidak yakin di mana wilayah brankas Anda saat ini, lihat [[Obsidian Sync/Keamanan dan privasi#Di mana saya dapat menemukan server Sync saya saat ini dan di mana server tersebut dihosting?|Di mana saya dapat menemukan server Sync saya saat ini dan di mana hostingnya?]] untuk panduan.

![[sync-regional-sync-servers.png#interface|300]]

Setelah memilih lokasi, pusat data Anda **tidak dapat** dipindahkan ke server yang berbeda tanpa mengunggah ulang data Anda. Untuk mengubah wilayah, ikuti [[Wilayah Sync|panduan wilayah Sync brankas]].

![[Obsidian Sync/Keamanan dan privasi#^sync-geo-regions]]

## Langkah selanjutnya

Berikut adalah beberapa dokumen yang disarankan untuk dibaca selanjutnya.

- Jelajahi lebih lanjut tentang [[Pengaturan Sync dan sinkronisasi selektif|memilih file dan pengaturan untuk disinkronkan]].
- Pelajari apa yang terjadi jika brankas jarak jauh Anda [[Riwayat versi|penuh]].
- [[Berkolaborasi di vault bersama]] dengan pengguna Obsidian Sync lainnya.
- Lihat [[Pertanyaan yang sering diajukan|FAQ Sync]] untuk beberapa jawaban atas pertanyaan umum.
