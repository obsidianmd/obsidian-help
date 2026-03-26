---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian berjalan sebagai aplikasi lokal di setiap perangkat anggota tim Anda. Obsidian dirancang untuk bekerja baik secara online maupun offline, dengan aman dan privat, serta memberi Anda kendali penuh atas data tim Anda. Obsidian tidak tersedia sebagai aplikasi berbasis web, oleh karena itu Anda perlu menerapkan aplikasi ini ke anggota tim Anda.

## Memasang dan memperbarui Obsidian

Tim Anda dapat mengunduh Obsidian dari [halaman Unduhan](https://obsidian.md/download) kami. Rilis juga tersedia di [halaman rilis GitHub](https://github.com/obsidianmd/obsidian-releases/releases) kami yang menyertakan tautan ke [log perubahan](https://obsidian.md/changelog/).

> [!tip] Untuk pengguna Windows yang membutuhkan penginstal sistem, Universal `.exe` menyertakan opsi untuk memasang Obsidian untuk semua pengguna.

Jika pembaruan otomatis diaktifkan di aplikasi, versi mendatang akan dipasang secara otomatis saat pengguna memulai ulang Obsidian. Selain itu, kami merekomendasikan untuk secara berkala melakukan [[Perbarui Obsidian#Pembaruan penginstal|pembaruan penginstal]] untuk menerima pembaruan terbaru pada kerangka Electron, termasuk perbaikan keamanan.

Jika Anda ingin mengetahui cara membatasi akses jaringan ke Obsidian selama proses ini, tinjau [[Pertimbangan keamanan untuk tim#Jaringan dan akses|jaringan dan akses]].

## Menyesuaikan Obsidian

Obsidian mudah dimodifikasi sesuai kebutuhan tim Anda. Dengan API yang ekstensif dan ekosistem pengguna yang besar, Obsidian menawarkan akses ke berbagai plugin, tema, dan alat pelengkap.

Untuk pertanyaan terkait keamanan mengenai topik ini, silakan merujuk ke [[Pertimbangan keamanan untuk tim]].

### Folder konfigurasi

[[Folder konfigurasi]] adalah tempat [[Glosarium#Brankas|brankas]] Obsidian menyimpan pengaturan aplikasinya. Secara bawaan, folder ini bernama `.obsidian`, tetapi Anda memiliki fleksibilitas untuk [[Folder konfigurasi#Mengubah folder konfigurasi Anda|mengubah nama folder konfigurasi]] sesuai preferensi Anda.

Kami merekomendasikan untuk membuat templat standar dari folder konfigurasi yang akan diterapkan di seluruh perangkat tim Anda.

### Plugin

[[Plugin inti]] adalah fitur opsional yang dibuat oleh tim Obsidian. Fitur-fitur ini terintegrasi dalam basis kode aplikasi inti dan dapat diaktifkan atau dinonaktifkan.

[[Plugin komunitas]] adalah fitur pihak ketiga yang ditambahkan ke aplikasi Obsidian, dan dapat dipasang melalui direktori komunitas. Plugin pihak ketiga memanfaatkan [Obsidian API](https://github.com/obsidianmd/obsidian-api). Plugin terletak di folder `.obsidian/plugins` dalam brankas, dan dapat dipasang secara manual di lokasi ini.

### Tema dan cuplikan

[[Tema]] mengubah tampilan visual antarmuka Obsidian. Seperti plugin, tema dapat diunduh dari direktori komunitas kami. Tema terletak di folder `.obsidian/themes` dalam brankas.

[[Cuplikan CSS|Cuplikan]] adalah file `.css` kecil yang memodifikasi aspek visual antarmuka Obsidian. Dalam beberapa kasus, cuplikan juga dapat menambahkan peningkatan fungsional. Cuplikan terletak di folder `.obsidian/snippets` dalam brankas.

## Pertanyaan yang sering diajukan

Untuk pertanyaan tentang manajemen akun dan keamanan, silakan merujuk ke [[Pertimbangan keamanan untuk tim#Keamanan akun|keamanan akun]].

### Penerapan

**Bisakah saya menerapkan lisensi di beberapa instalasi?**
Saat ini, kami tidak mendukung penerapan lisensi melalui skrip penerapan, seperti dalam file `.json`. Jika Anda tertarik dengan fitur ini untuk tim Anda, silakan ajukan [permintaan fitur](https://forum.obsidian.md/c/feature-requests/8).

**Bisakah Obsidian mengunci fitur atau konfigurasi tertentu melalui pengaturan atau flag aplikasi?**
Saat ini Anda dapat melakukan ini dengan memblokir akses edit ke folder `.obsidian`, atau file dan folder tertentu di dalamnya, seperti yang dijelaskan di atas. Jika Anda tertarik dengan kontrol akses lebih lanjut untuk tim Anda, silakan ajukan [permintaan fitur](https://forum.obsidian.md/c/feature-requests/8).
