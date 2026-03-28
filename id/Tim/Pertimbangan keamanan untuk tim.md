---
permalink: teams/security
cssclasses:
  - soft-embed
---
Halaman [Keamanan](https://obsidian.md/security) kami mengumpulkan informasi tentang bagaimana Obsidian melindungi data Anda. Halaman ini juga menjadi tempat untuk audit keamanan yang diselesaikan oleh pihak ketiga.

## Pertimbangan

Obsidian dirancang untuk berfungsi sebagai aplikasi offline dan mandiri. Obsidian juga mendukung plugin dan tema kustom. Selain itu, kami menyediakan dukungan resmi dan tidak resmi untuk berbagai layanan sinkronisasi file.

Jika Anda tidak berencana menggunakan plugin atau tema komunitas, atau [[Pengantar Obsidian Sync|Obsidian Sync]] atau [[Pengantar Obsidian Publish|Obsidian Publish]], prosedur standar Anda untuk mengamankan aplikasi akan berlaku. Namun, jika Anda berencana menggunakan salah satu fitur ini, kami merekomendasikan untuk mengevaluasi secara menyeluruh kesesuaiannya untuk lingkungan kerja Anda.

## Plugin dan tema komunitas

Silakan tinjau halaman [[Keamanan plugin]] selain bagian ini.

Tim Obsidian meninjau semua plugin dan tema komunitas yang diajukan ke direktori resmi, melalui [repositori rilis](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc) kami. Kami tidak meninjau item komunitas yang belum diajukan ke direktori resmi.

Kami tidak memiliki toko komunitas untuk [[Cuplikan CSS]]. File-file ini biasanya diperoleh dari dalam [Komunitas Obsidian](https://obsidian.md/community) kami atau dari repositori GitHub publik.

Kami mewajibkan penggabungan aset dalam cuplikan CSS dan tema. Namun, kami membuat pengecualian untuk [Google Fonts](https://fonts.google.com/) untuk menjaga performa di perangkat seluler, di mana dampak penggabungan font lebih terasa.

## Jaringan dan akses

Meskipun memprioritaskan pendekatan lokal-pertama dari aplikasi kami, Obsidian melakukan panggilan jaringan berdasarkan layanan dan fitur yang Anda gunakan. Koneksi jaringan ini dapat dinonaktifkan melalui firewall domain atau penguncian aplikasi.

Obsidian membuat koneksi jaringan ini pada HTTPS port 443.

Berikut adalah daftar koneksi jaringan yang dibuat Obsidian.

### Koneksi bersumber dari Obsidian

- **Pembaruan akses awal**: Menggunakan `releases.obsidian.md`.
- **Manajemen akun dan lisensi**: Saat mengakses akun Obsidian Anda di Pengaturan dan menerapkan Lisensi Komersial, kami memanggil `api.obsidian.md`.
- **Obsidian Sync**: Digunakan untuk menyinkronkan catatan Anda antar perangkat.
	- `sync-xx.obsidian.md`, di mana `xx` adalah angka antara 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` dan `publish-xx.obsidian.md`, di mana `xx` adalah angka.
    2. Frontend: `publish.obsidian.md`.

### Koneksi bersumber dari GitHub

Obsidian membuat permintaan jaringan ke `github.com` dan `raw.githubusercontent.com`.

- **Rilis publik**: Jika pembaruan otomatis diaktifkan, Obsidian memeriksa GitHub untuk rilis publik.
- **Tema dan plugin pihak ketiga**:
    - Pemeriksaan dilakukan setiap 12 jam dari waktu mulai aplikasi untuk mengambil file yang di-host di GitHub yang digunakan untuk "penghentian plugin." File ini membantu menonaktifkan versi tertentu dari plugin yang diketahui bermasalah, menyebabkan kehilangan data, atau berpotensi rentan atau berbahaya secara jarak jauh.
    - Plugin yang diaktifkan dapat menghasilkan lalu lintas jaringan di luar kendali Obsidian dan GitHub.

### Koneksi lainnya

- **Konten online yang disematkan**: Saat membuka catatan yang menyematkan konten online, seperti gambar (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Permintaan DNS**: Jika nama host perlu diselesaikan sebelum membuat koneksi, termasuk DNS over HTTPS. Lihat [dokumentasi Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) untuk informasi lebih lanjut.

## Pertanyaan yang sering diajukan

### Keamanan akun

**Apakah Obsidian mendukung Single Sign-On (SSO)?**
Obsidian tidak mendukung SSO. Dalam kebanyakan kasus penggunaan, Obsidian tidak memerlukan akun atau proses masuk di lingkungan kerja Anda, kecuali Anda menggunakan [[Pengantar Obsidian Publish|Obsidian Publish]] atau [[Pengantar Obsidian Sync|Obsidian Sync]].

**Apakah Obsidian mendukung Multi-Factor Authentication (MFA)?**
Obsidian mendukung [[Autentikasi 2 faktor]] (2FA) untuk akun Obsidian, tetapi tidak mendukung 2FA untuk membuka dan menggunakan aplikasi dasar. Pengguna [[Pengantar Obsidian Sync|Obsidian Sync]] dan [[Pengantar Obsidian Publish|Obsidian Publish]] yang telah mengaktifkan 2FA akan diminta untuk mengonfirmasi kunci 2FA mereka saat pertama kali masuk ke aplikasi.

### Penilaian dan sertifikasi

**Apakah Anda menerima penilaian keamanan dari perusahaan kami?**
Kami memerlukan jumlah pesanan pembelian minimum yang dikutip sebelum mempertimbangkan untuk menyelesaikan penilaian keamanan. Penilaian ini sering memakan waktu dan mungkin tidak berlaku untuk aplikasi offline seperti Obsidian, karena biasanya ditujukan untuk layanan berbasis cloud.

Namun, Anda dapat membebaskan jumlah pesanan pembelian yang dikutip ini dengan menyetujui untuk membayar biaya retensi. Silakan hubungi [[Bantuan dan dukungan#Hubungi dukungan Obsidian|dukungan Obsidian]] untuk menanyakan tentang opsi ini.

**Apakah Anda memiliki sertifikasi yang diakui terkait Keamanan Informasi atau standar kualitas, seperti ISO27001, NIST, COBIT, atau sertifikasi ISO atau CSA lainnya?**
Tidak saat ini. Ini mungkin sesuatu yang akan kami jelajahi di masa depan, tetapi untuk saat ini, fokus kami ada pada [audit keamanan](https://obsidian.md/security) kami.
