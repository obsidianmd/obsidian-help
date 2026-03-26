---
permalink: sync/faq
publish: true
mobile: true
description: Halaman ini mencantumkan beberapa pertanyaan umum terkait pertanyaan dan batasan untuk Obsidian Sync.
---
Halaman ini mencantumkan beberapa pertanyaan umum terkait pertanyaan dan batasan untuk [[Pengantar Obsidian Sync|Obsidian Sync]].

## Umum

### Sistem operasi apa saja yang didukung Obsidian Sync?

Obsidian Sync mendukung setiap platform yang dapat menjalankan Obsidian. Saat ini mencakup Windows, macOS, Linux, Android, dan iOS.

### Apakah Obsidian berfungsi dengan Lockdown Mode Apple?

Obsidian dapat digunakan dalam [Lockdown Mode](https://support.apple.com/en-us/105120) selama Obsidian ditambahkan sebagai pengecualian.

### Jenis data apa yang disinkronkan?

Secara bawaan, catatan Obsidian, gambar, dan [[Folder konfigurasi]] Anda akan disinkronkan.

Anda dapat menambahkan opsi sinkronisasi tambahan untuk PDF, file audio, file video, dan file lainnya saat Anda mengatur [[Pengaturan Sync dan sinkronisasi selektif]].

### Berapa banyak penyimpanan yang saya miliki?

Batas penyimpanan tergantung pada [[Paket dan batas penyimpanan#Paket|paket Sync]] Obsidian Anda. Jumlah penyimpanan maksimum adalah 100 GB. Batas penyimpanan ini mencakup [[Riwayat versi|riwayat versi]].

Anda dapat melihat **Vault size** di aplikasi Obsidian dengan membuka **[[Pengaturan]] → Sync**.

### Berapa banyak brankas jarak jauh yang dapat saya miliki?

Jumlah brankas jarak jauh yang dapat Anda miliki ditentukan berdasarkan [[Paket dan batas penyimpanan#Paket|paket Sync]] Anda. Paket Standard mencakup 1 brankas, paket Plus mencakup 10 brankas. Vault yang dibagikan dengan Anda tidak dihitung terhadap batas brankas Anda.

### Seberapa besar setiap brankas jarak jauh?

Tidak ada batas per brankas. Batas penyimpanan terkait dengan akun Anda yang digunakan dan dapat diterapkan di semua brankas Anda.

### Berapa banyak orang yang dapat saya ajak berbagi brankas jarak jauh?

Anda dapat [[Berkolaborasi di vault bersama|berbagi brankas jarak jauh]] dengan hingga 20 orang.

### Seberapa besar setiap file?

Ukuran file maksimum tergantung pada [[Paket dan batas penyimpanan|paket Obsidian Sync]] Anda. Untuk paket Standard batasnya adalah 5 MB. Untuk paket Plus batasnya adalah 200 MB per file.

### Apakah data saya disinkronkan di latar belakang?

Tidak, file hanya disinkronkan saat Obsidian sedang berjalan.

### Apakah Obsidian Sync memuat ulang pengaturan saya secara langsung?

Obsidian Sync dapat secara otomatis memuat ulang pengaturan tertentu, tetapi ada beberapa batasan. Untuk detail lebih lanjut, lihat [[Pengaturan Sync dan sinkronisasi selektif#Memuat ulang pengaturan|Memuat ulang pengaturan]].

### Bisakah saya menggunakan sinkronisasi pihak ketiga bersama Obsidian Sync?

Kami tidak menyarankan menggunakan layanan sinkronisasi pihak ketiga bersamaan dengan Obsidian Sync. Menggunakan layanan pihak ketiga dan Obsidian Sync di beberapa perangkat dapat menyebabkan konflik, yang mengakibatkan file duplikat atau rusak.

Layanan penyimpanan cloud seperti OneDrive dan Dropbox menawarkan fitur "Files on-demand" atau "Online-only files", yang mengunduh file hanya saat diperlukan dan menghapusnya secara lokal untuk menghemat ruang. Namun, karena file-file ini tidak selalu tersedia secara lokal, Obsidian Sync akan menginterpretasikannya sebagai terhapus, yang menyebabkan penghapusannya dari brankas jarak jauh Anda.

Untuk menghindari masalah ini, nonaktifkan unduhan sesuai permintaan saat menggunakan Obsidian Sync dengan layanan seperti OneDrive atau Dropbox. Anda perlu memastikan bahwa pengaturan layanan pihak ketiga dikonfigurasi untuk selalu menyimpan file di perangkat.

## Retensi data

Ini adalah pertanyaan yang sering diajukan tentang retensi data Obsidian. Untuk jawaban yang lebih mendalam, lihat [[Obsidian Sync/Keamanan dan privasi|Keamanan dan privasi]].

### Berapa lama Anda menyimpan riwayat versi?

[[Riwayat versi]] tergantung pada [[Paket dan batas penyimpanan|paket Obsidian Sync]] Anda. Pada paket Standard, catatan Anda disimpan selama 1 bulan. Pada paket Plus, catatan Anda disimpan selama 12 bulan. Setelah periode waktu ini, versi yang lebih lama akan dihapus.

Versi lama dari [[Lampiran|lampiran]] disimpan selama dua minggu.

### Berapa lama Anda menyimpan data saya setelah langganan saya berakhir?

Kami menyimpan data di brankas jarak jauh Anda, termasuk riwayat versi, selama satu bulan setelah langganan Anda berakhir. Brankas lokal di perangkat Anda tidak terpengaruh.

Selama Anda memperbarui dalam satu bulan, seharusnya tidak ada dampak pada penggunaan Anda. Jika Anda memperbarui setelah satu bulan, ketika brankas jarak jauh Anda telah dihapus, Anda dapat [[Menyiapkan Obsidian Sync|membuat brankas jarak jauh baru]] dan menghubungkan brankas lokal Anda.

### Apakah Anda menyimpan data saya jika saya mengembalikan dana layanan langganan?

Tidak. Data langsung dihapus dari server Obsidian Sync. Data di [[Vault lokal dan remote|brankas lokal]] Anda tidak terpengaruh.
