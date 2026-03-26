---
permalink: sync/plans
publish: true
mobile: true
description: Pelajari tentang berbagai opsi paket yang kami sediakan untuk Obsidian Sync.
---
## Paket

Untuk menyinkronkan catatan Anda dengan [[Pengantar Obsidian Sync|Obsidian Sync]], Anda memerlukan paket berlangganan. Anda dapat membeli paket Sync dengan masuk ke [akun Anda](https://obsidian.md/account/sync). Lihat [halaman Sync](https://obsidian.md/sync) untuk informasi harga.

Berikut perbandingan antara paket Standard dan paket Plus:

|                                                                   | Sync Standard | Sync Plus       |
| ----------------------------------------------------------------- | ------------- | --------------- |
| Vault disinkronkan                                                | 1             | 10              |
| Ukuran file maksimum                                              | 5 MB          | 200 MB          |
| Total penyimpanan                                                 | 1 GB          | 10 GB hingga 100 GB |
| [[Riwayat versi]]                                                 | 1 bulan       | 12 bulan        |
| Perangkat                                                         | Tidak terbatas | Tidak terbatas  |
| [[Berkolaborasi di vault bersama\|Vault bersama]]                 | Ya            | Ya              |

## Batas penyimpanan

Jumlah data yang dapat Anda simpan menggunakan [[Pengantar Obsidian Sync|Obsidian Sync]] bergantung pada paket berlangganan Anda. Pada paket Sync Plus, Anda dapat membeli penyimpanan tambahan hingga 100 GB melalui [dasbor akun Anda](https://obsidian.md/account/sync). Lihat [[Pertanyaan yang sering diajukan]] untuk detail lebih lanjut.

Ada satu batas penyimpanan tingkat akun untuk semua catatan di seluruh vault Anda. [[Riwayat versi]] dan [[Lampiran|lampiran]] juga dihitung terhadap batas penyimpanan akun Anda.

Ketika Anda mencapai batas penyimpanan akun, plugin Sync akan berhenti menyinkronkan file, dan Anda akan diminta untuk membersihkan brankas jarak jauh Anda.

### Identifikasi dan hapus file besar

Untuk mengidentifikasi dan menghapus file besar dari vault:

1. Buka **[[Pengaturan]] → Sync**.
2. Pilih **Tampilkan berkas-berkas terbesar** di samping **Ukuran vault melebihi batas**.
	1. Jika Anda tidak melihat **Ukuran vault melebihi batas**, berarti ==Anda belum mencapai batas ukuran== tersebut.
3. Tutup modal **Tampilkan berkas-berkas terbesar**.
4. Hapus beberapa file besar yang tidak lagi Anda perlukan.
5. Tunggu Obsidian Sync menyelesaikan tugasnya. Ini bisa memakan waktu cukup lama.
6. Buka **[[Pengaturan]] → Sync**.
7. Pilih **Bersihkan** di samping **Ukuran vault melebihi batas**. Ini akan menghapus file yang telah dihapus dari brankas jarak jauh untuk membebaskan ruang.

Setelah pembersihan disinkronkan ke server, Obsidian Sync seharusnya kembali berfungsi.

### Buat brankas jarak jauh baru

Anda dapat **membuat brankas jarak jauh baru** untuk mengecualikan file besar sebelum menyinkronkan. Riwayat versi untuk file Anda akan direset jika Anda membuat brankas jarak jauh baru. Pastikan bahwa Anda tidak memerlukan riwayat versi untuk file lama sebelum melanjutkan.

Untuk menyinkronkan ke brankas jarak jauh baru, ikuti langkah-langkah berikut:

1. Buka **[[Pengaturan]] → Sync**.
2. Pilih **Kelola** di samping **Brankas jarak jauh**.
3. Pilih **Buat vault baru** dan ikuti langkah-langkah untuk membuatnya. Jika Anda kehabisan vault, Anda mungkin perlu [[Menyiapkan Obsidian Sync#Putuskan dari brankas jarak jauh|memutuskan]] dari brankas jarak jauh saat ini dan [[Menyiapkan Obsidian Sync#Hapus brankas jarak jauh|menghapusnya]] terlebih dahulu.
4. Atur file yang dikecualikan sebelum Anda mulai menyinkronkan ke brankas jarak jauh baru.
5. Mulai ulang Obsidian untuk menerapkan perubahan Anda.
6. Buka **[[Pengaturan]] → Sync**.
7. Pilih lanjutkan untuk mulai menyinkronkan ke brankas jarak jauh baru.

Brankas jarak jauh baru seharusnya lebih kecil dari vault sebelumnya, karena tidak adanya riwayat versi dan file yang dikecualikan.

## Tingkatkan paket Anda

Anda dapat meningkatkan paket Anda dengan masuk ke [dasbor akun Anda](https://obsidian.md/account/sync). Dari sana Anda dapat meningkatkan paket dari Sync Standard ke Sync Plus, dan menambah penyimpanan hingga 100 GB.

## Turunkan paket Anda

Jika Anda ingin menurunkan paket Sync tetapi penggunaan penyimpanan Anda melebihi batas paket baru, Anda perlu membebaskan ruang di brankas jarak jauh Anda. Saat ini, tidak ada metode langsung untuk menghapus file tertentu dari brankas jarak jauh yang ada dengan cepat. Ini karena lampiran disimpan dalam riwayat versi hingga dua minggu, dan riwayat versi dihitung terhadap batas penyimpanan Anda.

Cara tercepat untuk mengurangi penggunaan penyimpanan Sync Anda adalah membuat brankas jarak jauh baru dengan lampiran dinonaktifkan, lalu menghapus brankas jarak jauh lama yang melebihi batas penyimpanan. Perlu diketahui bahwa Anda akan kehilangan riwayat versi dengan melakukan ini.

Jika Anda menurunkan dari Sync Plus ke Sync Standard, Anda juga perlu mengurangi jumlah vault yang ada menjadi satu sebelum penurunan diizinkan.

### Pertahankan riwayat versi

Lampiran disimpan dalam [[Riwayat versi|riwayat versi]] Anda hingga dua minggu. Jika Anda berencana untuk menurunkan paket dalam waktu dekat, Anda dapat mulai dengan menghapus lampiran dari vault lokal Anda.

Setelah dua minggu, lampiran tersebut akan dibersihkan dari brankas jarak jauh dan tidak lagi dihitung terhadap batas penyimpanan Anda. Pada titik ini Anda akan dapat menurunkan paket sambil mempertahankan riwayat versi untuk jenis file lainnya, seperti file Markdown.
