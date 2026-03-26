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

Selain itu, Anda dapat [[Menyiapkan Obsidian Sync#Menghapus brankas jarak jauh|menghapus brankas jarak jauh lama Anda]] setelah Anda mengonfirmasi transisi ke brankas jarak jauh baru dan wilayahnya.
