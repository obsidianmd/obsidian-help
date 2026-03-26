---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Pindahkan vault Sync Anda ke wilayah yang berbeda, lakukan peningkatan enkripsi.'
---
Secara bawaan, Obsidian Sync menggunakan [[Keamanan dan privasi#Enkripsi|enkripsi ujung-ke-ujung]] untuk semua data Anda. Ini menjamin bahwa tidak ada seorang pun — bahkan tim Obsidian — yang dapat mengakses catatan Anda.

Obsidian sesekali meningkatkan enkripsi Sync untuk mempertahankan standar [[Keamanan dan privasi|keamanan]] tertinggi. Jika peningkatan enkripsi tersedia, Anda akan melihat opsi berjudul **Tingkatkan enkripsi brankas** di **Pengaturan Obsidian → Sync**. Proses ini juga memungkinkan Anda untuk mengubah [[Wilayah Sync|Wilayah Sync]] Anda.

## Versi enkripsi

Semua brankas baru secara otomatis menggunakan enkripsi terbaru. Brankas yang sudah ada dapat ditingkatkan menggunakan asisten migrasi. Perhatikan bahwa semua perangkat harus menggunakan versi aplikasi Obsidian yang mendukung versi enkripsi Sync yang menjadi tujuan migrasi Anda.

| Tanggal rilis                                                           | Versi Sync   | Versi aplikasi minimum |
| ----------------------------------------------------------------------- | ------------ | ---------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3                  |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21                 |

## Tingkatkan enkripsi dengan asisten migrasi

Sebelum Anda melanjutkan, buat [[Cadangkan file Obsidian Anda|cadangan]] brankas Anda untuk mencegah potensi kehilangan data. Proses ini akan menghapus secara permanen semua data di brankas jarak jauh Anda dengan enkripsi lama, termasuk riwayat versi.

> [!danger] Migrasi bersifat destruktif
> 
> **Selalu [[Cadangkan file Obsidian Anda|cadangkan]] brankas Anda sebelum melanjutkan migrasi.**
> 
> Saat Anda memigrasikan brankas jarak jauh, data Anda akan diganti. Ini berarti:
> 
> 1. Data jarak jauh akan dihapus dari server Obsidian, dan data brankas akan diunggah ulang menggantikannya.
> 2. Semua [[Riwayat versi|riwayat versi]] untuk brankas akan hilang.

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, pilih **Sync**.
3. Klik **Tingkatkan brankas**. Opsi ini hanya akan terlihat jika peningkatan tersedia untuk brankas jarak jauh Anda.
4. Periksa kembali cadangan Anda dan klik **Lanjutkan**.
5. Di **Nama vault**, masukkan nama brankas jarak jauh.
6. Di **Wilayah**, pilih [[Menyiapkan Obsidian Sync#Server sync regional|wilayah]] server untuk brankas jarak jauh Anda.
7. Di **Kata sandi enkripsi**, pilih kata sandi untuk brankas Anda. Ini membuat brankas dengan enkripsi ujung-ke-ujung. Kata sandi brankas terpisah dari akun Obsidian Anda dan dapat berbeda untuk setiap brankas Anda. Untuk informasi lebih lanjut, lihat [[Keamanan dan privasi]].
8. Setelah Anda mengunggah ulang data dengan enkripsi baru, hubungkan kembali ke brankas Sync baru di perangkat lain Anda.
