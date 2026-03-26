---
permalink: import/onenote
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Microsoft OneNote menggunakan [[Importer|plugin Importer]]. Ini akan mengonversi data OneNote Anda menjadi file Markdown yang tahan lama, yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

> [!Warning]
> Hanya buku catatan yang dimiliki oleh akun pribadi Anda yang dapat diimpor. Catatan bersama, atau akun dari akun kerja dan sekolah tidak didukung.

## Impor data OneNote Anda ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Importer]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Pergi ke **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Microsoft OneNote**.
6. Klik **Masuk** untuk membuka browser web Anda ke halaman masuk Microsoft. Masukkan kredensial akun Microsoft Anda yang berisi Buku Catatan OneNote Anda. Informasi lebih lanjut tentang proses masuk Microsoft tersedia di bawah.
7. Klik **Terima** untuk memberikan izin kepada Obsidian untuk melihat Buku Catatan OneNote Anda.
8. Klik **Buka Tautan** untuk mengizinkan browser Anda mengarahkan Anda ke aplikasi Obsidian.
9. Di aplikasi Obsidian, dialog Importer sekarang akan menampilkan bahwa Anda telah masuk dan mencantumkan Buku Catatan dan Bagian OneNote Anda. Centang bagian yang ingin Anda impor.

![[OneNote-Importer-Select-Sections.png]]

10. Klik **Impor** dan tunggu hingga impor selesai.
11. Selesai!

## Pemecahan masalah

### Tidak ada bagian atau buku catatan yang muncul

Pastikan buku catatan yang ingin Anda impor telah disinkronkan ke OneDrive dan terlihat di OneNote Web. Buku catatan tersebut harus dimiliki oleh Anda (buku catatan bersama yang ditulis oleh orang lain tidak didukung).

Jika bagian tertentu tidak muncul, pastikan bagian tersebut bukan bagian yang terkunci — bagian terkunci tidak terlihat tanpa menghapus kuncinya terlebih dahulu.

### Catatan yang diimpor kosong atau kontennya hilang

Masalah ini mungkin terjadi pada buku catatan yang jarang Anda gunakan. Untuk mengatasi masalah ini, ikuti langkah-langkah berikut:

1. Buka [OneNote Web](https://onenote.com/notebooks) di browser Anda.
2. **Klik kanan** pada Buku Catatan yang kontennya hilang.
3. Pilih **Ekspor Buku Catatan** dari menu.
4. **Ekstrak** file yang baru saja Anda unduh ke dalam sebuah folder.
5. Unggah buku catatan OneNote Anda [di sini](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Buka **Obsidian Importer** dan coba impor lagi

Jika Anda telah mengikuti tips ini dan masalah Anda tetap belum terselesaikan, mungkin ada masalah sementara dengan server Microsoft. Jika demikian, tunggu beberapa menit dan coba lagi. Jika masalah berlanjut, silakan buka issue di [repositori GitHub Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Privasi

Plugin Obsidian Importer menggunakan [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) untuk mengautentikasi dengan akun Microsoft Anda dan mengimpor buku catatan OneNote Anda. Ini memberikan token akses jangka pendek ke akun Anda yang hanya digunakan dari komputer Anda dan tidak pernah disimpan. Setelah impor selesai, Anda dapat secara opsional mencabut token dari [halaman aplikasi & layanan Microsoft](https://account.live.com/consent/Manage).
