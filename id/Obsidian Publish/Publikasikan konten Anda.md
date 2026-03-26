---
permalink: publish/publish
publish: true
mobile: true
description: Pelajari cara menerbitkan konten Anda menggunakan Obsidian Publish.
aliases:
  - Obsidian Publish/Mempublikasi dan membatalkan publikasi catatan
---
Halaman ini menjelaskan cara mengelola konten yang telah dipublikasikan. Untuk mempelajari cara menyesuaikan gaya situs Anda, lihat [[Kustomisasi situs Anda]].

## Prasyarat

- Akun Obsidian. Jika Anda belum memilikinya, [daftar sekarang](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Langganan Obsidian Publish yang aktif. Jika Anda belum memilikinya, berlangganan dari [dasbor akun Anda](https://obsidian.md/account/publish).
- Plugin inti **Publish** telah [[Menyiapkan Obsidian Publish#Mengaktifkan Obsidian Publish|diaktifkan]].
- Sebuah [[Kelola situs#Buat situs baru|situs Publish]] telah dibuat.

## Mempublikasikan catatan

1. Di **Bilah alat**, pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Di dialog **Publikasikan perubahan**, pilih **BARU** untuk melihat semua catatan yang belum dipublikasikan.
3. Pilih catatan yang ingin Anda publikasikan.
4. Pilih **Publikasikan**.

## Membatalkan publikasi catatan

Catatan tetap ada di brankas lokal Anda meskipun Anda membatalkan publikasinya.

1. Di **Bilah alat**, pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Di dialog **Publikasikan perubahan**, pilih **TIDAK BERUBAH** untuk melihat semua catatan yang telah dipublikasikan.
3. Pilih catatan yang ingin Anda batalkan publikasinya.
4. Pilih **Publikasikan**.

## Memperbarui catatan yang telah dipublikasikan

1. Di **Bilah alat**, pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Di dialog **Publikasikan perubahan**, pilih **DIUBAH** untuk melihat semua catatan yang dimodifikasi sejak publikasi terakhir.
3. Pilih catatan yang ingin Anda perbarui.
4. Pilih **Publikasikan**.

> [!hint] Penghapusan catatan dan gambar yang diganti nama atau dihapus dari Publish terjadi di langkah ini. Anda harus memilih kotak centang secara manual untuk menghapus data ini, karena tidak dipilih secara otomatis demi keamanan.

## Mempublikasikan data yang tertaut

Saat mempublikasikan catatan yang berisi tautan ke catatan lain atau gambar yang disematkan, tautan yang rusak dapat terjadi kecuali catatan yang tertaut juga dipublikasikan. **Obsidian Publish** membantu mencegah hal ini dengan secara otomatis memilih media yang tertaut dari catatan yang telah Anda pilih.

Untuk menyertakan semua catatan yang tertaut, pilih **Tambahkan yang tertaut** di dialog **Publikasikan perubahan**.

Sebelum mempublikasikan, tinjau pilihan yang diperbarui untuk memastikan tidak menyertakan data yang belum siap Anda publikasikan.

> [!tip] Fungsi **Tambahkan yang tertaut** menghormati pengecualian yang ditentukan di [[#Abaikan data]].

## Memilih data untuk dipublikasikan secara otomatis

Atur `publish: true` di [[Properti]] catatan untuk menyertakannya secara otomatis saat dipublikasikan sebagai catatan baru atau yang diubah.

Anda juga dapat memilih catatan dan gambar yang tertaut secara otomatis di folder tertentu dengan menambahkannya sebagai folder **Disertakan**:

1. Di **Bilah alat**, pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]] atau buka [[Palet perintah]] dan ketik **Publish: Publish changes...**.
2. Pilih ikon **Kelola filter publikasi** ![[lucide-filter.svg#icon]].
3. Di bagian **Masukkan folder**, pilih **Kelola**.
4. Pilih folder yang ingin Anda sertakan dari daftar saran.
5. Folder ditambahkan ke daftar yang disertakan.
6. Pilih **Selesai** jika sudah selesai.

### Abaikan data

Untuk mengabaikan catatan di Obsidian Publish, atur `publish: false` di [[Properti]] catatan tersebut. Catatan tidak lagi muncul dalam daftar catatan untuk dipublikasikan.

Anda juga dapat mengabaikan catatan dan gambar secara otomatis di folder tertentu dengan menambahkannya sebagai folder **Dikecualikan**:

1. Di **Bilah alat**, pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]] atau buka [[Palet perintah]] dan ketik **Publish: Publish changes...**.
2. Pilih ikon **Kelola filter publikasi** ![[lucide-filter.svg#icon]].
3. Di bagian **Folder yang dikecualikan**, pilih **Kelola**.
4. Pilih folder yang ingin Anda kecualikan dari daftar saran.
5. Folder ditambahkan ke daftar yang dikecualikan.
6. Pilih **Selesai** jika sudah selesai.

> [!note] `publish: true` menimpa folder yang dikecualikan
> Jika sebuah file memiliki `publish: true`, file tersebut tetap akan dipublikasikan meskipun berada di folder atau filter yang dikecualikan. Ini karena `publish: true` memberikan kontrol yang lebih spesifik.
