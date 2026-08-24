---
permalink: import/onenote
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Microsoft OneNote menggunakan [[Impor|plugin Importer]]. Ini mengonversi data OneNote Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

Obsidian menawarkan dua cara untuk mengimpor data OneNote Anda:

1. **Akun Microsoft** masuk ke akun Microsoft Anda dan mengimpor buku catatan yang disinkronkan ke OneDrive. Memerlukan koneksi internet.
2. **Impor file** menggunakan file ekspor OneNote (`.onepkg` dan `.one`). Tidak memerlukan akun atau koneksi internet, dan berfungsi untuk buku catatan yang tidak pernah disinkronkan.

## Impor dari akun Microsoft Anda

> [!Warning]
> Hanya buku catatan yang dimiliki oleh akun Anda yang dapat diimpor. Buku catatan yang dibagikan orang lain kepada Anda tidak didukung, dan akun kerja atau sekolah mungkin memerlukan persetujuan organisasi Anda untuk mengakses.

Anda memerlukan plugin resmi Obsidian [[Impor]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Pergi ke **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Microsoft OneNote**.
6. Klik **Masuk** untuk membuka browser web Anda ke halaman masuk Microsoft. Masukkan kredensial akun Microsoft Anda yang berisi Buku Catatan OneNote Anda. Informasi lebih lanjut tentang proses masuk Microsoft tersedia di bawah.
7. Klik **Terima** untuk memberikan izin kepada Obsidian untuk melihat Buku Catatan OneNote Anda.
8. Klik **Buka Tautan** untuk mengizinkan browser Anda mengarahkan Anda ke aplikasi Obsidian.
9. Di aplikasi Obsidian, dialog Importer sekarang akan menampilkan bahwa Anda telah masuk dan mencantumkan Buku Catatan dan Bagian OneNote Anda. Centang bagian yang ingin Anda impor.
10. Pilih **Impor** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari halaman Anda.
11. Pilih **Impor** lagi dan tunggu hingga impor selesai.

Jika buku catatan Anda milik akun kerja atau sekolah, OneNote mungkin menolak akses plugin ke buku catatan tersebut setelah Anda masuk. Ketika hal itu terjadi, tombol **Gunakan akses kerja atau sekolah** akan muncul di samping **Keluar**. Gunakan tombol tersebut untuk masuk kembali dengan izin yang lebih luas yang diperlukan oleh akun tersebut. Organisasi Anda mungkin harus menyetujui izin tersebut sebelum bisa berfungsi.

### Pemecahan masalah

#### Tidak ada bagian atau buku catatan yang muncul

Pastikan buku catatan yang ingin Anda impor telah disinkronkan ke OneDrive dan terlihat di OneNote Web. Buku catatan tersebut harus dimiliki oleh Anda (buku catatan bersama yang ditulis oleh orang lain tidak didukung).

Jika bagian tertentu tidak muncul, pastikan bagian tersebut bukan bagian yang terkunci, karena bagian terkunci tidak terlihat tanpa menghapus kuncinya terlebih dahulu.

Jika itu adalah buku catatan kerja atau sekolah, lihat catatan tentang **Gunakan akses kerja atau sekolah** di atas.

#### Catatan yang diimpor kosong atau kontennya hilang

Masalah ini mungkin terjadi pada buku catatan yang jarang Anda gunakan. Untuk mengatasi masalah ini, ikuti langkah-langkah berikut:

1. Buka [OneNote Web](https://onenote.com/notebooks) di browser Anda.
2. **Klik kanan** pada Buku Catatan yang kontennya hilang.
3. Pilih **Ekspor Buku Catatan** dari menu.
4. **Ekstrak** file yang baru saja Anda unduh ke dalam sebuah folder.
5. Unggah buku catatan OneNote Anda [di sini](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Buka **Obsidian Importer** dan coba impor lagi

Jika Anda telah mengikuti tips ini dan masalah Anda tetap belum terselesaikan, mungkin ada masalah sementara dengan server Microsoft. Jika demikian, tunggu beberapa menit dan coba lagi. Jika masalah berlanjut, silakan buka issue di [repositori GitHub Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Impor file OneNote (.one, .onepkg)

Impor file adalah cara alternatif untuk mengimpor data OneNote Anda. Ini membaca file ekspor yang ditulis OneNote sendiri, sehingga tidak memerlukan akun Microsoft dan tidak memerlukan koneksi internet. Gunakan untuk buku catatan yang hanya disimpan di komputer Anda, buku catatan yang tidak dapat dijangkau akun Anda, atau ketika Anda lebih memilih untuk tidak masuk.

### Ekspor buku catatan Anda dari OneNote

Kami merekomendasikan mengekspor setiap buku catatan sebagai **OneNote Package** (`.onepkg`). Satu paket berisi setiap bagian dari buku catatan, sehingga Anda dapat mengekspor dan mengimpor buku catatan dalam satu langkah, dan Importer akan mencantumkan bagian-bagiannya untuk Anda pilih.

Ekspor hanya tersedia di **OneNote untuk Windows**, aplikasi desktop yang disertakan dengan Microsoft 365. Aplikasi OneNote untuk Mac dan aplikasi OneNote untuk Windows 10 yang lebih lama tidak dapat mengekspor ke format ini.

1. Buka buku catatan yang ingin Anda ekspor di OneNote untuk Windows.
2. Buka **File → Ekspor**.
3. Di bagian **Ekspor saat ini** pilih **Buku Catatan**.
4. Di bagian **Pilih format** pilih **OneNote Package (\*.onepkg)**.
5. Klik **Ekspor** dan pilih lokasi untuk menyimpan file.
6. Ulangi untuk setiap buku catatan yang ingin Anda impor.

Untuk mengekspor satu bagian saja, pilih **Bagian** di langkah 3 dan **OneNote 2010-2016 Section (\*.one)** di langkah 4.

Anda juga dapat mengimpor file bagian yang sudah disimpan OneNote di disk, tanpa perlu mengekspor apa pun:

- Buku catatan yang disimpan di komputer Anda berada di `Documents\OneNote Notebooks`, satu file `.one` per bagian.
- Cadangan buku catatan yang disinkronkan berada di `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Impor file OneNote Anda

Anda memerlukan plugin resmi Obsidian [[Impor]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Pergi ke **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Microsoft OneNote (.one, .onepkg)**.
6. Pilih file `.onepkg` dan `.one` yang ingin Anda impor. Anda dapat memilih lebih dari satu file sekaligus, sehingga semua buku catatan Anda dapat diimpor bersamaan.
7. Di bagian **Bagian untuk diimpor**, bagian-bagian yang ditemukan dalam file tersebut akan dicantumkan, dengan semuanya tercentang. Hapus centang pada yang tidak Anda inginkan.
8. Secara opsional, pilih **Folder output** untuk impor, di mana lampiran harus disimpan, dan apa yang harus terjadi pada **Catatan yang sudah ada** jika Anda mengimpor buku catatan yang sama lagi.
9. Pilih **Impor** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari halaman Anda.
10. Pilih **Impor** lagi dan tunggu hingga impor selesai.

Setiap bagian menjadi folder, dan setiap halaman di dalamnya menjadi catatan. Subhalaman disimpan dalam folder yang dinamai sesuai halaman di atasnya, yang menjaga struktur yang ditampilkan OneNote dan mencegah dua subhalaman dengan nama yang sama bertabrakan. Halaman di tempat sampah buku catatan tidak diimpor.

### Batasan

- Bagian yang dilindungi kata sandi disimpan dalam keadaan terenkripsi, dan halamannya dilewati. Hapus kata sandi di OneNote dan ekspor lagi untuk mengimpornya.
- File yang dilindungi hak hanya dapat dibuka oleh akun yang diizinkan oleh kebijakan, dan tidak dapat dibaca oleh Importer.

## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya cara data OneNote Anda diimpor.

![[Template Importer#Variables]]

## Privasi

Jika Anda memilih untuk mengimpor menggunakan Akun Microsoft Anda, plugin Obsidian Importer menggunakan [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) untuk mengautentikasi dan mengimpor buku catatan OneNote Anda. Ini memberikan token akses jangka pendek ke akun Anda yang hanya digunakan dari komputer Anda dan tidak pernah disimpan. Setelah impor selesai, Anda dapat secara opsional mencabut token dari [halaman aplikasi & layanan Microsoft](https://account.live.com/consent/Manage).

Impor file tidak pernah terhubung ke Microsoft: file yang Anda pilih dibaca di komputer Anda, tanpa koneksi jaringan apa pun.
