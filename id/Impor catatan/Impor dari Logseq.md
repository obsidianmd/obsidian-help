---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda memigrasikan catatan dari graf Logseq berbasis file (sekarang disebut "Logseq OG") menggunakan [[Impor|plugin Importer]] resmi. Importer membaca file Markdown Logseq secara langsung dan mengonversi format khusus Logseq menjadi file yang tahan lama yang dapat Anda gunakan secara offline dengan Obsidian dan aplikasi lain.

## Sebelum Anda memulai

- Cadangkan graf Logseq dan brankas Obsidian Anda.
- Temukan folder root dari graf Logseq Anda. Biasanya folder ini berisi folder bernama `pages`, `journals`, `assets`, dan `logseq`.
- Pastikan Anda menggunakan graf Logseq berbasis file. Graf database Logseq belum didukung.

## Impor graf Logseq Anda

Anda memerlukan plugin Obsidian [[Impor|Importer]] resmi, yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]] → Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
2. Aktifkan plugin Importer.
3. Buka **Importer** menggunakan [[Palet perintah]] atau ikon bilah alat.
4. Di bagian **Format file**, pilih **Logseq**.
5. Di bagian **Pilih folder**, pilih folder root dari graf Anda. Pilih folder yang berisi `pages` dan `journals`, bukan salah satu dari folder tersebut secara individual.
6. Tinjau folder yang terdeteksi dan kecualikan folder yang tidak ingin Anda impor.
7. Pilih folder output dan tempat lampiran yang diimpor harus disimpan.
8. Tinjau opsi impor dan pratinjau contoh catatan yang dikonversi.
9. Pilih **Impor** dan tunggu hingga impor selesai.

## Batasan

- Whiteboard tidak diimpor.
- Kueri dipertahankan sebagai blok kode jika Anda memilih untuk menyimpannya.
- Makro template dinamis Logseq tetap sebagai teks literal.
- Penjadwalan flashcard Logseq, anotasi PDF, dan data khusus aplikasi lainnya tidak dimigrasikan.

## Pengaturan

Importer mengonversi konvensi umum Logseq, termasuk:

- Properti halaman menjadi [[Properti]] Obsidian.
- Alias halaman, tag, namespace, dan tautan.
- Status alur kerja menjadi penanda daftar kotak centang, dengan prioritas dan tanggal dipertahankan sebagai teks yang dapat dibaca.
- ID blok, referensi blok, dan embed blok menjadi tautan dan sematan Obsidian.
- Nama file jurnal dan tautan tanggal.
- Sorotan, daftar bernomor, blok Org, sematan media, dan file tertaut dari folder `assets` graf.

### Jurnal

Secara bawaan, **Gunakan pengaturan catatan harian** diaktifkan. Jurnal yang diimpor menggunakan folder dan format tanggal yang dikonfigurasi oleh plugin inti [[Catatan harian]]. Ini mungkin menempatkan jurnal di luar folder output yang dipilih di Importer.

Jika Anda menonaktifkan opsi ini, jurnal ditulis ke folder `Journals` di dalam folder output yang dipilih dan menggunakan format nama catatan `YYYY-MM-DD`.

### Ratakan kerangka

Logseq menggunakan poin bersarang sebagai struktur halaman. Secara bawaan, Importer mempertahankan struktur kerangka ini. Aktifkan **Ratakan kerangka** untuk mengonversi blok kerangka menjadi kombinasi paragraf, judul, dan daftar konvensional. Tugas dan kelompok item mirip daftar tetap sebagai item daftar, tetapi konversinya bersifat heuristik. Tinjau beberapa contoh di pratinjau sebelum mengimpor graf yang besar.

### Pertahankan data yang tidak kompatibel

Kueri, flashcard, dan entri pelacakan waktu Logseq tidak memiliki padanan langsung di Obsidian. Opsi impor memungkinkan Anda memilih apakah akan menyimpan setiap jenis konten. Jika disimpan, konten tetap sebagai teks biasa.

- **Simpan kueri** mempertahankan kueri sebagai blok kode berpagar atau kode sebaris.
- **Simpan flashcard** mempertahankan penanda `#card` dan pembungkus cloze sebagai teks biasa.
- **Simpan pelacakan waktu** mempertahankan entri `LOGBOOK` dan `CLOCK` sebagai teks biasa.

## Template

Gunakan [[Template Importer|Template Importer]] untuk mengonfigurasi sepenuhnya cara data Logseq Anda diimpor.

![[Template Importer#Variabel]]

## Pemecahan masalah

Jika Importer tidak menemukan catatan apa pun, pastikan Anda memilih folder root graf dan bahwa folder halaman atau jurnal yang dikonfigurasi berisi file Markdown.

Jika lampiran dilaporkan hilang, konfirmasi bahwa file yang direferensikan masih ada di folder `assets` graf.

Untuk masalah lainnya, cari di [pelacak masalah Importer](https://github.com/obsidianmd/obsidian-importer/issues) atau kirimkan laporan bug dengan contoh graf kecil.
