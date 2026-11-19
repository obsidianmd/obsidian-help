---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Pindahkan vault Sync Anda ke wilayah yang berbeda.
---
Ketika Anda membuat [[Vault lokal dan remote|brankas jarak jauh]] melalui [[Pengantar Obsidian Sync|Obsidian Sync]], data Anda dienkripsi dan disimpan di salah satu server Sync regional Obsidian. Panduan ini menjelaskan cara memindahkan vault Sync Anda ke server regional yang berbeda.

## Wilayah yang tersedia

Wilayah berikut tersedia dengan Obsidian Sync. Kami merekomendasikan menggunakan **Otomatis** atau memilih lokasi yang dekat dengan Anda untuk mengurangi latensi dan membuat proses sinkronisasi lebih cepat.

![[Obsidian Sync/Keamanan dan privasi#^sync-geo-regions]]

## Catat pengaturan Anda

Ketika Anda menghubungkan perangkat ke brankas jarak jauh baru, Sync dapat menggunakan pengaturan yang Anda aktifkan pada saat itu. Jika Anda menyimpan pengaturan berbeda di perangkat berbeda, catat pengaturan tersebut sebelum memulai. Misalnya, Anda mungkin tidak menyinkronkan file media besar ke ponsel Anda.

Di setiap perangkat yang menggunakan brankas jarak jauh, buka **[[Pengaturan]] → Sync** dan catat pengaturan berikut. Tangkapan layar bisa membantu.

- **Sinkronisasi selektif**
- **Sinkronkan konfigurasi vault**
- **Folder yang dikecualikan**
- Pengaturan khusus perangkat, seperti **Nama perangkat** dan **Resolusi konflik**

Lihat [[Pengaturan Sync dan sinkronisasi selektif]] untuk mengetahui fungsi setiap pengaturan dan mana yang aktif secara bawaan.

## Mengubah wilayah Sync

Untuk mengubah wilayah brankas jarak jauh Anda, Anda perlu membuat ulang vault Anda di server Sync yang berbeda. Perlu dicatat bahwa Anda juga dapat mengubah wilayah dengan menggunakan asisten migrasi [[Tingkatkan enkripsi Sync]], jika brankas jarak jauh Anda menggunakan versi yang lebih lama.

> [!danger] Migrasi bersifat destruktif
> 
> **Selalu [[Cadangkan file Obsidian Anda|cadangkan]] brankas Anda sebelum melanjutkan migrasi.**
> 
> Ketika Anda memigrasikan brankas jarak jauh, data Anda akan diganti. Ini berarti:
> 
> 1. Data jarak jauh akan dihapus dari server Obsidian, dan data vault akan diunggah ulang sebagai gantinya.
> 2. Semua [[Riwayat versi|riwayat versi]] untuk vault tersebut akan hilang.

![[Menyiapkan Obsidian Sync#Memutuskan koneksi dari brankas jarak jauh]]

Jika Anda menggunakan [[Paket dan batas penyimpanan|Paket Standard]], Anda juga perlu [[Menyiapkan Obsidian Sync#Menghapus brankas jarak jauh|menghapus brankas jarak jauh Anda]] sebelum melanjutkan.

![[Menyiapkan Obsidian Sync#Membuat brankas jarak jauh baru]]

## Menghubungkan kembali perangkat lain Anda

Setelah brankas jarak jauh baru selesai disinkronkan di perangkat pertama Anda, alihkan setiap perangkat lain yang menggunakan brankas jarak jauh lama. Kerjakan satu perangkat pada satu waktu.

1. Di perangkat tersebut, [[Menyiapkan Obsidian Sync#Memutuskan koneksi dari brankas jarak jauh|putuskan koneksi dari brankas jarak jauh lama]].
2. [[Menyiapkan Obsidian Sync#Menyinkronkan brankas jarak jauh di perangkat lain|Hubungkan ke brankas jarak jauh baru]]. Jangan pilih **Mulai menyinkronkan** dulu.
3. Atur **Sinkronisasi selektif**, **Sinkronkan konfigurasi vault**, dan **Folder yang dikecualikan** agar sesuai dengan pengaturan yang Anda catat untuk perangkat ini.
4. Mulai ulang Obsidian. Di seluler atau tablet, Anda mungkin perlu menutup paksa aplikasi.
5. Pilih **Mulai menyinkronkan** atau **Lanjutkan**, dan tunggu hingga Sync selesai sebelum Anda beralih ke perangkat berikutnya.

Selain itu, Anda dapat [[Menyiapkan Obsidian Sync#Menghapus brankas jarak jauh|menghapus brankas jarak jauh lama Anda]] setelah Anda mengonfirmasi transisi ke brankas jarak jauh baru dan wilayahnya.
