---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Pelajari cara beralih dari solusi sinkronisasi Anda saat ini ke Obsidian Sync.
---
Pelajari cara beralih dari solusi sinkronisasi Anda saat ini ke Obsidian Sync.

> [!warning] Hindari menggunakan beberapa solusi untuk menyinkronkan file yang sama
> Kami [[Pertanyaan yang sering diajukan#Bisakah saya menggunakan sinkronisasi pihak ketiga bersama Obsidian Sync?|tidak merekomendasikan]] penggunaan Obsidian Sync bersamaan dengan layanan penyimpanan cloud (misalnya iCloud, Dropbox, OneDrive, Google Drive) karena dapat menyebabkan konflik. Namun, layanan penyimpanan cloud dapat berperan dalam strategi [[Cadangkan file Obsidian Anda|pencadangan]] Anda.

## Pindahkan brankas Anda keluar dari layanan sinkronisasi pihak ketiga atau penyimpanan cloud

Jika brankas Anda disimpan di salah satu lokasi berikut, kemungkinan besar sedang disinkronkan oleh layanan pihak ketiga:

- **Windows**: `C:\Users\Username\Desktop` atau `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` atau `/users/username/Documents`
- **iOS**: Folder **iCloud** di dalam aplikasi Files
- **Lainnya**: Folder apa pun di bawah layanan sinkronisasi, seperti `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, dll.

Meskipun Android dan Linux cenderung memiliki lebih sedikit masalah terkait ini, tetap disarankan untuk memeriksa lokasi brankas Anda di perangkat-perangkat tersebut.

> [!tip] Jika brankas lokal Anda saat ini terhubung ke brankas jarak jauh, Obsidian akan mencoba mendeteksi apakah brankas tersebut berada di layanan sinkronisasi. Jika ya, Anda akan melihat pesan di bagian atas pengaturan Obsidian Sync.

Untuk menghindari konflik dengan layanan sinkronisasi, kami merekomendasikan untuk menyimpan brankas Obsidian Anda di lokasi berikut:

- **Windows**: Lokasi yang direkomendasikan secara berurutan:
    1. `D:\` atau drive non-C, non-jaringan lainnya di perangkat Anda
    2. `C:\Vaults` (jika Anda memiliki izin untuk menggunakan drive C:\)
    3. `C:\Users\Username\Vaults` (jika Anda harus menyimpan brankas di dalam C:\Users\Username, pastikan OneDrive diatur untuk tidak menghapus file. OneDrive umumnya kurang agresif di luar folder `Desktop` dan `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Tidak ada rekomendasi spesifik karena beragamnya sistem file. Pastikan saja Obsidian memiliki akses baca/tulis penuh dan tidak ada layanan sinkronisasi yang mengelola folder tersebut.
- **iOS/iPadOS**: Simpan brankas di **On My iPhone** atau **On the Device**.
- **Android**: Gunakan folder `Documents/` di perangkat Anda.

## Pindahkan brankas Anda menggunakan Obsidian di desktop

![[Kelola brankas#Pindahkan brankas ke folder lain]]

## Pindahkan brankas Anda di seluler

Di perangkat seluler, Obsidian beroperasi dalam lingkungan sandbox, artinya Anda tidak dapat memindahkan brankas di dalam aplikasi seperti yang bisa dilakukan di desktop.

### Android

Sistem file Android sangat bervariasi antar perangkat, tetapi secara umum, ikuti langkah yang sama seperti yang Anda lakukan untuk memindahkan brankas secara manual, pastikan brankas tersebut dihapus dari layanan sinkronisasi apa pun di perangkat Anda.

### iOS dan iPadOS

Untuk memindahkan brankas iCloud yang ada ke perangkat Anda, ikuti langkah-langkah berikut:

> [!note] Jika Anda sudah memiliki data di perangkat lain dan telah menyiapkan Obsidian Sync, disarankan untuk [[Menyiapkan Obsidian Sync#Sinkronkan brankas jarak jauh di perangkat lain|menyiapkan brankas lokal baru dari Sync]] sebagai gantinya.

- [[Cadangkan file Obsidian Anda|Cadangkan]] brankas Anda.
- Buat brankas baru di perangkat Anda, pastikan **Save in iCloud Drive** dinonaktifkan.
- Paksa tutup aplikasi Obsidian di semua perangkat untuk menjeda Sync.
- Buka aplikasi **Files** di perangkat iOS/iPadOS Anda.
- Tekan lama folder brankas di bawah **iCloud Drive → Obsidian**, lalu pilih **Move**.
- Pindahkan brankas ke **On My iPhone/Device → Obsidian** dan konfirmasi bahwa brankas sudah terlihat.
- Ketuk **Copy**.
- Kembali ke **iCloud Drive → Obsidian** dan hapus folder brankas lama.

Setelah Anda membuka kembali Obsidian, brankas seharusnya menampilkan ikon brankas alih-alih ikon cloud, mengonfirmasi bahwa brankas tidak lagi berada di iCloud Drive. Obsidian Sync juga tidak akan lagi menampilkan pesan peringatan di dalam pengaturannya.

## Langkah berikutnya

- Ingin mulai menggunakan Obsidian Sync? [[Menyiapkan Obsidian Sync]]
- Masih butuh bantuan? Lihat [[Pemecahan masalah Obsidian Sync]]
