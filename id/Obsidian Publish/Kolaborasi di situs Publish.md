---
permalink: publish/collaborate
publish: true
mobile: true
description: Pelajari cara berkolaborasi dengan pengguna Obsidian lainnya di situs Obsidian Publish Anda.
---
Pelajari cara berkolaborasi di situs [[Pengantar Obsidian Publish|Obsidian Publish]] Anda dengan pengguna Obsidian lainnya. Dengan menambahkan teman dan kolega Anda sebagai kolaborator, mereka dapat mempublikasikan perubahan ke situs Anda.

Hanya pemilik situs yang memerlukan langganan aktif untuk Obsidian Publish. Kolaborator hanya memerlukan [akun Obsidian](https://obsidian.md/account).

> [!warning] Sebelum Anda mempublikasikan perubahan ke situs bersama, pastikan untuk [[#Sinkronisasi perubahan antar kolaborator|menyinkronisasi perubahan antar kolaborator]]. Jika tidak, Anda berisiko menimpa perubahan dari kolaborator lain.

## Menambahkan kolaborator ke situs

1. Di [[Bilah alat]], pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]] atau buka [[Palet perintah]] dan ketik **Publish: Publish changes...**
2. Pada dialog **Publikasikan perubahan**, klik **Ubah pengaturan situs** ![[lucide-cog.svg#icon]].
3. Di samping **Kolaborasi situs**, pilih **Kelola**.
4. Di **Undang pengguna**, masukkan email kolaborator.
5. Pilih **Tambah**.

## Menghapus kolaborator dari situs

1. Di [[Bilah alat]], pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]] atau buka [[Palet perintah]] dan ketik **Publish: Publish changes...**
2. Pada dialog **Publikasikan perubahan**, klik **Ubah pengaturan situs** ![[lucide-cog.svg#icon]].
3. Di samping **Kolaborasi situs**, pilih **Kelola**.
4. Di samping kolaborator yang ingin Anda hapus, pilih **Hapus pengguna** ![[lucide-x.svg#icon]].

## Sinkronisasi perubahan antar kolaborator

Obsidian Publish tidak menyinkronkan perubahan yang dipublikasikan antar brankas lokal secara otomatis. Sebagai gantinya, kolaborator perlu menyinkronkan perubahan dari kolaborator lain secara manual.

Untuk memperbarui catatan lokal dengan perubahan dari situs langsung:

1. Di [[Bilah alat]], pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]] atau buka [[Palet perintah]] dan ketik **Publish: Publish changes...**
2. Klik kanan atau tekan lama pada perubahan yang ingin Anda sinkronkan, lalu pilih **Gunakan versi nyata**. **Ini akan menimpa catatan di brankas lokal Anda.**

> [!tip] Kami menyarankan Anda menggunakan alat lain untuk menyinkronkan perubahan antar brankas, seperti [[Pengantar Obsidian Sync|Obsidian Sync]] atau [git](https://git-scm.com/).

## Izin

Tabel berikut mencantumkan izin situs yang tersedia untuk pemilik dan kolaborator:

| Tindakan                                    | Kolaborator | Pemilik |
|---------------------------------------------|:-----------:|:-------:|
| Mempublikasikan halaman baru                | ✓           | ✓       |
| Mempublikasikan perubahan ke halaman yang sudah dipublikasikan | ✓           | ✓       |
| Membatalkan publikasi halaman               | ✓           | ✓       |
| Mengonfigurasi pengaturan situs             |             | ✓       |
| Mengelola izin                              |             | ✓       |
