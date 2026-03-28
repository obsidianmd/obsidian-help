---
permalink: plugins/file-recovery
publish: true
mobile: true
description: File Recovery membantu melindungi pekerjaan Anda dari kehilangan data yang tidak disengaja dengan menyimpan snapshot catatan Anda secara otomatis pada interval waktu yang teratur.
aliases:
  - Plugin/Pemulih berkas
---
Pemulih berkas adalah [[Plugin inti|plugin inti]] yang melindungi pekerjaan Anda dari penghapusan tidak sengaja, kerusakan file, atau perubahan yang tidak diinginkan dengan secara otomatis menyimpan snapshot lengkap dari catatan Anda secara berkala. Pemulih berkas bukan solusi pencadangan yang lengkap, dan kami merekomendasikan juga untuk [[Cadangkan file Obsidian Anda|mencadangkan]] file Obsidian Anda secara terpisah.

Untuk menghindari penggunaan [[#Penyimpanan dan performa|terlalu banyak ruang]], Obsidian menyimpan snapshot selama jumlah hari tertentu sebelum menghapusnya. Snapshot menangkap seluruh konten file Anda, bukan hanya perubahan, sehingga Anda dapat memulihkan versi sebelumnya.

> [!info]+ Info
> Secara bawaan, snapshot disimpan minimal setiap 5 menit satu sama lain, dan disimpan selama 7 hari. Anda dapat mengonfigurasi kedua interval tersebut di **[[Pengaturan]] → Plugin inti → Pemulih berkas**.

Snapshot disimpan di [[Cara Obsidian menyimpan data#Pengaturan global|Pengaturan global]], di luar brankas, untuk mengantisipasi kehilangan data terkait brankas. Ini berarti snapshot disimpan dengan alur absolut ke catatan tersebut. Jika Anda baru saja memindahkan brankas, Anda mungkin perlu memindahkannya kembali ke lokasi saat snapshot dibuat.

> [!tip] Jika Anda menggunakan [[Pengantar Obsidian Sync|Obsidian Sync]] atau [[Sinkronisasi catatan antar perangkat|layanan sinkronisasi lainnya]], snapshot Pemulih berkas tidak akan disinkronkan antar perangkat. Snapshot bersifat spesifik perangkat dan tetap lokal di setiap perangkat.

## Memulihkan snapshot

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, pilih **Pemulih berkas** di bawah **Plugin inti**.
3. Di bawah **Snapshot**, pilih **Tampilan**.
4. Di kolom nama file, mulailah mengetik nama file yang ingin Anda pulihkan, dan Anda akan melihat daftar saran.
5. Pilih file tersebut, tekan Enter, dan Anda akan melihat daftar snapshot yang tersedia.
6. Pilih snapshot yang ingin Anda pulihkan.
    1. Jika Anda ingin menyalin dan menempel ke catatan baru, pilih tombol **Salin**.
    2. Jika Anda ingin memulihkan file sepenuhnya, pilih tombol **Pulihkan**.
7. Anda dapat secara opsional menampilkan perbedaan antar snapshot dengan mengaktifkan **Tampilkan perbedaan**. Ini menampilkan konten apa yang ditambahkan, dihapus, atau diubah antar versi snapshot.

## Menghapus riwayat snapshot

> [!danger] Menghapus riwayat snapshot akan menghapus semua snapshot di brankas Anda secara permanen.

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, pilih **Pemulih berkas** di bawah **Plugin inti**.
3. Di bawah **Bersihkan riwayat**, pilih **Hapus**.
4. Konfirmasi bahwa Anda ingin menghapus semua snapshot, dengan mengklik **Hapus**.

## Penyimpanan dan performa

Snapshot pemulih berkas biasanya menggunakan ruang disk minimal, karena hanya menyimpan file yang berubah. Namun, di brankas dengan banyak file besar atau pengeditan yang sering, snapshot dapat menumpuk seiring waktu. Pantau penggunaan penyimpanan Anda dan sesuaikan periode penyimpanan jika diperlukan.

## Batasan

- **Mode lockdown Apple**: Fitur ini tidak tersedia di perangkat Apple dengan [mode Lockdown](https://support.apple.com/en-us/105120) yang diaktifkan kecuali Obsidian dikecualikan.
- **Jenis file**: Hanya file `.md` dan `.canvas` yang dapat dipulihkan menggunakan Pemulih berkas.
- **Lokasi brankas**: Jika Anda memindahkan brankas ke lokasi berbeda tanpa menggunakan [[Kelola brankas#Pindahkan brankas ke folder lain|pengalih brankas]], snapshot yang ada mungkin tidak dapat diakses.
