---
permalink: plugin-security
---
Tim Obsidian menganggap keamanan dengan serius. Halaman ini menjelaskan risiko yang terlibat saat memasang plugin komunitas, dan apa yang dilakukan tim Obsidian untuk mengatasinya.

## Mode terbatas

Secara bawaan, Obsidian berjalan dalam Mode Terbatas untuk mencegah eksekusi kode pihak ketiga. Hanya nonaktifkan Mode Terbatas jika Anda mempercayai pembuat plugin yang Anda pasang.

Untuk menonaktifkan Mode Terbatas:

1. Buka **[[Pengaturan]]**.
2. Di menu samping, pilih **Plugin komunitas**.
3. Pilih **Aktifkan plugin komunitas**.

Untuk mengaktifkan Mode Terbatas:

1. Buka **[[Pengaturan]]**.
2. Di menu samping, pilih **Plugin komunitas**.
3. Di samping **Mode terbatas**, pilih **Aktifkan**.

Plugin yang terpasang tetap ada di brankas Anda meskipun Anda mengaktifkan Mode Terbatas, tetapi diabaikan oleh Obsidian.

## Kemampuan plugin

Karena keterbatasan teknis, Obsidian tidak dapat secara andal membatasi plugin pada izin atau tingkat akses tertentu. Ini berarti plugin akan mewarisi tingkat akses Obsidian. Oleh karena itu, pertimbangkan contoh berikut tentang apa yang dapat dilakukan plugin komunitas:

- Plugin komunitas dapat mengakses file di komputer Anda.
- Plugin komunitas dapat terhubung ke internet.
- Plugin komunitas dapat memasang program tambahan.

> [!tip] 
> Jika Anda bekerja dengan data sensitif dan ingin memasang plugin komunitas, kami menyarankan Anda melakukan audit keamanan independen pada plugin tersebut sebelum menggunakannya.

## Proses peninjauan plugin

Plugin komunitas menjalani peninjauan awal saat dikirimkan ke toko plugin. Semua plugin harus mematuhi [Kebijakan Pengembang Obsidian](https://docs.obsidian.md/Developer+policies).

Tim Obsidian berukuran kecil dan tidak dapat meninjau secara manual setiap rilis baru dari plugin komunitas. Sebagai gantinya, kami mengandalkan bantuan komunitas untuk mengidentifikasi dan melaporkan masalah pada plugin.

- Jika Anda menemukan kerentanan keamanan kecil dalam plugin komunitas, lihat `security.md` atau `readme.md` pembuat plugin untuk cara melaporkannya. Untuk kerentanan kategori Kritis, harap laporkan juga masalah tersebut ke [[Bantuan dan dukungan#Hubungi dukungan Obsidian|dukungan Obsidian]].
- Jika Anda mencurigai bahwa plugin komunitas bersifat berbahaya, laporkan ke [[Bantuan dan dukungan#Hubungi dukungan Obsidian|dukungan Obsidian]], atau dengan mengirim DM ke moderator kami.
