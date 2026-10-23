---
permalink: import/apple-notes
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Apple Notes menggunakan [[Impor|plugin Importer]]. Ini akan mengonversi data Apple Notes Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

Saat ini, Importer hanya mendukung migrasi dari Apple Notes di macOS. Fitur ini belum tersedia di iOS.

## Mengimpor data Apple Notes ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Impor]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Pergi ke **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Apple Notes**.
6. Pilih **Impor**.
7. Pilih **Buka** pada popup berjudul `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Tinjau templat yang dihasilkan dan pratinjau contoh dari catatan Anda.
9. Pilih **Impor** dan tunggu hingga impor selesai.

## Menyesuaikan catatan yang diimpor

Sebelum impor dimulai, Importer menampilkan pratinjau yang dihasilkan dari pilihan Apple Notes Anda. Anda dapat mengedit templat yang dihasilkan, properti, dan nama catatan, atau memilih templat Markdown dari brankas Anda. Lihat [[Template Importer]].

## Konten yang didukung

Plugin Obsidian Importer mendukung hampir semua jenis konten Apple Notes. Ini termasuk tabel, gambar, gambar tangan, pindaian, PDF, dan tautan yang diperkenalkan di iOS 17.

> [!Warning]
> Catatan yang dilindungi kata sandi dienkripsi oleh Apple, sehingga harus dibuka kuncinya sebelum mengimpornya. Catatan yang terkunci akan dilewati.

### Pindaian

Apple menyimpan pindaian dalam berbagai format tergantung bagaimana pindaian tersebut dibuat. Untuk mempertahankan data asli, ini berarti pindaian akan diekspor dengan cara yang berbeda.

* Pindaian yang dibuat atau dilihat pada versi macOS atau iOS yang lebih lama akan diekspor sebagai serangkaian gambar yang tidak dipotong.
* Pindaian yang dibuat atau dilihat pada versi macOS atau iOS yang lebih baru biasanya akan diekspor sebagai gambar yang dipotong.
* Pindaian yang telah diedit menggunakan fitur yang diperkenalkan di iOS 17 biasanya akan diekspor sebagai PDF.

## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya bagaimana data Apple Notes Anda diimpor.

![[Template Importer#Variables]]

Selain itu, Apple Notes menyediakan variabel berikut.

| Variabel       | Deskripsi                          |
| -------------- | ---------------------------------- |
| `{{isPinned}}` | Apakah catatan tersebut disematkan. |
